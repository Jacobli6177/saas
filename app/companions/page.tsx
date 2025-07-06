import CompanionCard from '@/components/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react';

interface SearchParams {
  searchParams: {
    subject?: string;
    topic?: string;
  };
}

const CompanionLibrary = async ({ searchParams }: SearchParams) => {
  const subject = searchParams.subject || '';
  const topic = searchParams.topic || '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max0sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">Filters</div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionLibrary;
