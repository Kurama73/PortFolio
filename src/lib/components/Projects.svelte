<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    let expandedProject: string | null = null;

    const projects = [
        {
            title: "SmartDesk",
            description: "Ceci est une description du projet SmartDesk.",
            tags: ["#HTML", "#CSS", "#JS"],
            imageSrc: "/SmartDesk.png",
        },
        {
            title: "Project X",
            description: "Description du projet X.",
            tags: ["#React", "#TailwindCSS"],
            imageSrc: "/ProjectX.png",
        },
        {
            title: "Portfolio Website",
            description: "Mon site personnel pour afficher mes compétences.",
            tags: ["#Svelte", "#Flowbite"],
            imageSrc: "/Portfolio.png",
        },
    ];

    function toggleExpand(projectTitle: string) {
        expandedProject = expandedProject === projectTitle ? null : projectTitle;
    }
</script>

<div id="project-page" class="relative w-full min-h-screen bg-gray-900 text-white grid">
    <h1 class="text-8xl text-orange-500 mb-20 text-center">Projects</h1>

    <div id="project-list" class="grid grid-cols-1 gap-6 px-6">
        {#each projects as project}
            <div class="mb-8">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageSrc={project.imageSrc}
                  isExpanded={expandedProject === project.title}
                  on:toggleExpand={() => toggleExpand(project.title)}
                />
            </div>
        {/each}
    </div>
</div>