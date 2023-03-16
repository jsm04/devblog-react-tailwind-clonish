import {} from 'react';
import { Aside } from '../components/Aside';
import { Featured } from '../components/Featured';
import { Feed } from '../components/Feed';
import { Hero } from '../components/Hero';
import { MainFrame } from '../components/MainFrame';

type Props = {};

export const Landing = (props: Props) => {
	return (
		<MainFrame>
			<Hero />
			<Featured />
			<section className="max-w-6xl flex justify-evenly items-center gap-7 mx-auto">
				<Feed />
				<Aside />
			</section>
		</MainFrame>
	);
};
