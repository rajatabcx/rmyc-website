'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { membershipBenefits } from '@/lib/const';

export function MembershipBenefit() {
  return (
    <div className='container px-4 md:px-8 py-16'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className='mb-12 text-3xl font-bold text-gray-900'
      >
        MEMBERSHIP BENEFITS
      </motion.h2>
      {/* Benefits grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {membershipBenefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className='group relative rounded-2xl bg-white p-6 shadow-xl transition-shadow hover:shadow-2xl'
          >
            <div className='mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 transition-transform group-hover:scale-110'>
              <benefit.icon className='h-6 w-6' />
            </div>
            <h3 className='mb-3 text-xl font-semibold text-gray-900'>
              {benefit.title}
            </h3>
            <p className='text-gray-600'>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
