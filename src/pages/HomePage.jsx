import React from 'react';
import SceneHero from '../components/home/scenes/SceneHero';
import SceneEducation from '../components/home/scenes/SceneEducation';
import SceneAchievements from '../components/home/scenes/SceneAchievements';
import SceneIntroStatement from '../components/home/scenes/SceneIntroStatement';
import SceneFeaturedProjects from '../components/home/scenes/SceneFeaturedProjects';
import SceneResume from '../components/home/scenes/SceneResume';
import SceneContactSoftware from '../components/home/scenes/SceneContactSoftware';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Scene 01: Monumental Intro & Parallax Portrait */}
      <SceneHero />

      {/* Scene 02: Academic Progression (10th -> 12th -> B.Tech) */}
      <SceneEducation />

      {/* Scene 03: Verified Credentials & Tactile Stickers (AWS Cloud, AWS ML, DUHacks 5.0) */}
      <SceneAchievements />

      {/* Scene 04: Developer Ethos & Kinetic Typography (BUILD, INTERACT, TEST, SHIP) */}
      <SceneIntroStatement />

      {/* Scene 05: Featured Architectures with Energy Line & Distinct Reveals */}
      <SceneFeaturedProjects />

      {/* Scene 06: Interactive Resume Document Graphic Hub */}
      <SceneResume />

      {/* Scene 07: "Software Being Built" Communication Terminal & Typographic Footer */}
      <SceneContactSoftware />
    </div>
  );
}
