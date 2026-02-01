// API route to serve WAEC data

export default async function handler(req, res) {
  try {
    const waecData = {
      exam_name: 'WAEC (May/June) 2026',
      registration_start: 'Jan 10, 2026',
      registration_end: 'Mar 20, 2026',
      exam_start: 'May 3, 2026',
      exam_end: 'June 15, 2026',
      result_date: 'July 30, 2026',
      daysLeft: 97,
      status: 'registration'
    }

    res.status(200).json(waecData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch WAEC data' })
  }
}