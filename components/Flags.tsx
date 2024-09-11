import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"


const Flags = () => {
  return (
    <div>
      <Popover>
  <PopoverTrigger>
    <Image src='/images/usa.svg' alt='usa' width={32} height={32}/>
  </PopoverTrigger>
  <PopoverContent className="w-fit flex flex-col gap-4">
    <div className="flex items-center gap-2">
    <Image src='/images/usa.svg' alt='usa' width={32} height={32}/>
    <div>English</div>

    </div>
    <div className="flex items-center gap-2">
    <Image src='/images/france.svg' alt='france' width={32} height={32}/>
    <div>French</div>
    </div>
    <div className="flex items-center gap-2">
    <Image src='/images/germany.svg' alt='germany' width={32} height={32}/>
    <div>German</div>
    </div>
    <div className="flex items-center gap-2">
    <Image src='/images/spain.svg' alt='spain' width={32} height={32}/>
    <div>Spanish</div>
    </div>
    </PopoverContent>
 
</Popover>

    </div>
  )
}

export default Flags