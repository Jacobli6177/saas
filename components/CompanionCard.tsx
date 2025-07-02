import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CompanionCardsProp {
  id: string,
  name: string,
  topic: string,
  subject: string,
  duration: number,
  color: string,
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardsProp) => {
  return (
    <article className='companion-card justify-between' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className=' bg-black text-white rounded-4xl text-sm px-2 py-1 capitalize'>{subject}</div>
        <button className='companion-bookmark'>
          <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className='text-sm'>{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className='btn-primary w-full justify-center text-center'>
        Launch Lesson
      </Link>
    </article>
  )
}

export default CompanionCard
