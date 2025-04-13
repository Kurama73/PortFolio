import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: '/PortFolio', // Nom exact du dépôt GitHub
			relative: false
		}
	}
};

export default config;
