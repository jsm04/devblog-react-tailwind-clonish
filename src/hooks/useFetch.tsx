import { useEffect, useState } from 'react';

export const useFetch = <T, E>(url: string) => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<E | null>(null);

	const controller = new AbortController();

	async function fetcher(signal?: AbortSignal) {
		try {
			if (signal?.aborted) {
				Promise.reject();
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
		fetcher(signal);
		return () => controller.abort();
	}, [url]);

	return { data, isLoading, error };
};
