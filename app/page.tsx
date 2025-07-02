import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Popular Companions</h1>

      <section className="home-section mb-12 flex flex-wrap gap-4">
        <CompanionCard id="123" name="Neura the Brainy Explorer" topic="Neural network of the brain" subject="science" duration={45} color="#ffda6e" />
        <CompanionCard id="456" name="Countsey the Brainy Explorer" topic="Derivatives and integrals" subject="science" duration={30} color="#e5d0ff" />
        <CompanionCard id="789" name="Verba the Brainy Explorer" topic="English Literature and the mind" subject="science" duration={30} color="#bde7ff" />
      </section>

      <section className="home-section">
        <CompanionList title="Recently Completed Sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </div>
  )
}

export default Page
