'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Send, BotMessageSquare, MoveRight } from 'lucide-react'
import Image from 'next/image'
const Chatbot = ({
  greeting,
  prompt1,
  prompt2,
  prompt3,
  prompt4,
  info,
}: {
  greeting: string
  prompt1: string
  prompt2: string
  prompt3: string
  prompt4: string
  info: string
}) => {
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
    <div className='container flex flex-col justify-between  px-4'>
      <div className=' w-full px-4'>
        <h1 className='mb-4'>
          <span className='text-xl font-semibold'>Hey</span> , <br />
          {greeting}
        </h1>

        <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 mt-4'>
          <div className='flex items-center gap-2 justify-between border-2 p-2 rounded-sm '>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/message1.svg'
                alt='message'
                width={40}
                height={40}
              />
              <span>{prompt1}</span>
            </div>
            <Button
              onClick={() => setPrompt(prompt1)}
              size='icon'
              className='min-w-9'
            >
              <MoveRight />
            </Button>
          </div>
          <div className='flex items-center gap-2 justify-between border-2 p-2 rounded-sm '>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/message1.svg'
                alt='message'
                width={40}
                height={40}
              />
              <span>{prompt2}</span>
            </div>
            <Button
              onClick={() => setPrompt(prompt2)}
              size='icon'
              className='min-w-9'
            >
              <MoveRight />
            </Button>
          </div>
          <div className='flex items-center gap-2 justify-between border-2 p-2 rounded-sm '>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/message1.svg'
                alt='message'
                width={40}
                height={40}
              />
              <span>{prompt3}</span>
            </div>
            <Button
              onClick={() => setPrompt(prompt3)}
              size='icon'
              className='min-w-9'
            >
              <MoveRight />
            </Button>
          </div>
          <div className='flex items-center gap-2 justify-between border-2 p-2 rounded-sm '>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/message1.svg'
                alt='message'
                width={40}
                height={40}
              />
              <span>{prompt4}</span>
            </div>
            <Button
              onClick={() => setPrompt(prompt4)}
              size='icon'
              className='min-w-9'
            >
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 mb-32 p-4'>
        <BotMessageSquare
          color='#facc15'
          size={32}
        />
        {output}
      </div>
      <div className='relative '>
        <Input
          type='text'
          value={prompt}
          onChange={onChange}
          placeholder={info}
          className='h-12 text-lg'
        />
        <Button
          size={'icon'}
          onClick={generateText}
          className='absolute right-2 top-[50%] -translate-y-[50%]  max-sm:translate-y-[80%]'
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  )
}

export default Chatbot
