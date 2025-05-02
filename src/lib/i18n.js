import { register, init, getLocaleFromNavigator, locale as $locale, _ } from 'svelte-i18n';

register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));

init({
	fallbackLocale: 'fr',
	initialLocale: getLocaleFromNavigator(),
});

export { _, $locale as locale };
