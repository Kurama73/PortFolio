import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html' // Active le mode SPA pour les routes dynamiques
		}),
		paths: {
			base: '/PortFolio', // Nom exact de votre dépôt GitHub
			relative: false // Obligatoire pour GitHub Pages
		}
	}
};

export default config;
