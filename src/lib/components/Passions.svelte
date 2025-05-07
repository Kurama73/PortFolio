<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { _ } from '$lib/i18n';
	import { onMount, onDestroy } from 'svelte';

	let expandedPassion: string | null = null;

	const passionImages = [
		['/passions/gaming_1.png','/passions/gaming_2.jpg','/passions/gaming_3.jpg'],
		['/passions/space_1.jpg','/passions/space_2.jpg','/passions/space_3.jpg','/passions/space_4.png'],
		['/passions/ms_1.jpg','/passions/ms_1.jpg','/passions/ms_3.jpg','/passions/ms_4.jpg','/passions/ms_5.jpg'],
		['/passions/sr_1.jpg','/passions/sr_2.jpg','/passions/sr_3.jpg','/passions/sr_4.jpg','/passions/sr_5.jpg'],
		['/passions/cuisine_1.jpg','/passions/cuisine_2.jpg','/passions/cuisine_3.png','/passions/cuisine_4.jpg','/passions/cuisine_5.jpg'],
		['/passions/informatique_1.jpg','/passions/informatique_2.png','/passions/informatique_3.png']
	];

	$: passions = Array.isArray($_('passions.passion'))
		? $_('passions.passion').map((p: { title: string; description: string }, i: number) => ({
			title: p.title,
			description: p.description,
			images: passionImages[i]
		}))
		: [];

	let activeIndexes = Array(passionImages.length).fill(0);

	function toggleExpand(passionTitle: string) {
		expandedPassion = expandedPassion === passionTitle ? null : passionTitle;
	}

	function randomImage(index: number) {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * passionImages[index].length);
		} while (randomIndex === activeIndexes[index]);
		activeIndexes[index] = randomIndex;
	}

	function nextImage(index: number) {
		activeIndexes[index] = (activeIndexes[index] + 1) % passionImages[index].length;
	}

	function prevImage(index: number) {
		activeIndexes[index] =
			(activeIndexes[index] - 1 + passionImages[index].length) % passionImages[index].length;
	}

	let intervals: NodeJS.Timeout[] = [];
	onMount(() => {
		// Précharger toutes les images
		passionImages.forEach((group) => {
			group.forEach((src) => {
				const img = new Image();
				img.src = src;
			});
		});

		// Lancer les changements automatiques d’image
		passionImages.forEach((_, index) => {
			intervals[index] = setInterval(() => randomImage(index), Math.random() * 10000 + 10000);
		});
	});
	onDestroy(() => {
		intervals.forEach(clearInterval);
	});

</script>

<div id="passions-page" class="relative w-full min-h-screen text-white mt-14 px-6">
	<h1 class="text-8xl text-orange-500 text-center mb-12">{$_('passions.title')}</h1>

	<div id="passions-list" class="passion-grid">
		{#each passions as passion, i (passion.title)}
			<div
				class="passion-card"
				role="button"
				tabindex="0"
				on:click={() => toggleExpand(passion.title)}
				on:keydown={(e) => e.key === 'Enter' && toggleExpand(passion.title)}
			>
				<div class="image-container">
					<div class="image-stack">
						{#each passion.images as img, j}
							{#if j === activeIndexes[i]}
								<img
									src={img}
									alt={passion.title}
									class="passion-image top"
									loading="lazy"
									decoding="async"
									in:fade={{ duration: 350 }}
								/>
							{/if}
						{/each}
					</div>
					<button class="carousel-btn left" on:click|stopPropagation={() => prevImage(i)}>&#9664;</button>
					<button class="carousel-btn right" on:click|stopPropagation={() => nextImage(i)}>&#9654;</button>
				</div>
				<h2 class="passion-title">{passion.title}</h2>
				{#if expandedPassion === passion.title}
					<div in:slide={{ duration: 300 }} out:slide={{ duration: 300 }} class="expanded-content">
						<p class=" text-gray-300 text-justify">{passion.description}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
    .passion-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        justify-items: center;
        align-items: start;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .passion-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 200px;
        max-width: 400px;
        background: #222;
        border-radius: 1rem;
        border: 2px solid rgba(249, 115, 22, 0.3);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        overflow: hidden;
        align-items: center;
    }

    .passion-card:hover {
        transform: translateY(-5px) scale(1.04);
        box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        border-color: rgba(249, 115, 22, 0.6);
    }

    .image-container {
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        overflow: hidden;
        background: #333;
    }

    .image-stack {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .passion-image.top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }

    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0,0,0,0.4);
        color: #fff;
        border: none;
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
        opacity: 0.4;
        transition: opacity 0.2s;
        z-index: 3;
    }

    .carousel-btn.left { left: 8px; }
    .carousel-btn.right { right: 8px; }
    .carousel-btn:hover { opacity: 1; }

    .passion-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0.7rem 0 0.5rem 0;
        text-align: center;
        color: #ffa500;
    }

    .expanded-content {
        background-color: #2d3748;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        width: 90%;
    }

    @media (max-width: 640px) {
        .passion-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0 1rem;
        }
        .passion-card {
            max-width: 100vw;
            align-items: center;
        }
        .image-container {
            aspect-ratio: 1/1;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }
</style>
