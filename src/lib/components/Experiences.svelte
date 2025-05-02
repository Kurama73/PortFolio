<script>
	import ExperienceCard from '$lib/components/ExperiencesCard.svelte';
	import { fade } from 'svelte/transition';
	import { _ } from '$lib/i18n';

	let showAllExperiences = false;

	const images = [
		"/experiences/Desautel.jpg",
		"/experiences/Cuisine.png"
	];

	function toggleShowAllExperiences() {
		showAllExperiences = !showAllExperiences;
	}
</script>

<div id="experiences-page" class="relative w-full min-h-screen text-white mt-14 px-6">
	<h1 class="text-8xl text-orange-500 text-center mb-12">{$_('experiences_title')}</h1>

	<div id="experiences-list" class="flex flex-col gap-y-6">
		{#each $_('experiences.items').slice(0, showAllExperiences ? undefined : 3) as exp, i (i)}
			<div transition:fade={{ duration: 100 }}>
				<ExperienceCard
					title={exp.title}
					date={exp.date}
					description={exp.description}
					tags={exp.tags}
					imageSrc={images[i]}
				/>
			</div>
		{/each}

		{#if $_('experiences.items').length > 3}
			<div class="flex justify-center mt-4">
				<button
					on:click={toggleShowAllExperiences}
					class="text-2xl px-4 h-12 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 transition-all duration-300"
				>
					{#if showAllExperiences}
						{$_('show_less')}
					{:else}
						{$_('show_more')}
					{/if}
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
    h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
        button {
            font-size: 1.25rem;
        }
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 5rem;
        }
        button {
            font-size: 1.5rem;
        }
    }
</style>