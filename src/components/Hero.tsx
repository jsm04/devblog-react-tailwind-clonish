import heroSVG from '../assets/hero.svg';

export const Hero = () => {
	return (
		<section
			className="object-cover bg-no-repeat bg-cover py-12"
			style={{ backgroundImage: `url(${heroSVG})` }}
		>
			<div className="flex align-bottom justify-start ml-6 max-w-6xl xl:block xl:mx-auto">
				<div className="max-w-md flex flex-col justify-between ">
					<h1 className="mb-5 text-8xl font-serif text-accent">Hello there</h1>
					<p className="mb-5 text-2xl font-thin">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-accent btn-outline font-serif max-w-fit">Get Started</button>
				</div>
			</div>
		</section>
	);
};
