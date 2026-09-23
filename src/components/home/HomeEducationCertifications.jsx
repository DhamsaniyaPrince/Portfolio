import React from 'react';
import SectionHeading from '../SectionHeading';
import Education from '../Education';
import Certifications from '../Certifications';

export default function HomeEducationCertifications() {
  return (
    <section id="education-certifications" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// ACADEMIC &amp; CREDENTIALS"
          title="Education &amp; Certifications"
          subtitle="Formal university education in Information Technology at Dharmsinh Desai University complemented by verified AWS Academy cloud foundations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education Timeline (5 cols) */}
          <div className="lg:col-span-5">
            <Education />
          </div>

          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <Certifications />
          </div>
        </div>
      </div>
    </section>
  );
}
