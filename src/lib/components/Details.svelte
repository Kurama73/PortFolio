<script>
	import { _ } from '$lib/i18n';
	export let showModal = false;
	export let toggleModal;
</script>

{#if showModal}
	<div
		class="modal fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center p-4"
		role="dialog"
		aria-modal="true"
		on:click={toggleModal}
	>
		<section
			class="modal-content bg-gray-900 text-white p-6 md:p-8 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
			role="document"
			on:click|stopPropagation
		>
			<h1 class="text-2xl md:text-3xl text-center text-orange-500 mb-6">{$_('skillsModal.title')}</h1>

			<ul class="list-disc pl-6 space-y-3">
				<li><strong>C1 :</strong> {$_('skillsModal.competencies.0.label')} - {$_('skillsModal.competencies.0.description')}</li>
				<li><strong>C2 :</strong> {$_('skillsModal.competencies.1.label')} - {$_('skillsModal.competencies.1.description')}</li>
				<li><strong>C3 :</strong> {$_('skillsModal.competencies.2.label')} - {$_('skillsModal.competencies.2.description')}</li>
				<li><strong>C4 :</strong> {$_('skillsModal.competencies.3.label')} - {$_('skillsModal.competencies.3.description')}</li>
				<li><strong>C5 :</strong> {$_('skillsModal.competencies.4.label')} - {$_('skillsModal.competencies.4.description')}</li>
				<li><strong>C6 :</strong> {$_('skillsModal.competencies.5.label')} - {$_('skillsModal.competencies.5.description')}</li>
			</ul>

			<div class="flex justify-center mt-8">
				<button
					class="close-button bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
					on:click={toggleModal}
				>
					{$_('skillsModal.close')}
				</button>
			</div>
		</section>
	</div>
{/if}

<style>
    .modal {
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }

    .modal-content {
        animation: slideIn 0.3s ease-out forwards;
    }


    @keyframes slideIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
