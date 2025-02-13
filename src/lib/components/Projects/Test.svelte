<script>
    import { createEventDispatcher } from 'svelte';
    export let expandedProject;
    export let isExpanded = false;
    const dispatch = createEventDispatcher();

    function toggleExpand() {
        dispatch('toggleExpand', 'Test');
    }
</script>

<div class="project-container font-['Jersey25'] p-4 border border-[#FF4D00] rounded-lg bg-gray-800 text-white grid grid-cols-3 gap-4 items-start" on:click={toggleExpand} on:keydown={e => e.key === 'Enter' && toggleExpand()} role="button" tabindex="0" aria-expanded={isExpanded}>
    <div class="project-details col-span-2">
        <h2 class="project-title text-4xl">Test</h2>
        <div class="project-divider h-[2px] bg-[#FF4D00] mb-4 w-full"></div>
        <p class="project-description mb-4 text-2xl">
            Ceci est une description du projet test pour tester le rendu de la page.
        </p>
        <div class="project-tags flex flex-wrap gap-2">
            <div class="tag text-white px-2 py-1 bg-cyan-800">#HTML</div>
            <div class="tag text-white px-2 py-1 bg-cyan-800">#CSS</div>
            <div class="tag text-white px-2 py-1 bg-cyan-800">#JS</div>
        </div>
    </div>
    <div class="project-image flex items-center justify-center col-span-1 h-full relative">
        <img src="/Test.png" alt="Test" class="responsive-image h-full">
        <div class="plus-icon absolute flex items-center justify-center bg-[#FF4D00] text-white w-5 h-5 text-3xl right-0 top-0">
            {isExpanded ? '-' : '+'}
        </div>
    </div>
</div>

<style>
    .project-container {
        width: 100%;
        margin: 0 auto;
        height: 100%;
    }

    .responsive-image {
        max-width: 100%;
        height: auto;
    }

    .plus-icon {
        z-index: 10;
    }

    .modal {
        z-index: 1000;
    }
</style>