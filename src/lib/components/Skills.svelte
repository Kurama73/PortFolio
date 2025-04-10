<script lang="ts">
	let selectedButton: string = 'All';
	let scrollPosition = 0;
	let scrollContainer: HTMLDivElement;

	function selectButton(button: string) {
		selectedButton = button;
		// Reset scroll position when changing filter
		scrollContainer.scrollLeft = 0;
		scrollPosition = 0;
	}

	const technologies = [
		{ name: 'HTML', category: 'Front-End', progress: 90 },
		{ name: 'CSS', category: 'Front-End', progress: 85 },
		{ name: 'JavaScript', category: 'Front-End', progress: 80 },
		{ name: 'Java', category: 'Back-End', progress: 75 },
		{ name: 'PHP', category: 'Back-End', progress: 70 },
		{ name: 'SQL', category: 'DataBase', progress: 65 },
		{ name: 'MongoDB', category: 'DataBase', progress: 60 },
		{ name: 'Svelte', category: 'Frameworks', progress: 55 },
		{ name: 'Vue.js', category: 'Frameworks', progress: 50 },
		{ name: 'Git', category: 'Tools', progress: 45 },
		{ name: 'Docker', category: 'Tools', progress: 40 },
	];
</script>

<div id="skills-page" class="relative w-full min-h-screen mt-14  text-white">
	<h1 class="text-8xl text-orange-500 mb-20 text-center">Skills</h1>

	<div class="flex items-center">
		<div id="filters" class="bg-gray-800 p-3 h-fit flex flex-col items-start max-w-40 ml-6 my-auto">
			<h2 class="text-4xl mb-8 text-center w-full">Filter</h2>
			{#each ['All', 'Front-End', 'Back-End', 'DataBase', 'Frameworks', 'Tools'] as button}
				<button
					class="mb-4 text-lg w-full px-4 py-2 rounded transition-colors duration-150 hover:bg-orange-600"
					class:bg-orange-500={selectedButton === button}
					class:bg-gray-700={selectedButton !== button}
					on:click={() => selectButton(button)}
				>
					{button}
				</button>
			{/each}
		</div>

		<div class="flex-1 relative overflow-hidden">
			<div
				id="technologies"
				class="flex overflow-x-auto py-6 px-20 scroll-smooth"
				bind:this={scrollContainer}
				on:scroll={() => scrollPosition = scrollContainer.scrollLeft}
			>
				<div class="grid gap-6" style="grid-auto-flow: column; grid-template-rows: repeat(3, minmax(0, 200px)); grid-auto-columns: minmax(200px, 1fr);">
					{#each technologies.filter(tech => selectedButton === 'All' || tech.category === selectedButton) as tech, i}
						<div class="skill-card bg-gray-800 p-6 rounded-lg w-full h-full flex flex-col justify-center mb-2">
							<h3 class="text-2xl mb-3 text-center">{tech.name}</h3>
							<img
								src={`/skills/${tech.name.toLowerCase()}.png`}
								alt={tech.name}
								class="skill-image w-16 h-16 mx-auto mb-4"
							>
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
    .skill-card {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
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

    #technologies {
        margin-top: -10px;
    }
</style>