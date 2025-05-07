<script lang="ts">
	import { base } from '$app/paths';
	import { _ } from '$lib/i18n';

	let selectedButton: string = 'All';
	let scrollPosition = 0;
	let scrollContainer: HTMLDivElement;

	const technologies = [
		{ name: 'HTML', category: 'Front-End', progress: 90 },
		{ name: 'CSS', category: 'Front-End', progress: 85 },
		{ name: 'JavaScript', category: 'Front-End', progress: 80 },
		{ name: 'Java', category: 'Back-End', progress: 75 },
		{ name: 'PHP', category: 'Back-End', progress: 60 },
		{ name: 'SQL', category: 'DataBase', progress: 90 },
		{ name: 'PLSQL', category: 'DataBase', progress: 70 },
		{ name: 'MongoDB', category: 'DataBase', progress: 90 },
		{ name: 'Svelte', category: 'Frameworks', progress: 70 },
		{ name: 'Vue.js', category: 'Frameworks', progress: 50 },
		{ name: 'Git', category: 'Tools', progress: 70 },
		{ name: 'Docker', category: 'Tools', progress: 40 },
		{ name: 'C', category: 'Back-End', progress: 75 },
		{ name: 'C-Sharp', category: 'Back-End', progress: 75 },
		{ name: 'C++', category: 'Back-End', progress: 30 },
		{ name: 'Python', category: 'Back-End', progress: 45 },
		{ name: 'Kotlin', category: 'Back-End', progress: 75 },
		{ name: 'Tailwind CSS', category: 'Frameworks', progress: 80 }
	];
</script>

<div id="skills-page" class="relative w-full min-h-screen mt-14 text-white">
	<h1 class="text-8xl text-orange-500 text-center" id="title"> {$_('skills_title')}</h1>

	<div class="flex items-start flex-col md:flex-row">
		<!-- Filtres : visibles uniquement sur desktop -->
		<div id="filters" class="hidden md:flex bg-gray-800 p-3 h-fit flex-col items-start max-w-40 ml-6 my-auto mr-2">
			<h2 class="text-4xl mb-8 text-center w-full"> {$_('skills.filter')}</h2>
			{#each ['All', 'Front-End', 'Back-End', 'DataBase', 'Frameworks', 'Tools'] as button}
				<button
					class="mb-4 text-lg w-full px-4 py-2 rounded transition-colors duration-150 hover:bg-orange-600"
					class:bg-orange-500={selectedButton === button}
					class:bg-gray-700={selectedButton !== button}
					on:click={() => {
						selectedButton = button;
						scrollContainer.scrollLeft = 0;
						scrollPosition = 0;
					}}
				>
					{button}
				</button>
			{/each}
		</div>

		<!-- Zone des skills -->
		<div class="flex-1 relative overflow-hidden w-full">
			<div
				id="technologies"
				class="flex overflow-x-auto py-6 px-6 scroll-smooth snap-x snap-mandatory"
				bind:this={scrollContainer}
				on:scroll={() => scrollPosition = scrollContainer.scrollLeft}
			>
				<div class="grid gap-6 grid-flow-col grid-rows-[repeat(3,minmax(0,200px))] auto-cols-[minmax(200px,1fr)]">
					{#each technologies.filter(tech => selectedButton === 'All' || tech.category === selectedButton) as tech}
						<div class="skill-card bg-gray-800 p-6 rounded-lg w-full h-full flex flex-col justify-center snap-start">
							<h3 class="text-2xl mb-3 text-center">{tech.name}</h3>
							<img
								src={base + `/skills/${tech.name.toLowerCase()}.png`}
								alt={tech.name}
								class="skill-image w-16 h-16 mx-auto mb-4"
							/>
							<div class="progress-bar-container mt-4">
								<div class="progress-bar" style="width: {tech.progress}%"></div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
    h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .skill-card {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
        border-radius: 1rem;
        border: 2px solid rgba(249, 115, 22, 0.3);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }

    .skill-image {
        width: 64px;
        height: 64px;
        margin-bottom: 10px;
    }

    .progress-bar-container {
        width: 100%;
        height: 15px;
        background-color: #2d3748;
        border: 2px solid #4a5568;
        overflow: hidden;
        border-radius: 4px;
    }

    .progress-bar {
        height: 100%;
        background-color: #f97316;
    }

    #technologies::-webkit-scrollbar {
        height: 12px;
    }

    #technologies::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }

    #technologies::-webkit-scrollbar-thumb {
        background: #f97316;
        border-radius: 4px;
    }

    #technologies::-webkit-scrollbar-thumb:hover {
        background: #ea580c;
    }

    @media (max-width: 768px) {
        #filters {
            display: none !important;
        }

        #technologies {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: repeat(3, auto);
						gap: 2px;
        }

        .skill-card {
            height: auto;
            min-height: 150px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #1a202c;
            border-radius: 8px;
						margin:0;
        }

        .skill-image {
            width: 70px;
            height: 70px;
            margin-bottom: 4px; /* Réduction de l'espacement sous l'image */

        }

        .progress-bar-container {
            height: 8px;
            border: 1px solid #4a5568;
            background-color: #2d3748;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
        }

        .progress-bar {
            height: 100%;
            background-color: #f97316;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        #title {
            margin-bottom: 0;
        }
    }
</style>
