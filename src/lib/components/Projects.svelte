<script lang="ts">
    import SmartDesk from "./Projects/SmartDesk.svelte";
    import Test from "./Projects/Test.svelte";
    let expandedProject: string | null = null;

    function toggleExpand(project: string) {
        expandedProject = expandedProject === project ? null : project;
    }

    let showModal = false;

    function toggleModal() {
        showModal = !showModal;
    }
</script>
  
<div class="relative w-full min-h-screen bg-gray-900 text-white font-['Jersey10'] flex flex-col">
    <h1 class="font-['Jersey25'] text-8xl text-[#FF4D00] mb-20 text-center w-full">Projects</h1>
  
    <div class="w-full flex flex-wrap gap-8">
        <div class="ml-20">
            <SmartDesk {expandedProject} isExpanded={expandedProject === 'SmartDesk'} on:toggleExpand={() => toggleExpand('SmartDesk')} />
        </div>
        <div class="ml-20">
            <Test {expandedProject} isExpanded={expandedProject === 'Test'} on:toggleExpand={() => toggleExpand('Test')} />
        </div>
        <!-- Ajoutez d'autres composants de projet ici -->
    </div>

    {#if expandedProject === 'SmartDesk'}
        <div class="expanded-content-wrapper flex justify-center relative">
            <div class="expanded-content col-span-3 p-4 w-full flex justify-center">
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

    {#if expandedProject === 'Test'}
        <div class="expanded-content-wrapper flex justify-center relative">
            <div class="expanded-content col-span-3 p-4 w-full flex justify-center">
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
</div>

{#if showModal}
    <div class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="modal-content bg-gray-800 text-white p-6 rounded-lg w-3/4 max-w-2xl">
            <h2 class="text-3xl mb-4">Informations Complémentaires</h2>
            <p>Contenu supplémentaire...</p>
            <button class="close-button bg-[#FF4D00] text-white px-4 py-2 rounded-none mt-4" on:click={toggleModal}>Fermer</button>
        </div>
    </div>
{/if}

<style>
    .expanded-content-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .expanded-content {
        animation: slideDown 0.5s ease-out forwards;
        margin-top: 0; /* Remove gap */
        display: flex;
        justify-content: center; /* Center horizontally */
    }

    .details-button {
        margin-top: 16px; /* Add some space above the button */
    }

    @keyframes slideDown {
        from {
            max-height: 0;
            opacity: 0;
        }
        to {
            max-height: 1000px; /* Adjust as needed */
            opacity: 1;
        }
    }
</style>