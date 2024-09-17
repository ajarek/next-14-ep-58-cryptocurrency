'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Send, BotMessageSquare } from 'lucide-react'
const Chatbot = () => {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value)
  }
  const generateText = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt }),
      })
      const data = await response.json()
      if (response.ok) {
        setOutput(data.output)
        setPrompt('')
      } else {
        setOutput(data.error)
      }
    } catch (error) {
      console.error('Error in API request:', error)
    }
  }

  return (
    <div className='container flex flex-col justify-between min-h-[240px] px-4'>
      <div className='px-4'>
        <h1 className='mb-4'><span className='text-xl font-semibold'>Hey</span> , <br/>
        I’m Jarobot #0. I can help you with your crypto investing. What can I do for you today?</h1>
        <div className='flex items-center gap-4'><BotMessageSquare color="#facc15" size={32} />{output}</div>
      </div>
      <div  className='relative'>
        <Input
          type='text'
          value={prompt}
          onChange={onChange}
          placeholder='Ask me anything about cryptocurrencies!'
          className='h-12 text-lg'
        />
        <Button size={'icon'} onClick={generateText} className='absolute right-2 top-[50%] -translate-y-[50%]'><Send size={20} /></Button>
      </div>

      
    </div>
  )
}

export default Chatbot
