import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: '/PortFolio', // Chemin correspondant au sous-dossier GitHub Pages
			relative: false
		}
	}
};

export default config;