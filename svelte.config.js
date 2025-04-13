import adapter from '@sveltejs/adapter-static';
import * as process from '.svelte-kit/ambient.js';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: '/PortFolio',
			relative: false
		}
	}
};

export default config;
