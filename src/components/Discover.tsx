import {} from 'react';

type Props = {};

export const Discover = (props: Props) => {
	return (
		<div>
			<h2 className="text-lg font-medium">Discover more of what matter to you</h2>
			<div className="inline-flex flex-wrap [&>h3]:btn [&>h3]:btn-sm [&>h3]:btn-accent [&>h3] rounded-none [&>h3]:mr-5 [&>h3]:my-3 justify-evenly">
				<h3>lorem</h3>
				<h3>Loremipsum.</h3>
				<h3>lorem</h3>
				<h3>Lorem ipsum.</h3>
				<h3>Loremipsumcons.</h3>
			</div>
		</div>
	);
};
