import {} from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar bg-base-100 max-w-7xl mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 [&>li>a]:text-lg [&>li]:p-1"
					>
						<li>
							<Link to="/">
								<li>Homepage</li>
							</Link>
						</li>
						<li>
							<a>About</a>
						</li>
					</ul>
				</div>
				<Link
					to="/"
					className="btn btn-ghost text-accent normal-case text-4xl font-sans"
				>
					Blogger
				</Link>
			</div>

			<div className="navbar-end">
				<Link to="/blog/write">
					<button
						title="Write"
						className="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-5 h-5 "
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
					</button>
				</Link>
				<button
					title="Search"
					type="button"
					className="btn btn-ghost btn-circle"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
				<button
					title="Notifications"
					className="btn btn-ghost btn-circle"
				>
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
						<span className="badge badge-xs badge-primary indicator-item"></span>
					</div>
				</button>
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-7/12 rounded-full">
							<img
								alt="Profile Picture"
								src="https://picsum.photos/id/237/200/300"
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 [&>li>a]:text-lg"
					>
						<li>
							<a className="justify-between">Profile</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
