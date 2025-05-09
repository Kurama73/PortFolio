<script>
	import { onMount } from 'svelte';
	import Header from './header.svelte';
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Passions from '$lib/components/Passions.svelte';
	import Experiences from '$lib/components/Experiences.svelte';
	import { locale } from '$lib/i18n';
	import { base } from '$app/paths';

	$: if (!$locale) {
		locale.set('fr');
	}

	let showScrollTop = false;
	let isExpanded = true;
	let isMobile = false;

	onMount(() => {
		const updateMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		const handleScroll = () => {
			showScrollTop = window.scrollY > 15;
			isExpanded = window.scrollY < 15;
		};

		updateMobile();
		window.addEventListener('resize', updateMobile);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('resize', updateMobile);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<Header />

<main class="home relative text-white font-['Jersey25'] z-10">
	<section id="accueil" class="min-h-screen pt-5 justify-center items-center flex">
		<Home />
	</section>

	<section id="projects" class="Projects min-h-screen justify-center items-center flex">
		<Projects />
	</section>

	<section id="skills" class="Skills min-h-screen justify-center items-center flex">
		<Skills />
	</section>

	<section id="experiences" class="experiences min-h-screen justify-center items-center flex">
		<Experiences />
	</section>

	<section id="passions" class="passions min-h-screen justify-center items-center flex">
		<Passions />
	</section>

	<section id="contact" class="Contact min-h-screen justify-center items-center flex">
		<Contact />
	</section>
</main>

{#if !isMobile}
	<div id="floating" class="fixed bottom-8 right-8 flex flex-col gap-4 z-50 pointer-events-auto">
		{#if showScrollTop}
			<div class="order-2">
				<button
					on:click={scrollToTop}
					aria-label="Scroll to top"
					class="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 animate-fadeIn hover:drop-shadow-lg cursor-pointer"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
					</svg>
				</button>
			</div>
		{/if}

		<div class="relative group" class:order-1={isExpanded}>
			<a href="{base}/resume.pdf"
				 download
				 aria-label="Download my resume"
				 class="flex items-center justify-center transition-all duration-500 ease-in-out {isExpanded ? 'w-auto px-8' : 'w-14'} h-14 bg-[#FF4D00] rounded-full hover:brightness-110 hover:drop-shadow-[0_0_8px_#FF4D00]">
					<span class="flex items-center gap-2 overflow-hidden transition-all text-3xl duration-500 {isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}">
						Get my resume
					</span>
				<svg class="w-6 h-6 {isExpanded ? 'ml-2' : ''} transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
				</svg>
			</a>
		</div>
	</div>
{/if}

<style>
    #floating button, #floating a {
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
