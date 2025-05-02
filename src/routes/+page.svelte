<script>
	import { onMount } from 'svelte';
	import Header from './header.svelte';
	import Home from '$lib/components/Home.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { base } from '$app/paths';
	import Experiences from '$lib/components/Experiences.svelte';
	import { locale } from '$lib/i18n';

	$: if (!$locale) {
		locale.set('fr'); // Définir la langue par défaut
	}

	let showScrollTop = false;
	let isExpanded = true;

	onMount(() => {
		const handleScroll = () => {
			showScrollTop = window.scrollY > 15;
			isExpanded = window.scrollY < 15;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>




	<Header />

	<main class="home relative text-white font-['Jersey25']">
		<section id="accueil" class="min-h-screen pt-5 justify-center items-center flex">
			<Home/>
		</section>


		<section id="projects" class="Projects min-h-screen justify-center items-center flex">
			<Projects/>
		</section>


		<section id="skills" class="Skills min-h-screen justify-center items-center flex">
			<Skills/>
		</section>

		<section id="experiences" class="experiences min-h-screen justify-center items-center flex">
			<Experiences/>
		</section>

		<section id="contact" class="Contact min-h-screen justify-center items-center flex">
			<Contact/>
		</section>
	</main>




<!-- Floating buttons container -->
<div id="floating" class="fixed bottom-8 right-8 flex flex-col gap-4 z-50 pointer-events-auto">
	<!-- Bouton "Scroll to top" -->
	{#if showScrollTop}
		<div class="order-{!isExpanded ? '1' : '2'}">
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

	<!-- Bouton "Download CV" -->
	<div class="relative group order-{!isExpanded ? '2' : '1'}">
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


<style>
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
    }

    :global(main) {
        position: relative;
        z-index: 0;
        min-height: 100vh;
    }

    :global(main)::before {
        content: "";
        position: fixed;
        inset: 0;
        background: url('/backgrounds/bg-2.jpg') no-repeat center center / cover;
        filter: blur(10px);
        transform: scale(1.05);
        z-index: -1;
        height: 100dvh;
    }

    @media (max-width: 768px) {
			#floating {
					display: none;
      }
        :global(main)::before {
            height: 100vh;
        }
    }
</style>