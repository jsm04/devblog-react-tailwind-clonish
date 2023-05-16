import { useEffect, useRef, useState } from 'react';

export const useStickyNav = () => {
	const [lastScrollReferece, setScrollReference] = useState(window.scrollY);

	const headerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const scrollHandler = () => {
			headerRef.current = document.getElementsByTagName('header')[0] as HTMLElement;
			const header = headerRef.current;

			if (window.scrollY < lastScrollReferece) {
				header.classList.add('sticky');
			}
			if (window.scrollY > lastScrollReferece) {
				header.classList.remove('sticky');
			}
			return setScrollReference(window.scrollY);
		};
		document.addEventListener('scroll', scrollHandler);

		return () => {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, [lastScrollReferece]);
};
