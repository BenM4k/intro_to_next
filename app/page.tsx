import NewTodoForm from '@/components/NewTodoForm'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex item-center justify-center flex-col w-full h-full'>
      <h1>Next.js + Prisma + Tailwind CSS</h1>
      <NewTodoForm />
    </div>
  )
}
