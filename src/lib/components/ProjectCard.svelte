<script>
	import { createEventDispatcher } from 'svelte';
	import Details from './Details.svelte';
	import { base } from '$app/paths';
	import { _ } from '$lib/i18n';

	export let title;
	export let description;
	export let tags;
	export let imageSrc;
	export let isExpanded = false;
	export let details;
	export let competences = [];

	const dispatch = createEventDispatcher();
	let showModal = false;

	function handleToggleExpand() {
		dispatch('toggleExpand');
	}

	function toggleModal() {
		showModal = !showModal;
	}

	import { fade, slide } from 'svelte/transition';
	const transitionDuration = 150;
</script>

<button type="button" class="project-card w-3/4 flex flex-col md:flex-row items-start p-4 rounded-lg bg-gray-800 text-white gap-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative"
				on:click={handleToggleExpand}
				on:keydown={(e) => e.key === 'Enter' && handleToggleExpand()}
				aria-expanded={isExpanded}
>
	<!-- Details Section -->
	<div class="flex flex-col w-full md:w-3/5">
		<h2 class="text-4xl text-left font-bold mb-1">{title}</h2>
		<div class="h-[2px] bg-orange-500 mb-4"></div>
		<p class="text-lg text-justify mb-4 leading-tight">{description}</p>
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="px-3 py-1 text-sm font-medium bg-cyan-800 text-white rounded">{tag}</span>
			{/each}
		</div>
	</div>

	<!-- Section Image -->
	<div class="image-container w-full md:w-2/5 flex items-center justify-center">
		<img src="{base}{imageSrc}" alt={title} class="project-image max-w-full max-h-full object-contain rounded-lg" />
	</div>

	<!-- Expand/Collapse Icon -->
	<div class="expand-icon absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full {isExpanded ? 'bg-orange-500' : 'bg-gray-700'}">
		<span class="text-2xl transition-transform transform {isExpanded ? 'rotate-icon' : ''}">{isExpanded ? '-' : '+'}</span>
	</div>
</button>

{#if isExpanded}
	<div
		in:slide={{ duration: transitionDuration }}
		out:slide={{ duration: transitionDuration }}
		class="expanded-content-wrapper flex justify-center relative w-full mt-2"
	>
		<div class="expanded-content col-span-3 p-4 w-8/10 flex justify-center border-r border-b bg-gray-800 border-orange-500 rounded-lg">
			<div class="content-container text-white p-6 rounded-lg w-full">
				<div class="flex flex-col md:flex-row justify-between mb-8">
					<div class="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
						<h2 class="text-3xl mb-2"> {$_('projects_details')}</h2>
						<div class="w-full h-[2px] bg-[#FF4D00] mb-4"></div>
						<p class="text-justify">{details}</p>
					</div>
					<div class="w-full md:w-1/2 pl-4" id="compétences">
						<h2 class="text-3xl mb-2"> {$_('projects_skills')}</h2>
						<div class="w-full h-[2px] bg-[#FF4D00] mb-4"></div>
						<ul class="space-y-4">
							{#each competences as comp}
								<li class="mb-2">
									<div class="text-lg">{comp.sousCompetence} <span class="text-orange-400">({comp.code})</span></div>
									<div class="ml-5 text-base text-justify">{comp.justification}</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="flex justify-end">
					<button class="details-button bg-[#FF4D00] text-white px-4 py-2 rounded-none cursor-pointer" on:click={toggleModal}>
						{$_('projects_skills_button')}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<Details {showModal} {toggleModal} />

<style>
    .expanded-content-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
        transition: all 0.3s ease-in-out;
    }

    .expanded-content {
        margin-top: 0;
    }

    .content-container {
        color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        width: 100%;
    }

    .details-button {
        background-color: #FF4D00;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0;
    }

    .project-card {
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 3px rgba(249, 115, 22, 1);
    }

    .expand-icon {
        transition: transform 0.2s;
    }

    .bg-orange-500 {
        background-color: #FF4D00;
    }

    .rotate-icon {
        transform: rotate(180deg);
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%; /* S'adapte à la hauteur de la carte */
    }

    .project-image {
        max-width: 90%; /* Empêche l'image de déborder horizontalement */
        max-height: 200px; /* Limite la hauteur maximale de l'image */
        object-fit: contain; /* Gère le redimensionnement sans déformation */
    }

    @media (min-width: 768px) {
        .project-image {
            max-height: 300px; /* Augmente la taille pour les écrans plus grands */
        }
    }

    /* Media Query pour les petits écrans (mobile) */
    @media (max-width: 640px) {
        .project-card {
            width: 90%; /* Réduit la largeur de la carte pour mobile */
            margin: 10px auto; /* Centrer la carte et ajouter un espacement */
            padding: 16px;
        }

        .image-container {
            justify-content: center;
            height: 200px; /* Fixe une hauteur pour l'image */
        }

        .project-image {
            max-width: 100%; /* Assure que l'image est bien contenue */
            max-height: 150px; /* Limite la hauteur de l'image sur mobile */
        }

        .expand-icon {
            top: 2px;
            right: 2px;
            width: 20px;
            height: 20px;
            font-size: 1.5rem; /* Réduit la taille de l'icône */
        }

        .content-container {
            padding: 0;
        }

        .details-button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem; /* Réduit la taille du bouton */
        }

        h2 {
            font-size: 1.25rem; /* Réduit la taille des titres */
						align-self: center;
        }

        p {
            font-size: 1rem; /* Réduit la taille du texte */
        }

				#compétences {
					margin-left: -20px;
				}

        .project-card h2 {
            font-size: 1.5rem; /* Taille du titre ajustée pour mobile */
            margin-bottom: 0.5rem;
        }
    }
</style>

