'use client';

import Button from '@/components/common/button';
import Glass from '@/components/common/glass';
import Link from 'next/link';

const Algebra = () => {
  return (
    <div>
      <Glass>
        <h1>Algebra</h1>
        <div className='algebra-btns my'>
          <Link href='/algebra/linear'>
            <Button>Linear Equations</Button>
          </Link>
          <Link href='/algebra/evaluate'>
            <Button>Evaluate</Button>
          </Link>
          <Link href='/algebra/quadratics'>
            <Button>Quadratic Equations</Button>
          </Link>
        </div>
        <h3 className='my'>Solve Using Identities</h3>
        <Link href='/algebra/identity1/'>
          <Button>(a+b)&#178;</Button>
        </Link>
        <Link href='/algebra/identity2'>
          <Button>(a-b)&#178;</Button>
        </Link>
        <Link href='/algebra/identity3'>
          <Button>a&#178;-b&#178;</Button>
        </Link>
      </Glass>
    </div>
  );
};

export default Algebra;
