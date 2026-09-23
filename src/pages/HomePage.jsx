import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeSkills from '../components/home/HomeSkills';
import HomeFeaturedProjects from '../components/home/HomeFeaturedProjects';
import HomeQAPreview from '../components/home/HomeQAPreview';
import HomeUIUXPreview from '../components/home/HomeUIUXPreview';
import HomeEducationCertifications from '../components/home/HomeEducationCertifications';
import HomeResumePreview from '../components/home/HomeResumePreview';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="relative">
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
      <HomeFeaturedProjects />
      <HomeQAPreview />
      <HomeUIUXPreview />
      <HomeEducationCertifications />
      <HomeResumePreview />
      <Contact />
    </div>
  );
}
