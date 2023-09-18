<script lang="ts">
	import { fly } from 'svelte/transition';
	let pause = false;
	let hideBlurb = false;
	// import '../app.css';
	import 'bonsai.css/dist/bonsai.min.css';
	const handleVisibilityChange = (e) => {
		if (e.target.hidden) {
			pause = true;
		} else {
			pause = false;
		}
	};
</script>

<svelte:window on:visibilitychange={handleVisibilityChange} />

{#if !pause}
	<slot />
{/if}

{#if !hideBlurb}
	<div
		transition:fly|global={{ x: 500, duration: 2000 }}
		style="--pos: absolute; --top: 10vh; --right: 0; --z:10000000; --bgc: #fff; --p: 0.5rem; --b: 2px #000 solid; --br: 0px; --radius: 0.5rem 0 0 0.5rem; --maxw: 40ch"
	>
		<div style="--d:flex; --ai: center; --jc: space-between;">
			<h1 style="--size:1.4rem; --weight: 900; --d: inline-block; --cur: pointer;">
				Where are all the buses?
			</h1>
			<a style="--size: 2rem" on:click={() => (hideBlurb = true)}>&times;</a>
		</div>
		<p>
			A project by <a href="https://joeinn.es" target="_blank" rel="external">Joe Innes</a> showing real
			time public transport information across Budapest.
		</p>
		<p><a href="/about">About</a></p>
	</div>
{/if}
