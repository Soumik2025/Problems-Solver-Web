'use client';
import Button from '@/components/common/button';
import Glass from '@/components/common/glass';
import { useState } from 'react';
import KinematicsFormula from './kinematicsformula';

const Kinematics = () => {
  const [current, setCurrent] = useState(null);
  const [ans, setAns] = useState(0);

  return (
    <>
      <Glass>
        <div className='kinematic-page'>
          <h1>Kinematics</h1>
          {current === null ? (
            <div className='my'>
              <Button onClick={() => setCurrent('formula1')}>v = u + at</Button>
              <Button onClick={() => setCurrent('formula2')}>
                v&#178; = u&#178; + 2as
              </Button>
              <Button onClick={() => setCurrent('formula3')}>
                s = ut + &frac12;at&#178;
              </Button>
            </div>
          ) : (
            <>
              <div className='my'>
                <KinematicsFormula current={current} setAns={setAns} />
                <h2>Answer: {ans}</h2>
              </div>
              <Button size='md' block onClick={() => setCurrent(null)}>
                Go Back
              </Button>
            </>
          )}
        </div>
      </Glass>
    </>
  );
};

export default Kinematics;
