<script>
	import { base } from '$app/paths';
	import { _ } from '$lib/i18n';

	let name = '';
	let company = '';
	let email = '';
	let object = '';
	let message = '';
	let toastMessage = '';
	let showToast = false;

	function handleClick(url) {
		window.location.href = url;
	}

	function showToastMessage(message) {
		toastMessage = message;
		showToast = true;
		setTimeout(() => (showToast = false), 3000);
	}

	async function handleSubmit() {
		const webhookUrl = "https://discord.com/api/webhooks/1359835658847260753/oexatn3wjHsZKcVSvaSEGHDlcicZa9gjJPXEU8W4YlcCiveVWU7mtpkrXs_9QMAdMXrJ";

		const payload = {
			content: null,
			embeds: [
				{
					color: 16753920,
					description: `**Nom**: ${name || "Non spécifié"}\n
					**Entreprise**: ${company || "Non spécifié"}\n
					**Email**: ${email || "Non spécifié"}\n
					**Objet**: ${object || "Non spécifié"}\n\n
					**Message**:\n${message || "Non spécifié"}`
				}
			]
		};

		try {
			const response = await fetch(webhookUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				showToastMessage($_('form.success'));
				// Réinitialiser le formulaire
				name = '';
				company = '';
				email = '';
				object = '';
				message = '';
			} else {
				showToastMessage($_('form.error'));
			}
		} catch (error) {
			console.error("Erreur :", error);
			showToastMessage($_('form.unknown_error'));
		}
	}
</script>

<div id="contact-page" class="relative w-full min-h-screen text-white mt-14 overflow-hidden">
	<h1 class="text-8xl text-orange-500 mb-20 text-center">{$_('contact_title')}</h1>

	<div class="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start text-orange-500 w-full gap-10 px-5 sm:px-10">

		<!-- Formulaire en haut sur mobile, liens en bas -->
		<div class="form flex justify-center items-center text-xl w-full">
			<form class="p-6 bg-gray-800 rounded-lg w-full max-w-2xl" on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label for="name" class="block font-normal text-gray-300">{$_('form.name')}</label>
					<input type="text" id="name" bind:value={name} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
				</div>
				<div class="mb-4">
					<label for="company" class="block font-normal text-gray-300">{$_('form.company')}</label>
					<input type="text" id="company" bind:value={company} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
				</div>
				<div class="mb-4">
					<label for="email" class="block font-normal text-gray-300">{$_('form.email')}*</label>
					<input type="email" id="email" bind:value={email} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="object" class="block font-normal text-gray-300">{$_('form.object')}*</label>
					<input type="text" id="object" bind:value={object} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="message" class="block font-normal text-gray-300">{$_('form.message')}*</label>
					<textarea id="message" bind:value={message} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" rows="4" required></textarea>
				</div>
				<button type="submit" class="w-full px-4 py-2 text-2xl bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700">{$_('form.submit')}</button>
			</form>
		</div>

		<!-- Liens en bas sur mobile -->
		<div class="infos flex flex-col gap-4 w-full md:w-2/3">
			<button type="button" class="discord flex items-center gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('https://discordapp.com/users/459738394264862721')} role="link">
				<img class="w-8 h-8 text-white" src="{base}/icones/discord-dark.svg" alt="Discord" />
				<span class="text-xl text-white">Discord</span>
			</button>
			<button type="button" class="phone flex items-center gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('tel:+33771740797')} role="link">
				<img class="w-8 h-8 text-white" src="{base}/icones/phone-dark.svg" alt="Phone" />
				<span class="text-xl text-white">(+33) 07 71 74 07 97</span>
			</button>
			<button type="button" class="linkedin flex items-center gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('https://www.linkedin.com/in/tom-frumy-78b154295/')} role="link">
				<img class="w-8 h-8 text-white" src="{base}/icones/linkedin-dark.svg" alt="LinkedIn" />
				<span class="text-xl text-white">LinkedIn Profile</span>
			</button>
			<button type="button" class="location flex items-center gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" role="link" on:click={() => handleClick('https://maps.app.goo.gl/8a9DQEE81pHZfHbR9')}>
				<img class="w-8 h-8 text-white" src="{base}/icones/location-dark.svg" alt="Location" />
				<span class="text-xl text-white">Auvergne-Rhone-Alpe - Savoie - France</span>
			</button>
		</div>
	</div>

	{#if showToast}
		<div class="toast fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
			{toastMessage}
		</div>
	{/if}
</div>

<style>
		h1 {
				margin-top: 2rem;
				margin-bottom: 2rem;
		}

    .toast {
        animation: fadeInOut 3s ease-in-out;
    }

		.infos {
				margin-top: 11rem;
				width: auto;
		}

    @keyframes fadeInOut {
        0%, 100% {
            opacity: 0;
        }
        10%, 90% {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        #contact-page {
            padding: 20px;
            overflow-x: hidden;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        .container {
            grid-template-columns: 1fr;
        }

        .infos,
        .form {
            width: 100%;
        }

        .infos button {
            width: 100%;
        }

        .location span {
            text-align: left;
            width: 100%;
        }

        .infos {
            margin-top: 2rem; /* Réduction de l'espace sur mobile */
        }
    }
</style>

