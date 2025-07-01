import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 >Popular Companion</h1>
      <section className='home-section'>
        <CompanionCard id="123" name="Neura the Brainy Explorer" topic="Neural network of the brain" subject="science" duration={45} color="#ffda6e"/>
        <CompanionCard id="456" name="Countsey the Brainy Explorer" topic="Der and integrals" subject="science" duration={30} color="#e5d0ff"/>
        <CompanionCard id="789" name="Verba the Brainy Explorer" topic="English Literature network of the brain" subject="science" duration={30} color="#bde7ff"/>
      </section>

      <section className='home-section'>
        <CompanionList />
        <CTA />
      </section>
    </div>
  )
}

export default Page