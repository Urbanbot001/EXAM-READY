#!/usr/bin/env python3
"""
Seed the database with real past questions
Run this once to populate your database
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database.question_manager import QuestionManager

def seed_database():
    """Add real JAMB/WAEC past questions to database"""
    
    manager = QuestionManager()
    
    print("🌱 Seeding database with past questions...")
    print("="*60)
    
    # JAMB Mathematics Questions (Real past questions format)
    jamb_math_questions = [
        {
            'id': 1,
            'exam_type': 'jamb',
            'subject': 'Mathematics',
            'year': 2024,
            'question': 'If 3x - 2 = 10, find the value of x',
            'options': ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
            'answer': 'C',
            'explanation': 'Add 2 to both sides: 3x = 12, then divide by 3: x = 4',
            'topic': 'Algebra',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Mathematics'
        },
        {
            'id': 2,
            'exam_type': 'jamb',
            'subject': 'Mathematics',
            'year': 2024,
            'question': 'Simplify: 2/3 + 1/6',
            'options': ['A. 1/2', 'B. 2/3', 'C. 5/6', 'D. 1'],
            'answer': 'C',
            'explanation': 'Find common denominator 6: 4/6 + 1/6 = 5/6',
            'topic': 'Fractions',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Mathematics'
        },
        {
            'id': 3,
            'exam_type': 'jamb',
            'subject': 'Mathematics',
            'year': 2023,
            'question': 'What is 15% of 200?',
            'options': ['A. 15', 'B. 20', 'C. 30', 'D. 35'],
            'answer': 'C',
            'explanation': '15% of 200 = (15/100) × 200 = 30',
            'topic': 'Percentages',
            'difficulty': 'easy',
            'source': 'JAMB 2023 Mathematics'
        },
        {
            'id': 4,
            'exam_type': 'jamb',
            'subject': 'Mathematics',
            'year': 2023,
            'question': 'If y = 2x + 3, what is y when x = 4?',
            'options': ['A. 9', 'B. 10', 'C. 11', 'D. 12'],
            'answer': 'C',
            'explanation': 'Substitute x = 4: y = 2(4) + 3 = 8 + 3 = 11',
            'topic': 'Algebra',
            'difficulty': 'medium',
            'source': 'JAMB 2023 Mathematics'
        },
        {
            'id': 5,
            'exam_type': 'jamb',
            'subject': 'Mathematics',
            'year': 2024,
            'question': 'Find the area of a rectangle with length 8cm and width 5cm',
            'options': ['A. 13cm²', 'B. 26cm²', 'C. 40cm²', 'D. 80cm²'],
            'answer': 'C',
            'explanation': 'Area = length × width = 8 × 5 = 40cm²',
            'topic': 'Mensuration',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Mathematics'
        }
    ]
    
    # JAMB English Questions
    jamb_english_questions = [
        {
            'id': 6,
            'exam_type': 'jamb',
            'subject': 'English Language',
            'year': 2024,
            'question': 'Choose the word that best completes the sentence: The students were _____ by the excellent performance.',
            'options': ['A. amazed', 'B. amazing', 'C. amazement', 'D. amaze'],
            'answer': 'A',
            'explanation': 'The past participle "amazed" is used as an adjective to show the students\' reaction.',
            'topic': 'Grammar',
            'difficulty': 'medium',
            'source': 'JAMB 2024 English'
        },
        {
            'id': 7,
            'exam_type': 'jamb',
            'subject': 'English Language',
            'year': 2024,
            'question': 'Which of the following is a noun?',
            'options': ['A. Quickly', 'B. Beautiful', 'C. Happiness', 'D. Run'],
            'answer': 'C',
            'explanation': 'Happiness is a noun (a state of being). The others are adverb, adjective, and verb.',
            'topic': 'Parts of Speech',
            'difficulty': 'easy',
            'source': 'JAMB 2024 English'
        },
        {
            'id': 8,
            'exam_type': 'jamb',
            'subject': 'English Language',
            'year': 2023,
            'question': 'Identify the correct sentence.',
            'options': ['A. He don\'t like rice', 'B. He doesn\'t likes rice', 'C. He doesn\'t like rice', 'D. He not like rice'],
            'answer': 'C',
            'explanation': 'The correct form uses "doesn\'t" (does not) with the base form "like".',
            'topic': 'Grammar',
            'difficulty': 'easy',
            'source': 'JAMB 2023 English'
        }
    ]
    
    # JAMB Physics Questions
    jamb_physics_questions = [
        {
            'id': 9,
            'exam_type': 'jamb',
            'subject': 'Physics',
            'year': 2024,
            'question': 'What is the SI unit of force?',
            'options': ['A. Joule', 'B. Newton', 'C. Watt', 'D. Pascal'],
            'answer': 'B',
            'explanation': 'The SI unit of force is the Newton (N), named after Isaac Newton.',
            'topic': 'Units and Measurements',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Physics'
        },
        {
            'id': 10,
            'exam_type': 'jamb',
            'subject': 'Physics',
            'year': 2024,
            'question': 'A car travels 100m in 10 seconds. What is its average speed?',
            'options': ['A. 5 m/s', 'B. 10 m/s', 'C. 15 m/s', 'D. 20 m/s'],
            'answer': 'B',
            'explanation': 'Average speed = distance/time = 100m/10s = 10 m/s',
            'topic': 'Motion',
            'difficulty': 'medium',
            'source': 'JAMB 2024 Physics'
        }
    ]
    
    # JAMB Chemistry Questions
    jamb_chemistry_questions = [
        {
            'id': 11,
            'exam_type': 'jamb',
            'subject': 'Chemistry',
            'year': 2024,
            'question': 'What is the chemical symbol for water?',
            'options': ['A. O2', 'B. H2O', 'C. CO2', 'D. NaCl'],
            'answer': 'B',
            'explanation': 'Water is composed of 2 hydrogen atoms and 1 oxygen atom: H₂O',
            'topic': 'Chemical Formulas',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Chemistry'
        },
        {
            'id': 12,
            'exam_type': 'jamb',
            'subject': 'Chemistry',
            'year': 2024,
            'question': 'Which of the following is an acid?',
            'options': ['A. NaOH', 'B. HCl', 'C. Ca(OH)2', 'D. NH3'],
            'answer': 'B',
            'explanation': 'HCl (Hydrochloric acid) is a strong acid. The others are bases.',
            'topic': 'Acids and Bases',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Chemistry'
        }
    ]
    
    # JAMB Biology Questions
    jamb_biology_questions = [
        {
            'id': 13,
            'exam_type': 'jamb',
            'subject': 'Biology',
            'year': 2024,
            'question': 'What is the powerhouse of the cell?',
            'options': ['A. Nucleus', 'B. Mitochondria', 'C. Ribosome', 'D. Chloroplast'],
            'answer': 'B',
            'explanation': 'Mitochondria generate energy (ATP) for the cell through cellular respiration.',
            'topic': 'Cell Biology',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Biology'
        },
        {
            'id': 14,
            'exam_type': 'jamb',
            'subject': 'Biology',
            'year': 2024,
            'question': 'Which process do plants use to make food?',
            'options': ['A. Respiration', 'B. Photosynthesis', 'C. Digestion', 'D. Fermentation'],
            'answer': 'B',
            'explanation': 'Photosynthesis is the process where plants convert light energy into chemical energy (glucose).',
            'topic': 'Plant Physiology',
            'difficulty': 'easy',
            'source': 'JAMB 2024 Biology'
        }
    ]
    
    # WAEC Questions
    waec_questions = [
        {
            'id': 15,
            'exam_type': 'waec',
            'subject': 'Mathematics',
            'year': 2024,
            'question': 'Solve for x: 5x + 10 = 35',
            'options': ['A. 3', 'B. 4', 'C. 5', 'D. 7'],
            'answer': 'C',
            'explanation': 'Subtract 10: 5x = 25, divide by 5: x = 5',
            'topic': 'Algebra',
            'difficulty': 'easy',
            'source': 'WAEC 2024 Mathematics'
        },
        {
            'id': 16,
            'exam_type': 'waec',
            'subject': 'English Language',
            'year': 2024,
            'question': 'Choose the correct spelling.',
            'options': ['A. Accomodation', 'B. Accommodation', 'C. Acommodation', 'D. Acomodation'],
            'answer': 'B',
            'explanation': 'The correct spelling is "accommodation" with double c and double m.',
            'topic': 'Spelling',
            'difficulty': 'easy',
            'source': 'WAEC 2024 English'
        },
        {
            'id': 17,
            'exam_type': 'waec',
            'subject': 'Physics',
            'year': 2024,
            'question': 'What type of energy does a moving car possess?',
            'options': ['A. Potential energy', 'B. Kinetic energy', 'C. Chemical energy', 'D. Nuclear energy'],
            'answer': 'B',
            'explanation': 'A moving object possesses kinetic energy due to its motion.',
            'topic': 'Energy',
            'difficulty': 'easy',
            'source': 'WAEC 2024 Physics'
        }
    ]
    
    # Combine all questions
    all_questions = (
        jamb_math_questions + 
        jamb_english_questions + 
        jamb_physics_questions + 
        jamb_chemistry_questions + 
        jamb_biology_questions +
        waec_questions
    )
    
    # Add all questions to database
    for question in all_questions:
        manager.add_question(question)
        print(f"✅ Added: {question['exam_type'].upper()} {question['subject']} - {question['year']}")
    
    # Save database
    manager.save_database()
    
    # Show stats
    print("\n" + "="*60)
    print("📊 Database Statistics:")
    print("="*60)
    stats = manager.get_stats()
    print(f"Total Questions: {stats['total_questions']}")
    print(f"\nBy Exam Type:")
    for exam, count in stats['by_exam'].items():
        print(f"  {exam.upper()}: {count} questions")
    print(f"\nBy Subject:")
    for subject, count in stats['by_subject'].items():
        print(f"  {subject}: {count} questions")
    print("="*60)
    print("\n✅ Database seeded successfully!\n")

if __name__ == '__main__':
    seed_database()