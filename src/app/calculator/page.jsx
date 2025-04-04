'use client';

import Calc from '@/components/calc/calc';
import { evaluationSolver } from '@/helpers/algebrasolver';
import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [query, setQuery] = useState('');
  const [ans, setAns] = useState('');
  const [placeholder, setPlaceholder] = useState('0');

  function solve() {
    if (query !== '') {
      try {
        const res = evaluationSolver(query);
        setQuery('');
        setAns(res);
      } catch (e) {
        console.log(e);
        setQuery('');
        setAns('');
        setPlaceholder('MATH ERROR');
      }
    }
  }

  function keyUp(e) {
    const key = e.key;
    if (key === 'Enter') {
      solve();
    }
  }
  return (
    <>
      <input
        value={query !== '' ? query : ans}
        placeholder={placeholder}
        className='calc-ans'
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      <div className='calc my'>
        <Calc
          setAns={setAns}
          setQuery={setQuery}
          query={query}
          solve={solve}
          setPlaceholder={setPlaceholder}
        />
      </div>
    </>
  );
};

export default Calculator;
