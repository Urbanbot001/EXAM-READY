#!/usr/bin/env python3
"""
Past Questions Database Manager
Stores and manages past questions from official sources
"""

import json
import os
from datetime import datetime
from typing import List, Dict

class QuestionManager:
    """Manage past questions database"""
    
    def __init__(self, db_file='questions_db.json'):
        self.db_file = db_file
        self.questions = self.load_database()
    
    def load_database(self) -> List[Dict]:
        """Load questions from JSON database"""
        if os.path.exists(self.db_file):
            with open(self.db_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        return []
    
    def save_database(self):
        """Save questions to JSON database"""
        with open(self.db_file, 'w', encoding='utf-8') as f:
            json.dump(self.questions, f, indent=2, ensure_ascii=False)
        print(f"✅ Saved {len(self.questions)} questions to database")
    
    def add_question(self, question: Dict):
        """
        Add a new question to database
        question format:
        {
            'id': unique_id,
            'exam_type': 'jamb' | 'waec' | 'neco',
            'subject': 'Mathematics',
            'year': 2024,
            'question': 'Question text',
            'options': ['A. ...', 'B. ...', 'C. ...', 'D. ...'],
            'answer': 'B',
            'explanation': 'Explanation text',
            'topic': 'Algebra',
            'difficulty': 'medium',
            'source': 'official_jamb_2024.pdf'
        }
        """
        question['added_at'] = datetime.now().isoformat()
        self.questions.append(question)
        print(f"✅ Added question: {question['subject']} - {question['year']}")
    
    def get_questions_by_subject(self, subject: str, exam_type: str = None) -> List[Dict]:
        """Get all questions for a subject"""
        filtered = [q for q in self.questions if q['subject'].lower() == subject.lower()]
        
        if exam_type:
            filtered = [q for q in filtered if q['exam_type'] == exam_type]
        
        return filtered
    
    def get_questions_by_year(self, year: int, exam_type: str) -> List[Dict]:
        """Get all questions from a specific year"""
        return [q for q in self.questions if q['year'] == year and q['exam_type'] == exam_type]
    
    def import_from_pdf(self, pdf_path: str, exam_type: str, subject: str, year: int):
        """
        Import questions from official PDF (you'd parse PDF here)
        This is where you'd extract questions from official JAMB/WAEC PDFs
        """
        print(f"📄 Importing from {pdf_path}...")
        
        # You would use PyPDF2 or pdfplumber to extract text
        # Then parse questions using regex or NLP
        
        # For now, manual entry template:
        print("⚠️  Manual entry required. Use add_question() method.")
    
    def export_for_frontend(self, output_file='../frontend/public/questions.json'):
        """Export questions in format ready for Next.js frontend"""
        # Group by exam type and subject
        organized = {}
        
        for q in self.questions:
            exam = q['exam_type']
            subject = q['subject']
            
            if exam not in organized:
                organized[exam] = {}
            if subject not in organized[exam]:
                organized[exam][subject] = []
            
            organized[exam][subject].append(q)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(organized, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Exported to {output_file}")
    
    def get_stats(self):
        """Get database statistics"""
        stats = {
            'total_questions': len(self.questions),
            'by_exam': {},
            'by_subject': {},
            'by_year': {}
        }
        
        for q in self.questions:
            # Count by exam type
            exam = q['exam_type']
            stats['by_exam'][exam] = stats['by_exam'].get(exam, 0) + 1
            
            # Count by subject
            subject = q['subject']
            stats['by_subject'][subject] = stats['by_subject'].get(subject, 0) + 1
            
            # Count by year
            year = q['year']
            stats['by_year'][year] = stats['by_year'].get(year, 0) + 1
        
        return stats


# Example usage
if __name__ == '__main__':
    manager = QuestionManager()
    
    # Add sample question
    sample_question = {
        'id': 1,
        'exam_type': 'jamb',
        'subject': 'Mathematics',
        'year': 2024,
        'question': 'If 2x + 3 = 11, what is the value of x?',
        'options': ['A. 2', 'B. 4', 'C. 5', 'D. 8'],
        'answer': 'B',
        'explanation': 'Subtract 3 from both sides: 2x = 8, then divide by 2: x = 4',
        'topic': 'Algebra',
        'difficulty': 'easy',
        'source': 'jamb_2024_mathematics.pdf'
    }
    
    manager.add_question(sample_question)
    manager.save_database()
    
    # Show stats
    print("\n📊 Database Stats:")
    print(json.dumps(manager.get_stats(), indent=2))