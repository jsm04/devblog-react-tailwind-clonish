import { Suspense, useMemo } from 'react';
import { cropContent } from '../utils/utilities';
import { FeedActions } from './FeedActions';
import { Spinner } from './Spinner';
import { Article } from '../types';

type Props = {
	data: Article;
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
					className="w-12 h-12 object-cover rounded-full border-2 border-gray-300 shadow-sm"
					alt="Profile Picture"
					src={profile}
				/>
				<h3 className="ml-2 font-semibold text-base font-serif">{title}</h3>
			</div>
			<div className="flex">
				<div className="flex flex-col justify-evenly min-h-16 basis-7/10">
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
				<div className="ml-auto h-28 w-28 rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
					<img
						className="h-full w-full object-cover rounded-lg"
						src={image}
						alt=""
					/>
				</div>
	
			</div>
		</div>
	);
};
