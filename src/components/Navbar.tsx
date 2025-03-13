import {} from 'react';
import { Link } from 'react-router-dom';
import { Notifications } from './NavNotifications';
import { NavProfile } from './NavProfile';
import { Search } from './NavSearch';
import { ThemeToggler } from './NavThemeToggler';
import { NavWrite } from './NavWrite';

export const Navbar = () => {
	return (
		<nav className="navbar bg-base-100 max-w-7xl mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-circle"
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
					className="btn text-accent normal-case text-4xl font-sans"
				>
					Blogger
				</Link>
			</div>
			<div className="navbar-end">
				<ThemeToggler />
				<NavWrite />
				<Search />
				<Notifications />
				<NavProfile />
			</div>
		</nav>
	);
};
