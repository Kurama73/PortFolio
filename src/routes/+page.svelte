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
	let homeOpacity = 1;
	let projectsOpacity = 0;
	let transitionStartPoint = 500;

	onMount(() => {
		const handleScroll = () => {
			showScrollTop = window.scrollY > 15;
			isExpanded = window.scrollY < 15;

			// Calculer l'opacité en fonction de la position de défilement
			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const homeSectionHeight = document.getElementById('accueil').offsetHeight;

			if (scrollPosition > transitionStartPoint && scrollPosition < homeSectionHeight - windowHeight + transitionStartPoint) {
				homeOpacity = 1 - ((scrollPosition - transitionStartPoint) / (homeSectionHeight - windowHeight));
				projectsOpacity = 1 - homeOpacity;
			} else if (scrollPosition >= homeSectionHeight - windowHeight + transitionStartPoint) {
				homeOpacity = 0;
				projectsOpacity = 1;
			} else {
				homeOpacity = 1;
				projectsOpacity = 0;
			}
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
	<div class="background-container">
		<div class="background-home" style="opacity: {homeOpacity};">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="">
			<div class="stars"></div>
			<div class="twinkling"></div>
			<div class="clouds"></div>
		</div>
		<div class="background-projects" style="opacity: {projectsOpacity};"></div>
	</div>

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

	<section id="contact" class="Contact min-h-screen justify-center items-center flex">
		<Contact />
	</section>
</main>

<!-- Floating buttons container -->
<div id="floating" class="fixed bottom-8 right-8 flex flex-col gap-4 z-50 pointer-events-auto">
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
    .background-container {
        position: fixed;
        top: -20px;
        left: -20px;
        bottom: -20px;
        right: -20px;
        overflow: hidden;
        background-color: black;
        filter: blur(10px);
        transform: scale(1.1);
    }

    .background-home,
    .background-projects {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        transition: opacity 0.5s ease-in-out;
    }

    .background-home {
        background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png');
        z-index: 1;
    }

    .background-projects {
        background-image: url('/backgrounds/bg-2.jpg');
        z-index: 0;
    }

    .stars, .twinkling, .clouds {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .stars {
        background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        z-index: 0;
    }

    .twinkling {
        background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
        background-size: 1000px 1000px;
        animation: move-background 70s linear infinite;
        z-index: 3;
    }

    .clouds {
        background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
        background-size: 1000px 1000px;
        animation: move-background 150s linear infinite;
        z-index: 4;
    }

    .twinkling, .clouds {
        width: 200%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        animation: move-background 70s linear infinite;
    }

    .twinkling {
        background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
        background-size: 1000px 1000px;
        z-index: 2;
    }

    .clouds {
        background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
        background-size: 1000px 1000px;
        z-index: 3;
        animation-duration: 150s;
    }

    img {
        height: 70vh;
        width: 70vh;
        position: absolute;
        z-index: 3;
        right: 20px;
    }

    @keyframes move-background {
        from {
            transform: translate3d(0, 0, 0);
        }
        to {
            transform: translate3d(-1000px, 0, 0);
        }
    }

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

    @media (max-width: 768px) {
        #floating {
            display: none;
        }
    }
</style>
