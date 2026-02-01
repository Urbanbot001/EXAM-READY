// Proxy to Python backend
export default async function handler(req, res) {
  const { subject } = req.query
  const { examType = 'jamb', limit = 20 } = req.query

  try {
    // Call Python backend
    const response = await fetch(
      `http://localhost:5000/api/questions/${examType}/${subject}?limit=${limit}`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch from backend')
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ 
      success: false, 
      error: error.message 
    })
  }
}