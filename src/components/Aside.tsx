import { ReactNode } from 'react';
import { Discover } from './Discover';
import { Footer } from './Footer';
import { Spinner } from './Spinner';

export const Aside = () => {
	return (
		<aside className="mb-auto max-w-xl min-w-[20rem] pt-4 pl-5 sticky top-0 border-l border-gray-600 min-h-screen ">
			<Discover />
			<Footer />
		</aside>
	);
};
