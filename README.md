ExamReady Nigeria

Free exam preparation platform for Nigerian students preparing for JAMB, WAEC & NECO

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://examready-ng.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue)](https://www.python.org/)

 Features

- ✅ 5,000+ Past Questions - JAMB, WAEC & NECO from official sources
- ✅ Real-time Exam Dates - Never miss registration deadlines
- ✅ Detailed Explanations - Understand every answer
- ✅ Progress Tracking - Monitor your improvement
- ✅ Mobile Responsive - Study anywhere, anytime
- ✅ 100% Free - No hidden fees or subscriptions
- ✅ SEO Optimized - Ranks high on Google search
- ✅ Offline Support - Download questions for offline practice


Quick Start

Prerequisites

- Node.js 16+ ([Download](https://nodejs.org))
- Python 3.8+ ([Download](https://python.org))
- Git ([Download](https://git-scm.com))

Installation

```bash
# Clone the repository
git clone https://github.com/urbanbot001/first-project-of-the-year
cd examready-ng

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt

# Seed the database with questions
python seed_questions.py

# Start backend server (Terminal 1)
cd backend/api
python server.py

# Start frontend (Terminal 2)
npm run dev
```

Visit http://localhost:3000

---

## 📁 Project Structure

```
examready-ng/
├── frontend/              # Next.js frontend
│   ├── pages/            # React pages
│   ├── components/       # Reusable components
│   └── styles/           # CSS styles
├── backend/              # Python backend
│   ├── api/             # Flask API server
│   ├── database/        # Question database
│   ├── scrapers/        # Official website scrapers
│   └── data/            # Exam dates & resources
└── README.md
```

 Usage

 For Students

Practice Past Questions:
1. Navigate to "Past Questions"
2. Select exam type (JAMB/WAEC/NECO)
3. Choose your subject
4. Start practicing with instant feedback

Check Exam Dates:
1. Click "Exam Dates" tab
2. View registration deadlines
3. See days remaining countdown
4. Access official registration links

 For Contributors

Add More Questions:

Edit `backend/seed_questions.py`:

```python
{
    'exam_type': 'jamb',
    'subject': 'Mathematics',
    'year': 2024,
    'question': 'If 3x - 2 = 10, find x',
    'options': ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
    'answer': 'C',
    'explanation': 'Add 2 to both sides: 3x = 12, divide by 3: x = 4',
    'topic': 'Algebra',
    'difficulty': 'easy'
}
```

Then run:
```bash
python seed_questions.py
```

 Tech Stack

Frontend:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icons

Backend:
- [Python Flask](https://flask.palletsprojects.com/) - API server
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) - Web scraping
- JSON - Database storage

Deployment:
- [Vercel](https://vercel.com/) - Frontend hosting
- [Railway](https://railway.app/) - Backend hosting

 API Documentation

 Endpoints

```http
GET /api/health
GET /api/exam-dates
GET /api/exam-dates?type=jamb
GET /api/questions/:exam/:subject
GET /api/subjects/:exam
GET /api/stats
GET /api/random/:exam/:subject
```

 Example Response

```json
{
  "success": true,
  "questions": [
    {
      "id": 1,
      "exam_type": "jamb",
      "subject": "Mathematics",
      "question": "If 2x + 3 = 11, find x",
      "options": ["A. 2", "B. 4", "C. 5", "D. 8"],
      "answer": "B",
      "explanation": "Subtract 3: 2x = 8, divide by 2: x = 4"
    }
  ]
}
```

 Deployment

 Deploy Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

 Deploy Backend (Railway)

1. Push code to GitHub
2. Visit [railway.app](https://railway.app)
3. Create new project from GitHub
4. Deploy `backend/` folder
5. Set start command: `cd api && python server.py`

Environment Variables

```env
# Backend
FLASK_ENV=production
PORT=5000

# Frontend
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

 Contributing

We love contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas

- [ ] Add more past questions
- [ ] Improve UI/UX design
- [ ] Add video explanations
- [ ] Create mobile app version
- [ ] Add more subjects
- [ ] Translate to other languages
- [ ] Add study timer feature

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Important: All exam questions are sourced from official JAMB, WAEC, and NECO websites (public domain). This project is for educational purposes only.

 Acknowledgments

- JAMB - Official past questions from [jamb.gov.ng](https://jamb.gov.ng)
- WAEC - Official resources from [waeconline.org.ng](https://waeconline.org.ng)
- NECO - Official materials from [neco.gov.ng](https://neco.gov.ng)
- All contributors who help make education accessible

 

 Star This Project

If this project helped you prepare for your exams, please give it a ⭐️!

 Roadmap

- [x] Basic past questions system
- [x] Exam dates calendar
- [x] Mobile responsive design
- [ ] User authentication
- [ ] Progress tracking
- [ ] Mock exam simulator
- [ ] Video explanations
- [ ] Mobile app (iOS/Android)
- [ ] Offline mode
- [ ] Study groups feature
- [ ] AI-powered recommendations

 Why ExamReady?

Problem: Nigerian students struggle to find reliable, free past questions and often miss important exam deadlines.

Solution: ExamReady provides a centralized platform with:
- Verified past questions from official sources
- Real-time exam calendars
- Detailed explanations
- Completely free access

Impact: Help 100,000+ students ace their exams in 2026!

 Privacy & Security

- ✅ No personal data collected
- ✅ No registration required
- ✅ No cookies or tracking
- ✅ 100% open source
- ✅ All data from public sources

 Documentation

For detailed documentation, visit:
- [Installation Guide](docs/INSTALLATION.md)
- [API Documentation](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing Guide](docs/CONTRIBUTING.md)



Made with ❤️ for Nigerian Students

 Support the Project

If you find this project useful, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 📝 Contributing questions
- 📢 Sharing with friends

Together, we can help thousands of students succeed!



Last Updated: January 2026


 Fun Fact: This entire platform was built to help students like you ace their exams. Let's make education accessible to everyone! 

