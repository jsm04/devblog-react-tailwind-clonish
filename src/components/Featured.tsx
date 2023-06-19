import { useState } from 'react';
import { blogs } from '../fakedb/blogs';

export const Featured = () => {
	return (
		<section className="mt-5 max-w-6xl mx-auto">
			<div className="flex text-xl flex-row p-2 align-middle justify-start ml-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 relative top-1 outline outline-1 py-[2px] rounded-full "
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
					/>
				</svg>
				<h2 className="ml-2 text-lg font-medium">Featured on site</h2>
			</div>
			<section className="flex flex-wrap flex-row p-2 items-start justify-evenly ml-4 mx-auto [&>div]:basis-80">
				{blogs.slice(0, 6).map((blog, index) => {
					const ranking = index + 1;
					return (
						<FeaturedCard
							key={index}
							data={blog}
							ranking={ranking}
						/>
					);
				})}
			</section>
		</section>
	);
};

type Blog = {
	profile: string;
	author: string;
	title: string;
	date: string;
};

type CardProps = {
	data: Blog;
	ranking: number;
};

function FeaturedCard({ data, ranking }: CardProps) {
	const { profile, author, title, date } = data;
	return (
		<div className="flex flex-row m-auto p-2 min-h-[8rem] ">
			<span className="min-w-[3rem] font-bold text-4xl text-accent relative -top-1 left-3">
				{ranking}
			</span>
			<article className="max-w-xs flex flex-col justify-between">
				<div className="flex">
					<img
						width={10}
						className="w-10 h-10 p-2 rounded-full my-auto image-full"
						alt="Profile Picture"
						src={profile}
					/>
					<h3 className="ml-2 font-semibold text-base font-serif">{author}!</h3>
				</div>
				<h4 className="font-semibold">{title}</h4>
				<span className="font-light text-sm align-top -tracking-wide">
					{new Date(date).toDateString()}
				</span>
			</article>
		</div>
	);
}
