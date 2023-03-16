import {} from 'react';
import { feed } from '../fakedb/feed';

type Props = {};

export const Feed = (props: Props) => {
	function cropContent(content: string) {
		const processed = content.split(' ');
		return processed.splice(0, 24).join(' ');
	}

	return (
		<section className="max-w-[728px] min-h-screens md:ml-8 lg:ml:0 pr-8">
			<div className="min-h-12 bg-base-100 w-full inline-flex [&>*]:mr-10 border-b border-gray-600 sticky top-0">
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
					<div
						key={idx}
						className="mt-6"
					>
						<div className="flex">
							<img
								width={10}
								className="w-10 h-10 p-2 rounded-full my-auto image-full"
								alt="Profile Picture"
								src={post.profile}
							/>
							<h3 className="ml-2 font-semibold text-base font-serif">{post.title}</h3>
						</div>
						<div className="flex">
							<div className="flex flex-col justify-evenly min-h-16 basis-4/6">
								<p className="break-words">
									{cropContent(post.content)}
									<span>...</span>
								</p>
								<div className="flex items-center justify-start h-14">
									<button
										type="button"
										className="btn-accent btn-xs rounded-full h-7 px-2"
									>
										{post.tag}
									</button>
									<h4 className="sm:hidden md:block mr-auto text-sm">
										&nbsp;&nbsp;{post.readTime} min read - Selected for you
									</h4>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="svg-clickable ml-auto"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="svg-clickable ml-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="svg-clickable ml-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
										/>
									</svg>
								</div>
							</div>
							<img
								className="ml-auto aspect-square h-28"
								src={post.image}
								alt=""
							/>
						</div>
					</div>
				);
			})}
		</section>
	);
};
