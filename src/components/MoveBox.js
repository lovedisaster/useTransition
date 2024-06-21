import React, { useEffect, useRef, useState } from 'react';

const MoveBox = () => {
  const boxRef = useRef(null);
  const positionRef = useRef(0);
  const speed = 1; 

  const reset = () => {
    boxRef.current.style.left = 0;
  }

  const moveBoxWithNoRAF = () => {
    reset();
    while(positionRef.current < window.innerWidth - boxRef.current.offsetWidth) {
      positionRef.current += speed;
      boxRef.current.style.left = `${positionRef.current}px`;
      console.log(positionRef.current);
    }

    // const moveBox = () => {
    //   console.log(positionRef.current)
    //   positionRef.current += speed;
    //   if (boxRef.current) {
    //     boxRef.current.style.left = `${positionRef.current}px`;

    //     if (positionRef.current < window.innerWidth - boxRef.current.offsetWidth) {
    //       moveBox();
    //     }
    //   }
    // };

    // moveBox();
  };

  const moveBoxWithRAF = () => {
    reset();
    const moveBox = () => {
      positionRef.current += speed;
      if (boxRef.current) {
        boxRef.current.style.left = `${positionRef.current}px`;

        if (positionRef.current < window.innerWidth - boxRef.current.offsetWidth) {
          requestAnimationFrame(moveBox);
        }
      }
    };

    requestAnimationFrame(moveBox);
  };

  return (
    <div className='row'>
      <input type="button" value={"Start Animation without requestAnimationFrame"} onClick={() => {moveBoxWithNoRAF()}}/>
      <br/>
      <input type="button" value={"Start Animation with requestAnimationFrame"} onClick={() => moveBoxWithRAF()}/>
      <div
        ref={boxRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          position: 'fixed',
          top: '20%',
          left: '0',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
};

export default MoveBox;
