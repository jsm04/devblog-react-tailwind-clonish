import { Suspense, lazy, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { feed } from '../fakedb/feed';
import { useFetch } from '../hooks/useFetch';
import { useScrollTop } from '../hooks/useScrollTop';
import { FeedCard } from './FeedCard';
import { Spinner } from './Spinner';

const feedURI = '/feed.json';

type Feed = {
	profile: string;
	date: string;
	author: string;
	title: string;
	image: string;
	content: string;
	readTime: string;
	tag: string;
};

export const Feed = () => {
	const { data, isLoading, error } = useFetch<Feed[] | null, unknown>(feedURI);

	useScrollTop();

	return (
		<section className="max-w-[728px] min-h-screens md:ml-8 lg:ml:0 pr-20">
			<div className="min-h-12 bg-base-100 w-full inline-flex [&>*]:mr-4 border-b border-gray-600 sticky top-0 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="svg-clickable my-auto "
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
				<button
					type="button"
					className="z-4 focus:border-b-2 border-accent-focus text-base font-medium "
				>
					For you
				</button>
				<button
					type="button"
					className="z-4 focus:border-b-2 border-accent-focus text-base font-medium "
				>
					Following
				</button>
			</div>

			{data &&
				data.map((post, idx) => {
					return (
						<Link
							key={Math.random()}
							to={`/blog/${idx}`}
						>
							<FeedCard data={post} />
						</Link>
					);
				})}
		</section>
	);
};
