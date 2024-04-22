<script lang="ts">
	import { base } from '$app/paths'
	import { cssvariable } from '@svelteuidev/composables';
	import { Stack, Space, Button, Title } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var x: number = 0
	var mounted: boolean = false
	onMount(() => (mounted = true))
	$: Colors = {
		t1: `rgb(${x},${255-x},${x})`
	};
</script>

{#if mounted}
	<Space h={30} />
	<Title align="center">SvelteUi Template</Title>
	<Space h={30} />
	<Stack align="center">
		<Button class="animation-bounce" on:click={() => x = x < 250 ? x + 10 : 0}>Szám: {x}</Button>
		<Button variant="outline" color="orange" href="{base}/link">Link</Button>
	</Stack>
	<Space h={30} />
	<div use:cssvariable={Colors} class="x">Cica</div>
{/if}

<style>
	.x {
		color: var(--t1);
		text-align: center;
		font-size: 200px;
	}
</style>