'use client';

import EqnInput from '@/components/common/eqninput';
import Glass from '@/components/common/glass';
import { quadraticSolver } from '@/helpers/algebrasolver';
import { useEffect, useState } from 'react';

const Linear = () => {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [valC, setValC] = useState(null);
  const [valX1, setValX1] = useState(0);
  const [valX2, setValX2] = useState(0);

  useEffect(() => {
    if (valA && valB && valC) {
      const res = quadraticSolver(valA, valB, valC);
      console.log(res[0]);
      if (isNaN(res[0]) || isNaN(res[1])) {
        console.log(1);
        setValX1('Math Error');
      } else {
        setValX1(res[0]);
        setValX2(res[1]);
      }
    }
  }, [valA, valB, valC]);
  return (
    <>
      <Glass>
        <div className='quadratic-page'>
          <h1 className='quadratic-title mb'>Quadratic Equations</h1>
          <h2>
            {valA ? valA : 'a'}x &#178; {valB ? (valB > 0 ? '+' : '') : '+'}{' '}
            {valB ? valB : 'b'}x {valC ? (valC > 0 ? '+' : '') : '+'}
            {valC ? valC : 'c'} = 0
          </h2>
          <div className='quadratic-inputs'>
            <div className='quadratic-input'>
              <EqnInput
                onChange={(e) => {
                  setValA(e.target.value);
                }}
                type='number'
                placeholder='Value of a'
              />
            </div>
            <div className='quadratic-input'>
              <EqnInput
                onChange={(e) => {
                  setValB(e.target.value);
                }}
                type='number'
                placeholder='Value of b'
              />
            </div>
            <div className='quadratic-input'>
              <EqnInput
                onChange={(e) => {
                  setValC(e.target.value);
                }}
                type='number'
                placeholder='Value of c'
              />
            </div>
          </div>

          <h2 className='my'>Solve For X</h2>
          <h3>
            X<sub>1</sub> = {valX1}
          </h3>
          <h3>
            X<sub>2</sub> = {valX2}
          </h3>
        </div>
      </Glass>
    </>
  );
};

export default Linear;
