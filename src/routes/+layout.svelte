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
	</style>
</svelte:head>

<!-- <div class="absolute inset-0 bg-cover bg-center -z-10" style="background-image: url('/bg/bg-1.jpg'); background-repeat: repeat; background-size: cover; min-height: 100vh;"></div> -->

{@render children()}

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background: transparent; /* ⚠️ important */
    }
</style>