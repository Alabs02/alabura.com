"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview: React.FC = () => {
  return (
    <>
      <motion.div className=''>
        <h1 className='text-6xl text-white'>Project</h1>
      </motion.div>
    </>
  );
}

ProjectOverview.displayName = "ProjectOverview";
export default ProjectOverview;
