import { Suspense, lazy } from 'react';
import { Feed } from './Feed';
import { Spinner } from './Spinner';

export const BlogView = () => {
	return (
		<section className="min-h-screen mx-auto w-full">
			<section>
				<div className="flex">
					<img
						className="h-10 rounded-full my-auto"
						src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1094.jpg"
						alt=""
					/>
					<div className="ml-3">
						<h4 className="text-xl font-bold">Maxwell</h4>
						<p>Lorem Fill this is composed components</p>
					</div>
				</div>
			</section>
			<article className="ml-10 prose text-justify mb-10">
				<h2 className="font-extrabold text-3xl text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, voluptates!
				</h2>
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos perferendis et? Vel,
					maxime nisi!
				</h3>
				<img
					className="h-96 w-full mt-5"
					src="https://picsum.photos/id/194/800/600"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nesciunt
					aliquam natus? Odit, quasi reiciendis? Earum cum in commodi qui illum, amet hic nostrum
					soluta obcaecati deleniti! Velit, quo. Quaerat quod corrupti iusto recusandae natus. Ipsa
					quae quas dicta facere molestias vel aspernatur. Debitis a dolorem possimus sapiente
					commodi corporis natus tenetur, repudiandae corrupti sunt minus odit. Commodi, doloremque!
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolore quibusdam porro
					illum tempore error debitis alias repudiandae similique expedita non ullam, soluta iure
					rem illo at ipsum nisi blanditiis?
				</p>
				<blockquote className="mt-5">
					Adipisci eos error animi et molestiae, iusto ducimus culpa. Id est voluptatum quas facere
					ipsam earum, necessitatibus et, eum excepturi minima maiores? Ab qui quae velit
					voluptatibus quam maiores eligendi.
				</blockquote>
				<p>
					Totam sequi, at doloribus voluptate sit autem nam aut qui expedita esse possimus accusamus
					neque provident alias explicabo ipsam reiciendis ratione est quaerat itaque! Facilis nisi
					nesciunt voluptatibus quod quidem!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore consectetur officiis
					blanditiis? Eaque, inventore labore quam vero consequatur veritatis a. Dolor, facilis
					excepturi nisi voluptatem enim vitae soluta explicabo animi sed suscipit adipisci nam
					dolorum aspernatur amet, neque obcaecati et at beatae, nesciunt rem commodi vel
					exercitationem. Pariatur, nemo!
				</p>
			</article>
			<Feed />
		</section>
	);
};
