<script>
	export let showModal = false;
	export let toggleModal;
</script>

{#if showModal}
	<div class="modal fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center" role="dialog" aria-modal="true" tabindex="0" on:click={toggleModal} on:keydown={(e) => e.key === 'Escape' && toggleModal()}>
		<section
			class="modal-content bg-gray-800 text-white p-6 rounded-lg w-3/4 max-w-2xl"
			role="document"
			tabindex="0"
			on:click|stopPropagation
			on:keydown={(e) => e.key === 'Escape' && toggleModal()}
		>

		<h1 class="text-3xl mb-4">Détails compétences</h1>

			<ul>
				<li>C1: bidule</li>
				<li>C1: bidule</li>
				<li>C1: bidule</li>
				<li>C1: bidule</li>
				<li>C1: bidule</li>

			</ul>

			<button class="close-button bg-[#FF4D00] text-white px-4 py-2 rounded-none mt-4 cursor-pointer " on:click={toggleModal}>Fermer</button>
		</section>
	</div>
{/if}

<style>
    .modal {
        z-index: 50;
        background-color: rgba(0, 0, 0, 0.5); /* Utilise une opacité pour voir le fond */
        backdrop-filter: blur(5px); /* Ajoute un effet de flou */
    }
    .modal-content {
        z-index: 60;
    }
</style>