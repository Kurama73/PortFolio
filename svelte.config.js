import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	kit: {
		adapter: adapter(),
		paths: {
			base: '/Portfolio' // Chemin correspondant au nom du dépôt GitHub
		}
	},
	preprocess: vitePreprocess()
};
