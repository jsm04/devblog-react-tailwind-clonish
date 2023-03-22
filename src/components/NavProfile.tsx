import {} from 'react';

type Props = {};

export const NavProfile = (props: Props) => {
	return (
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
	);
};
