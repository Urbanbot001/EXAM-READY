// API route to serve JAMB data from Python backend

export default async function handler(req, res) {
  try {
    // In production, this would fetch from your Python backend
    // For now, return sample data
    
    const jambData = {
      exam_name: 'JAMB UTME 2026',
      registration_start: 'Feb 1, 2026',
      registration_end: 'Mar 15, 2026',
      exam_start: 'April 10, 2026',
      exam_end: 'May 5, 2026',
      result_date: 'May 20, 2026',
      daysLeft: 74,
      status: 'upcoming'
    }

    res.status(200).json(jambData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch JAMB data' })
  }
}