'use client';

import React from 'react';
import CountUp from 'react-countup';


interface Props {
  amount: number;
}

const AnimatedCounter: React.FC<Props> = ({ amount }) => {
  return (
    <div className='w-full'>
      <CountUp
        decimal=','
        decimals={2}
        prefix='₦'
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter;
