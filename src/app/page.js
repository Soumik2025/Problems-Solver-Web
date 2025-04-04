'use client';
import TypewriterComponent from 'typewriter-effect';
import './page.css';

export default function Home() {
  return (
    <>
      <div className='home-page-center'>
        <div className='home-content'>
          <div className='home-brand'>
            <div className=''>A Problem Solver for </div>
            <TypewriterComponent
              options={{
                strings: [
                  'Quadratic Equations.',
                  'Linear Equations.',
                  'Kinematics.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
