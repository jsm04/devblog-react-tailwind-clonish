import { useEffect, useState } from 'react';

export const useFetch = <T, E>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState<E | null>(null);
	const controller = new AbortController();

	async function fetcher(signal?: AbortSignal) {
		try {
			if (signal?.aborted) {
				Promise.reject(signal.reason);
			}

			const response = await fetch(url);

			if (!response.ok) {
				throw response;
			}

			const fetchedData = await response.json();

			setData(fetchedData as T);
		} catch (error) {
			setError(error as E);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const signal = controller.signal;
		// time out for testing purposes
		// setTimeout(() => {
		fetcher(signal);
		// }, 15000);
		return () => controller.abort('canceled request');
	}, [url]);

	return { data, isLoading, error };
};
