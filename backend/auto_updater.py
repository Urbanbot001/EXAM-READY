#!/usr/bin/env python3
"""
Automated Daily Updater
Runs scrapers daily to keep exam info up-to-date
"""

import schedule
import time
from datetime import datetime
from scrapers.jamb_scraper import JAMBScraper
from scrapers.waec_scraper import WAECScraper

def daily_update():
    """Run all scrapers daily"""
    print("\n" + "="*70)
    print(f"🤖 AUTOMATED UPDATE - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*70 + "\n")
    
    # Scrape JAMB
    jamb = JAMBScraper()
    jamb_data = jamb.scrape_all()
    
    # Scrape WAEC
    waec = WAECScraper()
    waec_data = waec.scrape_all()
    
    print("\n✅ Daily update completed!")
    print("="*70 + "\n")

def run_scheduler():
    """Run the scheduler"""
    # Schedule daily update at 6 AM
    schedule.every().day.at("06:00").do(daily_update)
    
    print("⏰ Scheduler started. Running daily updates at 6:00 AM")
    print("Press Ctrl+C to stop\n")
    
    # Run once immediately
    daily_update()
    
    # Keep running
    while True:
        schedule.run_pending()
        time.sleep(60)  # Check every minute

if __name__ == '__main__':
    run_scheduler()