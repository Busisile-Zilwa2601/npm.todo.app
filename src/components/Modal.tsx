import React from 'react';

export const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => {
  return (
    <div className='Outer-div-Modal'>
      <div className='Inner-div-Modal'>
        <div className='Modal-Header'>
          <button onClick={onClose}>Close</button>
        </div>
        <div className='Modal-scroll'>
          {children}
        </div>
      </div>
    </div>
  );
};