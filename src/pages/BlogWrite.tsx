import { useId, useRef, useState } from 'react';
import { MainFrame } from '../components/MainFrame';

export const BlogWrite = () => {
	// const target = useRef(null);
	const [state, setState] = useState<string>();
	const textareaId = useId();
	return (
		<>
			<MainFrame>
				<section className="min-h-screen mx-auto max-w-6xl">
					<div className="w-full">
						<h2 className="font-semibold text-xl">The world is your notebook</h2>
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
		</>
	);
};
