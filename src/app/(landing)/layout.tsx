import { FC, type ReactNode } from 'react';
import BottomAppBar from './_components/BottomAppBar';

const LandingPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-white">{children}</main>
      <BottomAppBar />
    </div>
  );
};

export default LandingPageLayout;
