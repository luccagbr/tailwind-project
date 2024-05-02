import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className='grid grid-cols-profile items-center gap-3'>
      <img
        src='https://github.com/luccagbr.png'
        className='h-10 w-10 rounded-full'
        alt=''
      />

      <div className='flex flex-1 flex-col truncate'>
        <span className='text-sm font-semibold text-zinc-700'>
          Lucca Gabriel
        </span>
        <span className='truncate text-sm text-zinc-500'>
          luccavitalc@gmail.com
        </span>
      </div>

      <button type='button' className='m-auto rounded-md p-2 hover:bg-zinc-50'>
        <LogOut className='h-5 w-5 text-zinc-500' />
      </button>
    </div>
  )
}
