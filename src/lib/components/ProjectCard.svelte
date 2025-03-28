<script>
	import { createEventDispatcher } from 'svelte';
	import SkillsDetails from './SkillsDetails.svelte';

	export let title;
	export let description;
	export let tags;
	export let imageSrc;
	export let isExpanded = false;

	const dispatch = createEventDispatcher();
	let showModal = false;

	function handleToggleExpand() {
		dispatch('toggleExpand');
	}

	function toggleModal() {
		showModal = !showModal;
	}
</script>

<button type="button" class="w-3/4 flex flex-col md:flex-row items-start p-6 rounded-lg bg-gray-800 text-white gap-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" on:click={handleToggleExpand} on:keydown={(e) => e.key === 'Enter' && handleToggleExpand()} aria-expanded={isExpanded}>
	<!-- Details Section -->
	<div class="flex flex-col w-full md:w-3/5">
		<h2 class="text-4xl text-left font-bold mb-1">{title}</h2>
		<div class="h-[2px] bg-orange-500 mb-4"></div>
		<p class="text-lg text-justify mb-4">{description}</p>
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="px-3 py-1 text-sm font-medium bg-cyan-800 text-white rounded">{tag}</span>
			{/each}
		</div>
	</div>

	<!-- Image Section -->
	<div class="w-full md:w-2/5 flex items-center justify-center">
		<img src={imageSrc} alt={title} class="max-w-full max-h-40 object-contain rounded-lg" />
	</div>
</button>

{#if isExpanded}
	<div class="expanded-content-wrapper flex justify-center relative w-full">
		<div class="expanded-content col-span-3 p-4 w-full flex justify-center md:w-3/4 border-r border-b border-orange-500">
			<div class="content-container bg-gray-800 text-white p-6 rounded-lg w-4/5 max-w-4xl">
				<div class="flex justify-between mb-8">
					<div class="w-1/2 pr-4">
						<h2 class="text-3xl mb-2">Détail du projet</h2>
						<div class="w-full h-[2px] bg-[#FF4D00] mb-4"></div>
						<p>Détail du projet...</p>
					</div>
					<div class="w-1/2 pl-4">
						<h2 class="text-3xl mb-2">Compétences liées</h2>
						<div class="w-full h-[2px] bg-[#FF4D00] mb-4"></div>
						<p>Liste des compétences...</p>
					</div>
				</div>
				<div class="flex justify-end">
					<button class="details-button bg-[#FF4D00] text-white px-4 py-2 rounded-none" on:click={toggleModal}>Détail Compétences</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<SkillsDetails {showModal} {toggleModal} />

<style>
    .expanded-content-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
    }

    .expanded-content {
        margin-top: 0;
        background-color: #2d3748;
    }

    .content-container {
        background-color: #2d3748;
        color: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        width: 80%;
        max-width: 64rem;
    }

    .details-button {
        background-color: #FF4D00;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0;
    }
</style>