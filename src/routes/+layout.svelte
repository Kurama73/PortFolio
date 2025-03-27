<script lang="ts">
	import '../app.css';

	let { children } = $props();
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

      body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
	</style>
</svelte:head>

{@render children()}