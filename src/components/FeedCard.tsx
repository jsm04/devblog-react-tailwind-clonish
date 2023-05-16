import { Suspense, useMemo } from 'react';
import { cropContent } from '../utils/utilities';
import { FeedActions } from './FeedActions';
import { Spinner } from './Spinner';

type Post = {
	profile: string;
	title: string;
	content: string;
	tag: string;
	readTime: string;
	image: string;
};

type Props = {
	data: Post;
};

export const FeedCard = ({ data }: Props) => {
	const { profile, title, content, tag, readTime, image } = data;
	const cachedContent = useMemo(() => cropContent(content), [content]);

	return (
		<div
			key={Date.now()}
			className="mt-6"
		>
			<div className="flex">
				<img
					width={10}
					className="w-10 h-10 p-2 rounded-full my-auto image-full"
					alt="Profile Picture"
					src={profile}
				/>
				<h3 className="ml-2 font-semibold text-base font-serif">{title}</h3>
			</div>
			<div className="flex">
				<div className="flex flex-col justify-evenly min-h-16 basis-4/6">
					<p className="break-words">
						{cachedContent}
						<span>...</span>
					</p>
					<div className="flex items-center justify-start h-14">
						<button
							type="button"
							className="btn-accent btn-xs rounded-full h-7 px-2"
						>
							{tag}
						</button>
						<h4 className="sm:hidden md:block mr-auto text-sm">
							&nbsp;&nbsp;{readTime} min read - Selected for you
						</h4>
						<FeedActions />
					</div>
				</div>
				<img
					className="ml-auto aspect-square h-28"
					src={image}
					alt=""
				/>
			</div>
		</div>
	);
};
