'use client';

import EqnInput from '@/components/common/eqninput';
import Glass from '@/components/common/glass';
import { linearAlgebraSolver } from '@/helpers/algebrasolver';
import { useEffect, useState } from 'react';

const Linear = () => {
  const [algebraInput, setAlgebraInput] = useState('');
  const [ans, setAns] = useState(null);

  useEffect(() => {
    const hs = algebraInput.split('=');
    const lhs = hs[0];
    const rhs = hs[1];
    if (lhs !== undefined && rhs !== undefined && lhs !== '' && rhs !== '') {
      console.log(lhs);
      console.log(rhs);
      try {
        const res = linearAlgebraSolver(rhs, lhs, 'x');
        console.log(res);
        setAns(res);
      } catch (e) {
        console.log(e);
      }
    } else {
      setAns(null);
    }
  }, [algebraInput]);
  return (
    <>
      <Glass>
        <h1 className='mb'>Linear Equations</h1>
        <EqnInput
          type='text'
          value={algebraInput}
          onChange={(e) => setAlgebraInput(e.target.value)}
          className='my'
          block
          placeholder='Enter Equation (Solve For x)'
        />
        {ans ? (
          <h2 className='my'>
            Answer:{' '}
            {ans?.denom === 1 ? ans?.numer : `${ans?.numer}/${ans?.denom}`} {}
          </h2>
        ) : (
          ''
        )}
      </Glass>
    </>
  );
};

export default Linear;
