import { ReactNode } from 'react';
import { useStickyNav } from '../hooks/useStickyNav';
import { Navbar } from './Navbar';

type Props = {
	children: ReactNode;
};

export const MainFrame = (props: Props) => {
	useStickyNav();
	return (
		<>
			<header className="min-w-full bg-base-100 p-2 border-b border-gray-600 top-0 max-w-6xl z-50">
				<Navbar />
			</header>
			<main>{props.children}</main>
		</>
	);
};
