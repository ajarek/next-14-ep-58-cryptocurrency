'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Flags = () => {
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const langue = target.value
    langue !== 'usa' ? router.push(`/langues/${langue}`) : router.push(`/`)
  }

  return (
    <form
      onChange={handleSubmit}
      className=' space-y-6'
    >
      <Select>
        <SelectTrigger className='w-[150px]'>
          <SelectValue
            placeholder={
              <Image
                src={'/images/usa.svg'}
                alt={'flag'}
                width={32}
                height={32}
              />
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='usa'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/usa.svg'
                  alt='usa'
                  width={32}
                  height={32}
                />
                <div>English</div>
              </div>
            </SelectItem>
            <SelectItem value='france'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/france.svg'
                  alt='france'
                  width={32}
                  height={32}
                />
                <div>French</div>
              </div>
            </SelectItem>
            <SelectItem value='germany'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/germany.svg'
                  alt='germany'
                  width={32}
                  height={32}
                />
                <div>German</div>
              </div>
            </SelectItem>
            <SelectItem value='poland'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/poland.svg'
                  alt='poland'
                  width={32}
                  height={32}
                />
                <div>Poland</div>
              </div>
            </SelectItem>
            <SelectItem value='spain'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/spain.svg'
                  alt='spain'
                  width={32}
                  height={32}
                />
                <div>Spanish</div>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </form>
  )
}

export default Flags
