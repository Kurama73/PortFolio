<script>
	import { createEventDispatcher } from 'svelte';
	import { base } from '$app/paths';
	import { _ } from '$lib/i18n';

	export let title;
	export let date;
	export let description;
	export let tags;
	export let imageSrc;

	const dispatch = createEventDispatcher();
</script>

<div class="experience-card w-3/4 flex flex-col md:flex-row items-start p-4 rounded-lg bg-gray-800 text-white gap-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative">

	<!-- Section Détails -->
	<div class="flex flex-col w-full md:w-8/12">
		<h2 class="text-4xl text-left font-bold mb-1">{title}</h2>
		<p class="text-lg text-orange-500 mb-2">{date}</p>
		<div class="h-[2px] bg-orange-500 mb-4"></div>
		<p class="text-lg text-justify mb-4">{description}</p>
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="px-3 py-1 text-sm font-medium bg-cyan-800 text-white rounded">{tag}</span>
			{/each}
		</div>
	</div>

	<!-- Section Image -->
	<div class="image-container w-full md:w-4/12 flex items-center justify-center">
		<img src="{base}{imageSrc}" alt={title} class="experience-image max-w-full max-h-full object-contain rounded-lg" />
	</div>
</div>

<style>
    .experience-card {
        transition: transform 0.2s, box-shadow 0.2s;
        border-radius: 1rem;
        border: 2px solid rgba(249, 115, 22, 0.3);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .experience-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 3px rgba(249, 115, 22, 1);
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%; /* S'adapte à la hauteur de la carte */
    }

    .experience-image {
        max-width: 90%; /* Empêche l'image de déborder horizontalement */
        max-height: 200px; /* Limite la hauteur maximale de l'image */
        object-fit: contain; /* Gère le redimensionnement sans déformation */
    }

    /* Style mobile */
    @media (max-width: 640px) {
        .experience-card {
            width: 90%; /* Réduit la largeur de la carte pour mobile */
            margin: 10px auto; /* Centrer la carte et ajouter un espacement */
            padding: 16px;
        }

        .image-container {
            justify-content: center;
            height: 200px; /* Fixe une hauteur pour l'image */
        }

        .experience-image {
            max-width: 100%; /* Assure que l'image est bien contenue */
            max-height: 150px; /* Limite la hauteur de l'image sur mobile */
        }

        h2 {
            font-size: 1.25rem; /* Réduit la taille des titres */
            align-self: center;
        }

        p {
            font-size: 1rem; /* Réduit la taille du texte */
        }

    }

    @media (min-width: 768px) {
        .experience-image {
            max-height: 300px; /* Augmente la taille pour les écrans plus grands */
        }
    }
</style>
