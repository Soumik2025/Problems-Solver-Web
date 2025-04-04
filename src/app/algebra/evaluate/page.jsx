'use client';

import EqnInput from '@/components/common/eqninput';
import Glass from '@/components/common/glass';
import { evaluationSolver } from '@/helpers/algebrasolver';
import { useEffect, useState } from 'react';

const Evaluate = () => {
  const [algebraInput, setAlgebraInput] = useState('');
  const [ans, setAns] = useState(null);

  useEffect(() => {
    if (algebraInput !== '') {
      try {
        const res = evaluationSolver(algebraInput);
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
        <h1>Evaluate</h1>
        <EqnInput
          type='text'
          value={algebraInput}
          onChange={(e) => setAlgebraInput(e.target.value)}
          className='my'
          block
          placeholder='Enter Sum'
        />
        {ans ? (
          typeof ans !== 'object' ? (
            <h2>{ans}</h2>
          ) : (
            <h2>{ans.value}</h2>
          )
        ) : (
          ''
        )}
      </Glass>
    </>
  );
};

export default Evaluate;
