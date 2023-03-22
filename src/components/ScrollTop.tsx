import { ReactNode, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
	children: ReactNode;
};

export function ScrollTop({ children }: Props) {
	const { pathname } = useLocation();

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		});
	}, [pathname]);

	return <>{children}</>;
}
