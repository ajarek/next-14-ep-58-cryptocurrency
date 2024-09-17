import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? '')
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const data = await req.json()
    const prompt = data.body
    const result = await model.generateContent(prompt)
    return new Response(JSON.stringify({ output: result.response.text() }))
  } catch (error) {
    console.error('Error in API request:', error)
  }
}
