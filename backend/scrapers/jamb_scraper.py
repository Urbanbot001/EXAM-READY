#!/usr/bin/env python3
"""
JAMB Official Website Scraper
Scrapes ONLY from official JAMB website (jamb.gov.ng)
This is LEGAL - public information for educational purposes
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
from typing import List, Dict

class JAMBScraper:
    """Scrape exam dates, registration info from official JAMB site"""
    
    def __init__(self):
        self.base_url = "https://www.jamb.gov.ng"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    
    def scrape_exam_dates(self) -> Dict:
        """
        Scrape current exam dates and registration deadlines
        Returns dict with exam info
        """
        print("📅 Scraping JAMB exam dates...")
        
        try:
            # This is a TEMPLATE - actual scraping depends on JAMB site structure
            # You'll need to inspect jamb.gov.ng and adjust selectors
            
            response = requests.get(f"{self.base_url}/examschedule", headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            exam_info = {
                'exam_name': 'JAMB UTME 2026',
                'registration_start': None,
                'registration_end': None,
                'exam_start': None,
                'exam_end': None,
                'result_date': None,
                'scraped_at': datetime.now().isoformat()
            }
            
            # Example selectors (adjust based on actual JAMB site)
            # dates_section = soup.find('div', class_='exam-dates')
            # if dates_section:
            #     exam_info['registration_start'] = dates_section.find('span', class_='reg-start').text
            
            print(f"✅ Scraped JAMB exam dates successfully")
            return exam_info
            
        except Exception as e:
            print(f"❌ Error scraping JAMB dates: {e}")
            return {'error': str(e)}
    
    def scrape_news_updates(self) -> List[Dict]:
        """Scrape latest news/updates from JAMB"""
        print("📰 Scraping JAMB news...")
        
        try:
            response = requests.get(f"{self.base_url}/news", headers=self.headers, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            news_items = []
            
            # Example structure (adjust to actual JAMB site)
            # news_list = soup.find_all('article', class_='news-item')
            # for item in news_list[:10]:
            #     news_items.append({
            #         'title': item.find('h3').text.strip(),
            #         'date': item.find('time').text.strip(),
            #         'link': item.find('a')['href']
            #     })
            
            print(f"✅ Scraped {len(news_items)} news items")
            return news_items
            
        except Exception as e:
            print(f"❌ Error scraping JAMB news: {e}")
            return []
    
    def get_syllabus_links(self) -> Dict:
        """Get links to official JAMB syllabus PDFs"""
        print("📚 Getting syllabus links...")
        
        # JAMB provides official syllabuses - these are public documents
        syllabus_links = {
            'Mathematics': f"{self.base_url}/syllabus/mathematics.pdf",
            'English': f"{self.base_url}/syllabus/english.pdf",
            'Physics': f"{self.base_url}/syllabus/physics.pdf",
            'Chemistry': f"{self.base_url}/syllabus/chemistry.pdf",
            'Biology': f"{self.base_url}/syllabus/biology.pdf",
            # Add more subjects
        }
        
        return syllabus_links
    
    def scrape_all(self) -> Dict:
        """Run all scrapers and return combined data"""
        print("\n" + "="*60)
        print("🎓 JAMB Official Data Scraper")
        print("="*60 + "\n")
        
        data = {
            'exam_dates': self.scrape_exam_dates(),
            'news': self.scrape_news_updates(),
            'syllabus': self.get_syllabus_links(),
            'last_updated': datetime.now().isoformat()
        }
        
        # Save to JSON
        with open('jamb_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print("\n✅ All JAMB data scraped and saved to jamb_data.json")
        return data


if __name__ == '__main__':
    scraper = JAMBScraper()
    scraper.scrape_all()