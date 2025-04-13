<script>
    import { onMount } from 'svelte';

    let isOpen = true;
    let isScrolled = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function handleScroll() {
        isScrolled = window.scrollY > 0;
        if (isScrolled) {
            //isOpen = false;
        } else {
            isOpen = true;
        }
    }

    function scrollToSection(event) {
        event.preventDefault(); // Empêche la navigation par défaut
        const targetId = event.currentTarget.getAttribute('href').substring(1); // Récupère l'ID de la section
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Défilement doux
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header class="fixed top-0 right-0 w-full text-[#FF4D00] flex justify-end items-center p-4  z-50 font-['Jersey10'] text-2xl">

    <!-- Logo GitHub -->
    <a href="https://github.com/Kurama73"
       target="_blank"
       rel="noopener noreferrer"
       class="ml-10 hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150 absolute left-0"
       aria-label="GitHub Profile">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="currentColor"
             class="w-8 h-8">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    </a>

    <div class="relative flex items-center">

        <nav class="absolute right-10 flex items-center gap-4">
            <a href="#accueil"
               on:click={scrollToSection}
               class={`p-4 hover:text-[#FF4D00] hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150 ease-in-out whitespace-nowrap
                    ${isOpen ? 'translate-x-0 opacity-100 delay-[150ms]' : 'translate-x-[75px] opacity-0 delay-[100ms]'}`}>
                Home
            </a>

            <a href="#projects"
               on:click={scrollToSection}
               class={`p-4 hover:text-[#FF4D00] hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150 ease-in-out whitespace-nowrap
                    ${isOpen ? 'translate-x-0 opacity-100 delay-[100ms]' : 'translate-x-[75px] opacity-0 delay-[75ms]'}`}>
                Projects
            </a>

            <a href="#skills"
               on:click={scrollToSection}
               class={`p-4 hover:text-[#FF4D00] hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150 ease-in-out whitespace-nowrap
                    ${isOpen ? 'translate-x-0 opacity-100 delay-[50ms]' : 'translate-x-[75px] opacity-0 delay-[50ms]'}`}>
                Skills
            </a>

            <a href="#contact"
               on:click={scrollToSection}
               class={`p-4 hover:text-[#FF4D00] hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150 ease-in-out whitespace-nowrap
                    ${isOpen ? 'translate-x-0 opacity-100 delay-0' : 'translate-x-[75px] opacity-0 delay-[25ms]'}`}>
                Contact
            </a>
        </nav>

        <button class="cursor-pointer z-20 text-[#FF4D00] hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150"
                on:click={toggleMenu}
                aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

    </div>
</header>