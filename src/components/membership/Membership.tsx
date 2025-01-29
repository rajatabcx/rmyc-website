'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

export function Membership() {
  return (
    <div className='container mx-auto px-4 md:px-8 min-h-screen flex items-center justify-center bg-secondary'>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1'
        >
          <Anchor className='mr-2 h-4 w-4 text-blue-600' />
          <span className='text-sm font-medium text-blue-600'>Membership</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'
        >
          MEMBERSHIP AT THE ROYAL MADRAS YACHT CLUB
        </motion.h1>
        {/* Introduction text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mb-16 max-w-3xl text-lg text-gray-600'
        >
          Becoming a member of the Royal Madras Yacht Club (RMYC) means joining
          an exclusive community of sailing enthusiasts while gaining access to
          premier facilities, training programs, and unforgettable experiences
          on the water. Whether you&apos;re a seasoned sailor or just starting
          your journey, our memberships are designed to cater to all levels and
          interests.
        </motion.p>
      </div>
    </div>
  );
}
