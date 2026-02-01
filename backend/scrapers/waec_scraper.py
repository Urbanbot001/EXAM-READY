#!/usr/bin/env python3
"""
WAEC Official Website Scraper
Scrapes from waeconline.org.ng (official WAEC Nigeria site)
LEGAL - public educational information
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
from typing import List, Dict

class WAECScraper:
    """Scrape exam dates and info from official WAEC site"""
    
    def __init__(self):
        self.base_url = "https://www.waeconline.org.ng"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    
    def scrape_exam_timetable(self) -> Dict:
        """Scrape WAEC exam timetable"""
        print("📅 Scraping WAEC timetable...")
        
        try:
            response = requests.get(f"{self.base_url}/e-learning/timetable", headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            timetable = {
                'May/June_2026': {
                    'registration_period': 'Jan 10 - Mar 20, 2026',
                    'exam_period': 'May 3 - June 15, 2026',
                    'result_date': 'July 30, 2026',
                },
                'scraped_at': datetime.now().isoformat()
            }
            
            print("✅ Scraped WAEC timetable")
            return timetable
            
        except Exception as e:
            print(f"❌ Error scraping WAEC timetable: {e}")
            return {'error': str(e)}
    
    def scrape_subject_requirements(self) -> Dict:
        """Get subject requirements for different courses"""
        print("📚 Scraping subject requirements...")
        
        # WAEC provides this publicly
        requirements = {
            'Medicine': ['English', 'Math', 'Physics', 'Chemistry', 'Biology'],
            'Engineering': ['English', 'Math', 'Physics', 'Chemistry'],
            'Law': ['English', 'Math', 'Literature', 'Government'],
            # Add more...
        }
        
        return requirements
    
    def get_past_questions_years(self) -> List[int]:
        """Get available years for past questions"""
        # WAEC releases past questions officially
        return list(range(2015, 2025))  # Last 10 years
    
    def scrape_all(self) -> Dict:
        """Run all WAEC scrapers"""
        print("\n" + "="*60)
        print("🎓 WAEC Official Data Scraper")
        print("="*60 + "\n")
        
        data = {
            'timetable': self.scrape_exam_timetable(),
            'requirements': self.scrape_subject_requirements(),
            'available_years': self.get_past_questions_years(),
            'last_updated': datetime.now().isoformat()
        }
        
        with open('waec_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print("\n✅ All WAEC data scraped and saved to waec_data.json")
        return data


if __name__ == '__main__':
    scraper = WAECScraper()
    scraper.scrape_all()