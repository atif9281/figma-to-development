import { ReactNode } from 'react';
import Navbar from '@/components/navbar/Navabar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="">
            <Navbar />
            <main className="flex justify-end min-h-[90vh]">
                {children}
            </main>
            
        </div>
    );
};

export default Layout;