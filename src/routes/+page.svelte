<script lang="ts">
	const { data } = $props();

	let randomUrl = $state(data.randomUrl);

	async function refreshUrl() {
		randomUrl = await fetch('/api/random').then((res) => res.text());
	}
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<a
		class="rounded-xl bg-blue-500 px-4 py-2 text-white hover:brightness-125 active:scale-95"
		onclick={refreshUrl}
		href={randomUrl}
		target="_blank"
		rel="noreferrer">Take me to a random Geocities page!</a
	>
</div>

<div class="fixed bottom-0 left-0 w-full pb-4 text-center text-black/50">
	<p>
		made by <a
			class="text-blue-500/75 hover:underline"
			href="https://x.com/notnullptr"
			target="_blank">nullptr</a
		>
	</p>
</div>
