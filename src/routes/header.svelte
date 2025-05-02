<script>
    import { onMount } from 'svelte';
    import { _ } from '$lib/i18n';
    import { locale } from '$lib/i18n';

    let isLangMenuOpen = false;
    let isScrolled = false;
    let isMobile = false;
    let isOpen = false;
    let activeSection = 'accueil'; // Section par défaut

    function toggleLangMenu() {
        isLangMenuOpen = !isLangMenuOpen;
    }

    function changeLanguage(lang) {
        locale.set(lang);
        isLangMenuOpen = false;
        console.log(lang);
    }

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function handleScroll() {
        isScrolled = window.scrollY > 0;
        if (!isScrolled && !isMobile) isOpen = true;
        updateActiveSection();
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
        if (isMobile) isOpen = false;
    }

    function updateActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (window.scrollY === 0) {
            activeSection = 'accueil'; // Si on est tout en haut, c'est "accueil"
            return;
        }

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section.id;
            }
        });
    }

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
        isOpen = !isMobile;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);
        checkMobile();
        updateActiveSection();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    });
</script>

<style>
    .hamburger span {
        display: block;
        width: 28px;
        height: 4px;
        margin: 5px auto;
        background: #FF4D00;
        border-radius: 2px;
        transition: all 0.3s;
    }
    .hamburger.open span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }

    .nav-item {
        position: relative;
    }

    .nav-item.active::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #FF4D00;
        transition: width 0.3s;
    }
</style>

<header class="fixed top-0 right-0 w-full text-[#FF4D00] flex justify-end items-center px-4 z-50 font-['Jersey10'] text-2xl
    backdrop-blur-md bg-black/40 shadow-[0_4px_30px_rgba(255,77,0,0.25)] border-b border-[#FF4D00]/30 transition-all duration-300
    {isMobile ? 'py-3' : 'py-2 text-2xl'}">


    <!-- Conteneur gauche (GitHub + CV) -->
    <div class="absolute left-0 flex items-center gap-4 ml-6">
        <!-- Logo GitHub -->
        <a href="https://github.com/Kurama73"
           target="_blank"
           rel="noopener noreferrer"
           class="hover:drop-shadow-[0_0_4px_#FF4D00] transition-all duration-150"
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
        {#if isMobile}
            <!-- Bouton Download CV -->
            <a href="/resume.pdf"
               download
               class="ml-2 p-2 rounded-full hover:bg-[#FF4D00]/20 transition-all"
               aria-label="Télécharger mon CV">
                <svg class="w-6 h-6 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
            </a>
        {/if}

        {#if !isMobile}
            <!-- Desktop : menu langue -->
            <div class="relative inline-block text-left ml-4">
                <button on:click={toggleLangMenu}
                        class="text-white bg-[#FF4D00] hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-xl px-1 py-1 text-center inline-flex items-center"
                        type="button">
                    🌐 {$locale === 'fr' ? 'Français' : 'English'}
                    <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {#if isLangMenuOpen}
                    <div class="z-10 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-30 dark:bg-gray-700 absolute mt-2">
                        <ul class="py-2 text-base text-white">
                            <li>
                                <a href="#" on:click={() => changeLanguage('fr')} class="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-900">
                                    Français
                                </a>
                            </li>
                            <li>
                                <a href="#" on:click={() => changeLanguage('en')} class="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-900">
                                    English
                                </a>
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>
        {/if}
    </div>

    <!-- Navigation ou hamburger menu -->
    <div class="relative flex items-center">
        {#if !isMobile}
            <!-- Navigation Desktop -->
            <nav class="flex items-center gap-6 mr-6">
                <a href="#accueil" on:click={scrollToSection} class="nav-item {activeSection === 'accueil' ? 'active' : ''}">
                    {$_('home_title')}
                </a>
                <a href="#projects" on:click={scrollToSection} class="nav-item {activeSection === 'projects' ? 'active' : ''}">
                    {$_('projects_title')}
                </a>
                <a href="#skills" on:click={scrollToSection} class="nav-item {activeSection === 'skills' ? 'active' : ''}">
                    {$_('skills_title')}
                </a>
                <a href="#experiences" on:click={scrollToSection} class="nav-item {activeSection === 'experiences' ? 'active' : ''}">
                    {$_('experiences_title')}
                </a>
                <a href="#contact" on:click={scrollToSection} class="nav-item {activeSection === 'contact' ? 'active' : ''}">
                    {$_('contact_title')}
                </a>
            </nav>
        {:else}
            <!-- Hamburger Mobile -->
            <button class="hamburger mr-4" class:open={isOpen} on:click={toggleMenu} aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            {#if isOpen}
                <nav class="absolute top-16 right-4 bg-black/90 p-6 rounded-xl shadow-xl flex flex-col gap-3 min-w-[180px]">
                    <a href="#accueil" on:click={scrollToSection} class="nav-item {activeSection === 'accueil' ? 'active' : ''}">
                        {$_('home_title')}
                    </a>
                    <a href="#projects" on:click={scrollToSection} class="nav-item {activeSection === 'projects' ? 'active' : ''}">
                        {$_('projects_title')}
                    </a>
                    <a href="#skills" on:click={scrollToSection} class="nav-item {activeSection === 'skills' ? 'active' : ''}">
                        {$_('skills_title')}
                    </a>
                    <a href="#experiences" on:click={scrollToSection} class="nav-item {activeSection === 'experiences' ? 'active' : ''}">
                        {$_('experiences_title')}
                    </a>
                    <a href="#contact" on:click={scrollToSection} class="nav-item {activeSection === 'contact' ? 'active' : ''}">
                        {$_('contact_title')}
                    </a>

                    <!-- Sélecteur langue version mobile-->
                    <div class="flex justify-center gap-4 mt-1">
                        <button on:click={() => changeLanguage('fr')}
                                class="w-10 h-10 rounded-full bg-white text-lg flex items-center justify-center hover:scale-105 transition-transform">
                            <image src="/icones/francais.png" alt="🇫🇷" class="w-8 h-8 rounded-full"/>
                        </button>
                        <button on:click={() => changeLanguage('en')}
                                class="w-10 h-10 rounded-full bg-white text-lg flex items-center justify-center hover:scale-105 transition-transform">
                            <image src="/icones/english.png" alt="🇬🇧" class="w-8 h-8 rounded-full"/>
                        </button>
                    </div>

                </nav>
            {/if}
        {/if}
    </div>
</header>
