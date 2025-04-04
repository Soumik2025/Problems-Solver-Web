'use client';

import EqnInput from '@/components/common/eqninput';
import Glass from '@/components/common/glass';
import { identity3Solver } from '@/helpers/algebrasolver';
import { useEffect, useState } from 'react';

const Identity = () => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [ans, setAns] = useState(0);

  useEffect(() => {
    const res = identity3Solver(Number(valA), Number(valB));
    console.log(res);
    setAns(res);
  }, [valA, valB]);

  return (
    <>
      <Glass>
        <h2>a&#178; - b&#178;</h2>
        <div className='identity-input'>
          <EqnInput
            value={valA}
            onChange={(e) => setValA(e.target.value)}
            type='number'
            placeholder='Value of a'
            className='my'
            block
          />
        </div>
        <div className='identity-input'>
          <EqnInput
            value={valB}
            onChange={(e) => setValB(e.target.value)}
            type='number'
            placeholder='Value of b'
            className='my'
            block
          />
        </div>
        <h2>Answer: {ans}</h2>
      </Glass>
    </>
  );
};

export default Identity;
