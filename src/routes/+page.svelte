<script lang="ts">
	import { base } from '$app/paths'
	import { cssvariable } from '@svelteuidev/composables';
	import { Input, Stack, Space, Button, Title } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var x: number = 0, r: number = 0, g: number = 0, b: number = 0
	var mounted: boolean = false
	onMount(() => (mounted = true))
	$: Colors = {
		t1: `rgb(${r},${g},${b})`,
		t2: r + g + b < 500 ? 'white' : 'black'
	};
</script>

{#if mounted}
	<Space h={30} />
	<Title align="center">SvelteUi Template</Title>
	<Space h={30} />
	<Stack align="center">
		<Button class="animation-bounce" on:click={() => x++}>Szám: {x}</Button>
		<Button variant="outline" color="orange" href="{base}/link">Link</Button>
		<div class="grid">
		<div>R</div><Input type="range" bind:value={r} min=0 max=255></Input>
		<div>G</div><Input type="range" bind:value={g} min=0 max=255></Input>
		<div>B</div><Input type="range" bind:value={b} min=0 max=255></Input>
		</div>
	</Stack>
	<Space h={30} />
	<div use:cssvariable={Colors} class="x">rgb({r}, {g}, {b})</div>
{/if}

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 0.2fr 1fr);
		border: solid 1px black;
		padding: 15px;
		border-radius: 17px;
	}
	.grid div {
		text-align: right;
		padding: 10px;
	}
	.x {
		color: var(--t1);
		text-align: center;
		font-size: 140px;
		text-shadow: 1px 1px 6px var(--t2);
	}
</style>