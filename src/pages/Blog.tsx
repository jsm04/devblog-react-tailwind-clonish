import {} from 'react';
import { Aside } from '../components/Aside';
import { BlogView } from '../components/BlogView';
import { MainFrame } from '../components/MainFrame';

export const Blog = () => {
	return (
		<MainFrame>
			<section className="max-w-6xl flex items-center gap-4 mx-auto">
				<BlogView />
				<Aside />
			</section>
		</MainFrame>
	);
};
