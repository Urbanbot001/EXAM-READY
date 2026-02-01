import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ExamReadyApp from '../components/ExamReadyApp'


export default function Home() {
  const [examData, setExamData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch exam data from Python backend
    fetchExamData()
  }, [])

  const fetchExamData = async () => {
    try {
      // Fetch JAMB and WAEC data
      const [jambResponse, waecResponse] = await Promise.all([
        axios.get('/api/jamb/dates'),
        axios.get('/api/waec/dates')
      ])

      setExamData({
        jamb: jambResponse.data,
        waec: waecResponse.data
      })
      setLoading(false)
    } catch (error) {
      console.error('Error fetching exam data:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>ExamReady Nigeria - JAMB, WAEC & NECO Past Questions 2026</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="Free JAMB, WAEC, and NECO past questions. Practice with thousands of questions, get exam dates, and ace your 2026 exams!" />
      </Head>

      <ExamReadyApp examData={examData} loading={loading} />
    </>
  )
}