'use client';
import EqnInput from '@/components/common/eqninput';
import {
  distanceSolver,
  finalVelocitySolver,
  finalVelocitySolver2,
} from '@/helpers/solver';
import { useEffect, useState } from 'react';

const KinematicsFormula = ({ current, setAns }) => {
  const [valU, setValU] = useState(0);
  const [valA, setValA] = useState(0);
  const [valT, setValT] = useState(0);
  const [valS, setValS] = useState(0);
  
  useEffect(() => {
    if (current === 'formula1') {
      const res = finalVelocitySolver(valU, valA, valT);
      setAns(res);
    } else if (current === 'formula2') {
      const res = finalVelocitySolver2(valU, valA, valS);
      setAns(res);
    } else if (current === 'formula3') {
      const res = distanceSolver(valU, valA, valT);
      setAns(res);
    }
  }, [current, valA, valU, valT, setAns, valS]);

  if (current === 'formula1') {
    return (
      <>
        <h2>v = u + at</h2>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValU(e.target.value)}
            placeholder='Value of u'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValA(e.target.value)}
            placeholder='Value of a'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValT(e.target.value)}
            placeholder='Value of t'
          />
        </div>
      </>
    );
  } else if (current === 'formula2') {
    return (
      <>
        <h2>v&#178; = u&#178; + 2as</h2>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValU(e.target.value)}
            placeholder='Value of u'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValA(e.target.value)}
            placeholder='Value of a'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValS(e.target.value)}
            placeholder='Value of s'
          />
        </div>
      </>
    );
  } else if (current === 'formula3') {
    return (
      <>
        <h2>s = ut + &frac12;at&#178;</h2>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValU(e.target.value)}
            placeholder='Value of u'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValT(e.target.value)}
            placeholder='Value of t'
          />
        </div>
        <div className='kinematic-input'>
          <EqnInput
            type='number'
            onChange={(e) => setValA(e.target.value)}
            placeholder='Value of a'
          />
        </div>
      </>
    );
  }
};

export default KinematicsFormula;
