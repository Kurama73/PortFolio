<!-- src/lib/components/StarBackground.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import Starback from 'starback';

	let canvas;
	let starbackInstance;

	onMount(() => {
		// Création du canvas
		canvas = document.createElement('canvas');
		canvas.id = 'starback-canvas';
		document.body.prepend(canvas);

		// Styles inline pour éviter tout conflit
		Object.assign(canvas.style, {
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100vw',
			height: '100vh',
			zIndex: '-1',
			pointerEvents: 'none'
		});

		// Initialisation avec des paramètres ultra visibles
		initStarback();

		// Redimensionnement
		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(document.body);

		return () => {
			resizeObserver.disconnect();
		};
	});

	function initStarback() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		starbackInstance = new Starback(canvas, {
			type: 'dot',
			quantity: 250,
			direction: 225,
			backgroundColor: '#000000',
			randomOpacity: true,
			speed: 2,
			starColor: '#ffffff',
			starSize: [2, 4],
			width: canvas.width,
			height: canvas.height,
			showFps: true // À enlever en production
		});
	}

	function handleResize() {
		if (!canvas || !starbackInstance) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		starbackInstance.width = canvas.width;
		starbackInstance.height = canvas.height;
	}

	onDestroy(() => {
		if (canvas) document.body.removeChild(canvas);
		starbackInstance = null;
	});
</script>

<svelte:head>
	<style>
      #starback-canvas {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: -1 !important;
          pointer-events: none !important;
      }
	</style>
</svelte:head>