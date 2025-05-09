<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Starback from 'starback';

	let canvas;

	onMount(() => {
		canvas = document.getElementById('canvas');
		new Starback(canvas, {
			type: 'dot',
			quantity: 20,
			direction: 0,
			backgroundColor: ['#0e1118', '#232b3e'],
			randomOpacity: true,
			starSize: [0, 0.5]
		});
	});
</script>

<svelte:head>
	<style>
      @font-face {
          font-family: 'Jersey10';
          src: url('/fonts/Jersey10.ttf') format('truetype');
      }
      @font-face {
          font-family: 'Jersey25';
          src: url('/fonts/Jersey25.ttf') format('truetype');
      }
	</style>
</svelte:head>

<div id="background-container">
	<canvas id="canvas"></canvas>
</div>

<slot />

<style>
    #background-container {
        background: url('/backgrounds/bg-2.jpg') repeat center center;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        pointer-events: none;
    }

    canvas {
        width: 100vw;
        height: 100vh;
        display: block;
    }
</style>
