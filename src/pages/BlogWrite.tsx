import { useId, useState } from 'react';
import { MainFrame } from '../components/MainFrame';
import { Spinner } from '../components/Spinner';

export const BlogWrite = () => {
	const [state, setState] = useState<string>();
	const [isLoading, setLoading] = useState<boolean>(true);
	const textareaId = useId();
	return (
		<MainFrame>
			<section className="min-h-screen mx-auto max-w-6xl">
				<div className="w-full">
					<h2 className="font-semibold text-2xl mt-5">The world is your notebook</h2>
					<form className=" max-w-6xl mx-auto">
						<textarea
							id={textareaId}
							value={state}
							onChange={(e) => setState(e.target.value)}
							autoFocus
							wrap="true"
							placeholder="Write something amazing..."
							className="textarea focus:outline-0 textarea-lg min-h-screen w-full mx-auto resize-none"
						/>
					</form>
				</div>
			</section>
		</MainFrame>
	);
};
