import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH || '' // Ajoutez le chemin si nécessaire (exemple : "/Portfolio")
		}
	},
	preprocess: vitePreprocess()
};
