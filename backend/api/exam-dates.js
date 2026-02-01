// API route to get all exam dates
export default async function handler(req, res) {
  const { type } = req.query

  try {
    const url = type 
      ? `http://localhost:5000/api/exam-dates/${type}`
      : 'http://localhost:5000/api/exam-dates'
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch exam dates')
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Exam dates API error:', error)
    res.status(500).json({ 
      success: false, 
      error: error.message 
    })
  }
}