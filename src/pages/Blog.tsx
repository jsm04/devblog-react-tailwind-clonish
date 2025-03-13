import {} from 'react';
import { Aside } from '../components/Aside';
import { BlogView } from '../components/BlogView';
import { MainFrame } from '../components/MainFrame';

export const Blog = () => {
	return (
		<MainFrame>
			<section className="max-w-6xl flex justify-evenly items-center gap-24 mx-auto">
				<BlogView />
				<Aside />
			</section>
		</MainFrame>
	);
};
