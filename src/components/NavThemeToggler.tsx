import { useState } from 'react';
import { useDarkTheme } from '../hooks/useDarkTheme';

export function ThemeToggler() {
	const [toggleTheme, icon] = useDarkTheme();

	return (
		<button
			title="Theme toggler"
			type="button"
			className="btn btn-circle"
			onClick={toggleTheme}
		>
			{icon}
		</button>
	);
}
