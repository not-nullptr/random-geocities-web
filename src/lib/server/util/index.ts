import urlsTxt from '$lib/server/urls.txt?raw';

export const urls = urlsTxt
	.split('\n')
	.map((u) => `https://geocities.restorativland.org${u.trim()}`);

export function getRandomUrl(urls: string[]) {
	const arrayLength = urls.length;
	if (arrayLength === 0) {
		throw new Error('The URL list is empty.');
	}
	const randomIndex = secureRandomIndex(arrayLength);
	return urls[randomIndex];
}

function secureRandomIndex(max: number) {
	const randomBuffer = new Uint32Array(1);
	crypto.getRandomValues(randomBuffer);
	return randomBuffer[0] % max;
}
