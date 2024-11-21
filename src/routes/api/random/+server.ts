import { getRandomUrl, urls } from '$lib/server/util';

export function GET() {
	return new Response(getRandomUrl(urls));
}
