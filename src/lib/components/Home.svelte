<script>
    import { onMount } from 'svelte';
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

<div class="relative w-full min-h-screen bg-gray-900 text-white font-['Jersey10']">
    <div class="min-h-screen px-20 flex items-center">
        <!-- Section principale (2/3) -->
        <section class="w-2/3 pr-16 flex flex-col items-center justify-center text-center translate-y-[-10%]">
            <div class="max-w-2xl space-y-6">
                <h1 class="tracking-wide font-['Jersey25'] text-8xl">
                    Tom Frumy
                </h1>
                <p class="text-5xl leading-relaxed">
                    Application Developer Student
                </p>
            </div>
        </section>

        <!-- Section About (1/3) -->
        <section class="w-1/3 pl-16 min-h-[400px] flex flex-col items-start justify-start translate-y-[-25%] mr-12">
            <div class="w-full space-y-6">
                <div class="w-full">
                    <h2 class="text-5xl mb-4">
                        About me
                    </h2>
                    <div class="w-100 h-[3px] bg-[#FF4D00]"></div>
                </div>
                <div class="max-w-md">
                    <p class=" text-white/90 leading-relaxed text-2xl text-left">
                        Passionate about development and new technologies, I am currently pursuing my studies in application development. I am particularly interested in web development and mobile applications.
                    </p>
                </div>
            </div>
        </section>

        <div class="fixed bottom-8 right-8 flex flex-col gap-4">
            <!-- Scroll to top button -->
            {#if showScrollTop}
                <div class="order-{!isExpanded ? '1' : '2'}">
                    <button 
                        on:click={scrollToTop}
                        aria-label="Scroll to top"
                        class="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 animate-fadeIn hover:drop-shadow-lg"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                        </svg>
                    </button>
                </div>
            {/if}





            <!-- Download CV Button -->
    <div class="relative group order-{!isExpanded ? '2' : '1'}">
        <a href="/resume.pdf" 
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
        </style>
    </div>
</div>