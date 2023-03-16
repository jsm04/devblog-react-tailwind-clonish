import {} from 'react';
import { feed } from '../fakedb/feed';
import { FeedCard } from './FeedCard';

export const Feed = () => {
	return (
		<section className="max-w-[728px] min-h-screens md:ml-8 lg:ml:0 pr-20">
			<div className="min-h-12 bg-base-100 w-full inline-flex [&>*]:mr-4 border-b border-gray-600 sticky top-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="svg-clickable my-auto "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
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
			{feed.map((post, idx) => {
				return (
					<FeedCard
						data={post}
						key={idx}
					/>
				);
			})}
		</section>
	);
};
