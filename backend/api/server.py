#!/usr/bin/env python3
"""
Flask API Server
Serves exam data to Next.js frontend
"""
# Add this import at the top
from datetime import datetime, timedelta
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
import sys

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from database.question_manager import QuestionManager

app = Flask(__name__)
CORS(app)  # Enable CORS for Next.js

# Initialize question manager
question_manager = QuestionManager()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    stats = question_manager.get_stats()
    return jsonify({
        'status': 'healthy',
        'message': 'ExamReady API is running',
        'total_questions': stats['total_questions']
    })

@app.route('/api/questions/<exam_type>/<subject>', methods=['GET'])
def get_questions(exam_type, subject):
    """Get questions by exam type and subject"""
    try:
        year = request.args.get('year', type=int)
        limit = request.args.get('limit', default=50, type=int)
        
        questions = question_manager.get_questions_by_subject(subject, exam_type)
        
        if year:
            questions = [q for q in questions if q['year'] == year]
        
        # Limit results
        questions = questions[:limit]
        
        return jsonify({
            'success': True,
            'questions': questions,
            'total': len(questions),
            'exam_type': exam_type,
            'subject': subject
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/subjects/<exam_type>', methods=['GET'])
def get_subjects(exam_type):
    """Get available subjects for exam type with question counts"""
    try:
        stats = question_manager.get_stats()
        
        # Get all questions for this exam type
        all_questions = [q for q in question_manager.questions if q['exam_type'] == exam_type]
        
        # Group by subject
        subjects_data = {}
        for q in all_questions:
            subject = q['subject']
            if subject not in subjects_data:
                subjects_data[subject] = {
                    'name': subject,
                    'count': 0,
                    'years': set()
                }
            subjects_data[subject]['count'] += 1
            subjects_data[subject]['years'].add(q['year'])
        
        # Convert to list
        subjects = []
        for subject, data in subjects_data.items():
            subjects.append({
                'name': data['name'],
                'questions': data['count'],
                'years': sorted(list(data['years']), reverse=True)
            })
        
        return jsonify({
            'success': True,
            'exam_type': exam_type,
            'subjects': subjects
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get database statistics"""
    stats = question_manager.get_stats()
    return jsonify({
        'success': True,
        'stats': stats
    })

@app.route('/api/random/<exam_type>/<subject>', methods=['GET'])
def get_random_questions(exam_type, subject):
    """Get random questions for practice"""
    try:
        import random
        
        limit = request.args.get('limit', default=10, type=int)
        
        questions = question_manager.get_questions_by_subject(subject, exam_type)
        
        if len(questions) > limit:
            questions = random.sample(questions, limit)
        
        return jsonify({
            'success': True,
            'questions': questions,
            'total': len(questions)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

# Add these new routes BEFORE if __name__ == '__main__':

@app.route('/api/exam-dates', methods=['GET'])
def get_all_exam_dates():
    """Get all exam dates"""
    try:
        exam_type = request.args.get('type')  # Optional filter
        
        # Load exam dates from JSON
        dates_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'exam_dates.json')
        
        with open(dates_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        exams = data['exams']
        
        # Filter by type if specified
        if exam_type:
            exams = [e for e in exams if e['exam_type'] == exam_type]
        
        # Calculate days remaining for each exam
        for exam in exams:
            if exam['exam']['start'] != 'N/A':
                exam_date = datetime.strptime(exam['exam']['start'], '%Y-%m-%d')
                today = datetime.now()
                days_left = (exam_date - today).days
                exam['days_left'] = max(0, days_left)
            else:
                exam['days_left'] = None
        
        return jsonify({
            'success': True,
            'exams': exams,
            'last_updated': data['last_updated']
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/exam-dates/<exam_type>', methods=['GET'])
def get_exam_dates_by_type(exam_type):
    """Get exam dates for specific exam type"""
    try:
        dates_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'exam_dates.json')
        
        with open(dates_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        exams = [e for e in data['exams'] if e['exam_type'] == exam_type]
        
        # Calculate days remaining
        for exam in exams:
            if exam['exam']['start'] != 'N/A':
                exam_date = datetime.strptime(exam['exam']['start'], '%Y-%m-%d')
                today = datetime.now()
                days_left = (exam_date - today).days
                exam['days_left'] = max(0, days_left)
            else:
                exam['days_left'] = None
        
        return jsonify({
            'success': True,
            'exam_type': exam_type,
            'exams': exams
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/upcoming-exams', methods=['GET'])
def get_upcoming_exams():
    """Get exams happening in the next 90 days"""
    try:
        dates_file = os.path.join(os.path.dirname(__file__), '..', 'data', 'exam_dates.json')
        
        with open(dates_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        today = datetime.now()
        cutoff = today + timedelta(days=90)
        
        upcoming = []
        for exam in data['exams']:
            if exam['exam']['start'] != 'N/A':
                exam_date = datetime.strptime(exam['exam']['start'], '%Y-%m-%d')
                
                if today <= exam_date <= cutoff:
                    days_left = (exam_date - today).days
                    exam['days_left'] = days_left
                    upcoming.append(exam)
        
        # Sort by days left
        upcoming.sort(key=lambda x: x['days_left'])
        
        return jsonify({
            'success': True,
            'upcoming_exams': upcoming,
            'count': len(upcoming)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    print("🚀 Starting ExamReady API Server...")
    print("📡 Server running on http://localhost:5000")
    print("="*60)
    
    # Show current database stats
    stats = question_manager.get_stats()
    print(f"📚 Database loaded: {stats['total_questions']} questions")
    if stats['total_questions'] > 0:
        print("\n📊 Questions by exam:")
        for exam, count in stats['by_exam'].items():
            print(f"   {exam.upper()}: {count}")
    else:
        print("\n⚠️  Database is empty! Run 'python seed_questions.py' to add questions")
    
    print("\n📋 Available endpoints:")
    print("   - GET  /api/health")
    print("   - GET  /api/questions/<exam>/<subject>")
    print("   - GET  /api/subjects/<exam>")
    print("   - GET  /api/stats")
    print("   - GET  /api/random/<exam>/<subject>")
    print("="*60)
    print("\nPress Ctrl+C to stop\n")
    
    app.run(debug=True, host='0.0.0.0', port=5000)