<script>
	let name = '';
	let company = '';
	let email = '';
	let object = '';
	let message = '';

	function handleSubmit() {
		console.log({ name, company, email, object, message });
	}

	function handleClick(url) {
		window.location.href = url;
	}
</script>

<div id="contact-page" class="relative w-full min-h-screen bg-gray-900 text-white">
	<h1 class="text-8xl text-orange-500 mb-20 text-center">Contact</h1>

	<div class="links container mx-auto grid grid-cols-2 justify-center items-center text-orange-500 h-full w-full pl-10">
		<div class="infos flex flex-col gap-4 items-left w-2/3">
			<button type="button" class="discord flex items-center gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('https://discordapp.com/users/459738394264862721')} role="link">
				<img class="w-8 h-8 text-white" src="/icones/discord-dark.svg" alt="Discord" />
				<span class="text-xl text-white">Discord</span>
			</button>
			<button type="button" class="phone flex items-center  gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('tel:+33771740797')} role="link">
				<img class="w-8 h-8 text-white" src="/icones/phone-dark.svg" alt="Phone" />
				<span class="text-xl text-white">(+33) 07 71 74 07 97</span>
			</button>
			<button type="button" class="linkedin flex items-center  gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" on:click={() => handleClick('https://www.linkedin.com/in/tom-frumy-78b154295/')} role="link">
				<img class="w-8 h-8 text-white" src="/icones/linkedin-dark.svg" alt="LinkedIn" />
				<span class="text-xl text-white">LinkedIn Profile</span>
			</button>
			<button type="button" class="location flex items-center  gap-5 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:border hover:border-orange-500" role="link" on:click={() => handleClick('https://maps.app.goo.gl/8a9DQEE81pHZfHbR9')}>
				<img class="w-8 h-8 text-white" src="/icones/location-dark.svg" alt="Location" />
				<span class="text-xl text-white">Auvergne-Rhone-Alpe - Savoie - France</span>
			</button>
		</div>

		<div class="form flex justify-center items-center text-xl">
			<form class="p-6 bg-gray-800 rounded-lg w-2xl" on:submit|preventDefault={handleSubmit}>
				<div class="mb-4">
					<label for="name" class="block  font-normal text-gray-300">Name</label>
					<input type="text" id="name" bind:value={name} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="company" class="block  font-normal text-gray-300">Company</label>
					<input type="text" id="company" bind:value={company} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="email" class="block  font-normal text-gray-300">Your email</label>
					<input type="email" id="email" bind:value={email} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="object" class="block  font-normal text-gray-300">Object</label>
					<input type="text" id="object" bind:value={object} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" required />
				</div>
				<div class="mb-4">
					<label for="message" class="block  font-normal text-gray-300">Message</label>
					<textarea id="message" bind:value={message} class="font-light mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500" rows="4" required></textarea>
				</div>
				<button type="submit" class="w-full px-4 py-2 text-2xl bg-orange-500  text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700">Send</button>
			</form>
		</div>
	</div>
</div>