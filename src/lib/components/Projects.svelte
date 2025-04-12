<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    let expandedProject: string | null = null;
    let showAllProjects = false;

    const projects = [
        {
            title: "SmartDesk",
            description: "Ceci est une description du projet SmartDesk.",
            tags: ["#HTML", "#CSS", "#JS"],
            imageSrc: "/SmartDesk.png",
            details: "SmartDesk est un projet étudiant qui utilise le framework Svelte pour créer une application de gestion d'agenda allié à des widgets permettant de gérer les tâches et les notes.",
            competences: "Compétences du projet SmartDesk",
        },
        {
            title: "Project X",
            description: "Description du projet X.",
            tags: ["#React", "#TailwindCSS"],
            imageSrc: "/ProjectX.png",
            details: "Détails du projet X.",
            competences: "Compétences du projet X",
        },
        {
            title: "Portfolio Website",
            description: "Mon site personnel pour afficher mes compétences.",
            tags: ["#Svelte", "#Flowbite"],
            imageSrc: "/Portfolio.png",
            details: "Détails de mon site personnel.",
            competences: "Compétences de mon site personnel",
        },
        {
            title: "Another Project",
            description: "Description d'un autre projet.",
            tags: ["#Vue", "#Vuetify"],
            imageSrc: "/AnotherProject.png",
            details: "Détails d'un autre projet.",
            competences: "Compétences d'un autre projet",
        },
    ];

    function toggleExpand(projectTitle: string) {
        expandedProject = expandedProject === projectTitle ? null : projectTitle;
    }

    function toggleShowAllProjects() {
        showAllProjects = !showAllProjects;
    }
</script>

<div id="project-page" class="relative w-full min-h-screen text-white grid mt-14">
    <h1 class="text-8xl text-orange-500 text-center">Projects</h1>

    <div id="project-list" class="grid grid-cols-1 px-6">
        {#each (showAllProjects ? projects : projects.slice(0, 3)) as project}
            <div class="mb-3">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageSrc={project.imageSrc}
                  isExpanded={expandedProject === project.title}
                  on:toggleExpand={() => toggleExpand(project.title)}
                  details={project.details}
                  competences={project.competences}
                />
            </div>
        {/each}
    </div>

    <div class="flex justify-center">
        <button on:click={toggleShowAllProjects} class="text-2xl px-4 h-12 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700">
            {#if showAllProjects}
                Voir moins
            {:else}
                Voir plus
            {/if}
        </button>
    </div>
</div>