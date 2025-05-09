<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { fade } from 'svelte/transition';
    import { _ } from '$lib/i18n';

    let expandedProject: string | null = null;
    let showAllProjects = false;

    function toggleExpand(projectTitle: string) {
        expandedProject = expandedProject === projectTitle ? null : projectTitle;
    }

    function toggleShowAllProjects() {
        showAllProjects = !showAllProjects;
    }
</script>

<div id="project-page" class="relative w-full min-h-screen text-white mt-14 px-6">
    <h1 class="text-8xl text-orange-500 text-center mb-12">{$_('projects_title')}</h1>

    <div id="project-list" class="grid grid-cols-1 gap-y-6">
        {#each $_('projects').slice(0, showAllProjects ? undefined : 3) as proj, i (proj.title || i)}
            <div transition:fade={{ duration: 100 }}>
                <ProjectCard
                  title={proj.title}
                  description={proj.description}
                  tags={proj.tags}
                  imageSrc={proj.images}
                  isExpanded={expandedProject === proj.title}
                  on:toggleExpand={() => toggleExpand(proj.title)}
                  details={proj.details}
                  competences={proj.competences}
                />
            </div>
        {/each}

        {#if $_('projects').length > 3}
            <div class="flex justify-center mt-4">
                <button
                  on:click={toggleShowAllProjects}
                  class="text-2xl px-4 h-12 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 transition-all duration-300"
                >
                    {#if showAllProjects}
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

    @media (max-width: 640px) {
        #project-page {
            padding-left: 10px;
            padding-right: 10px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        #project-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .project-card {
            width: 100%;
            max-width: 320px;
        }

        button {
            width: auto;
            padding: 10px 20px;
            font-size: 1rem;
        }
    }
</style>