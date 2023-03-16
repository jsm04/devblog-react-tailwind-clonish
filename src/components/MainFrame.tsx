import { ReactNode } from 'react';
import { Navbar } from './Navbar';

type Props = {
	children: ReactNode;
};

export const MainFrame = (props: Props) => {
	return (
		<>
			<header className="min-w-full bg-base-100 p-5 border-b border-gray-600 max-w-6xl">
				<Navbar />
			</header>
			<main>{props.children}</main>
		</>
	);
};
