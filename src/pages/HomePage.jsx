import React from 'react';
import SceneIntro from '../components/home/scenes/SceneIntro';
import SceneManifesto from '../components/home/scenes/SceneManifesto';
import SceneSelectedWork from '../components/home/scenes/SceneSelectedWork';
import SceneKineticStrip from '../components/home/scenes/SceneKineticStrip';
import SceneContact from '../components/home/scenes/SceneContact';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Scene 01: Monumental Intro & Parallax Portrait */}
      <SceneIntro />

      {/* Scene 02: The Manifesto & Concise Background */}
      <SceneManifesto />

      {/* Scene 03: Selected Work with Distinct Visual Formats */}
      <SceneSelectedWork />

      {/* Scene 04: Kinetic Typography Strip & Portals */}
      <SceneKineticStrip />

      {/* Scene 05: Minimal Bold Ending */}
      <SceneContact />
    </div>
  );
}
