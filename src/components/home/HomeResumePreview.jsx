import React from 'react';
import SectionHeading from '../SectionHeading';
import ResumeCard from '../ResumeCard';
import { resumeTracks } from '../../data/resume';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export default function HomeResumePreview() {
  const { navigateTo } = useNavigation();

  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="// CAREER TRACKS"
            title="Curriculum Vitae &amp; Resumes"
            subtitle="Targeted resumes emphasizing Full-Stack Web Development, accompanied by specialized tracks for QA and UI/UX."
          />

          <button
            onClick={() => navigateTo('resume')}
            className="sm:mb-12 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-500/30 transition-all focus:outline-none"
          >
            <span>Explore All Resumes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {resumeTracks.map((resume, idx) => (
            <ResumeCard key={resume.id} resume={resume} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
