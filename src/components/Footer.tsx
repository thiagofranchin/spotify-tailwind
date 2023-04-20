import Image from 'next/image';
import { Play, Shuffle, SkipBack, Repeat, SkipForward, Volume, Laptop2, LayoutList, Mic2, Maximize2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className='flex gap-3 items-center'>
        <Image src="/album.jpg" className='w-full' width={56} height={56} alt="Capa do album" />
        <div className='flex flex-col'>
          <strong className='font-normal'>No Fun!</strong>
          <span className='text-xs text-zinc-400'>Sex Pistols</span>
        </div>
      </div>
      <div className='flex flex-col item-center gap-2'>
        <div className='flex gap-6 items-center justify-center'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />

          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play />
          </button>

          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className="h-1 bg-zinc-200 w-40 rounded-full"></div>
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Mic2 size={20} className='text-zinc-200' />
        <LayoutList size={20} className='text-zinc-200' />
        <Laptop2 size={20} className='text-zinc-200' />
        <div className='flex items-center gap-2'>
          <Volume size={20} className='text-zinc-200' />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className="h-1 bg-zinc-200 w-10 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} className='text-zinc-200' />
      </div>
    </footer>
  )
}