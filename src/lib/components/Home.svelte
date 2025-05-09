<script>
    import { _ } from '$lib/i18n';
    import { onMount } from 'svelte';

    let isMobile = false;

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }

    onMount(() => {
        window.addEventListener('resize', checkMobile);
        checkMobile();

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    });
</script>

<div class="home relative w-full min-h-screentext-white font-['Jersey10']">
    <div class="flex flex-col md:flex-row min-h-screen px-6 md:px-24 pt-20 md:pt-0 transition-all duration-300">

        <!-- Main Section (Name + Status) -->
        <section class="main-section w-full md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 mb-5">
            <div class="space-y-4 max-w-3xl">
                <h1 class="tracking-wider font-['Jersey25'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in">
                    Tom Frumy
                </h1>
                <p class="text-2xl sm:text-3xl md:text-4xl text-white/90 animate-fade-in delay-200">
                    {$_('status')}
                </p>
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section w-full md:w-1/3 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 max-w-xl mx-auto">
            <div class="space-y-4 animate-fade-in delay-500">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold">
                    {$_('aboutme')}
                </h2>
                <div class="bar w-125 h-1 bg-[#FF4D00] mx-auto md:mx-0"></div>
                <p class="text-white/80 text-lg sm:text-xl leading-relaxed text-justify relative">
                <div class="bg-gray-600/30 rounded-lg p-4 inline-block">
                    <span class="text-white/80 text-lg sm:text-xl leading-relaxed">
                        {$_('aboutme_text')}
                    </span>
                </div>

            </div>

            {#if isMobile}
                <div class="cv-button-mobile mt-6 animate-fade-in delay-300">
                    <a href="/resume.pdf" target="_blank"
                       class="inline-block bg-[#FF4D00] hover:bg-[#e64300] text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg transition-transform transform hover:scale-105">
                        {$_(('cv'))}
                    </a>
                </div>
            {/if}

        </section>
    </div>
</div>

<style>
    @keyframes fade-in {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
        animation: fade-in 0.8s ease-out both;
    }

    .delay-200 {
        animation-delay: 0.2s;
    }

    .delay-300 {
        animation-delay: 0.3s;
    }

    .delay-500 {
        animation-delay: 0.5s;
    }

    @media (max-width: 700px) {
        .home {
            margin-top: 10rem;
        }
        .bar {
            width: 100%;
        }
        .about-section {
            margin-top: 0;
        }
    }
</style>
