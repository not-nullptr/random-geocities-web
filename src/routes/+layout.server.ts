import { getRandomUrl, urls } from '$lib/server/util';

export function load() {
	const randomUrl = getRandomUrl(urls);
	return {
		randomUrl
	};
}
