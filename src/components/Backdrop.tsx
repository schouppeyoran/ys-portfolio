import React, { ReactNode } from 'react';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return (
    <main className='bg-slate-100 flex flex-col'>
      {children}
    </main>
  );
}

export default Backdrop;
