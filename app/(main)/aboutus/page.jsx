'use client';

import React from 'react';
import AboutHero from '../../../components/about-us/AboutHero';
import WhatDrivesUs from '../../../components/about-us/WhatDrivesUs';
import MissionSection from '../../../components/about-us/MissionSection';
import FoundersSection from '../../../components/about-us/FoundersSection';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#F5F4F0' }}>
      <AboutHero />
      <WhatDrivesUs />
      <MissionSection />
      <FoundersSection />
    </div>
  );
};

export default AboutPage;
