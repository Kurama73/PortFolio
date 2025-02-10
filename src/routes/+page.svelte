<script>
    import Header from './header.svelte';
    import Home from '$lib/components/Home.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Swap from '$lib/components/Swap.svelte';
</script>

<Header />

<main class="relative bg-gray-900 text-white">
    <section id="accueil" class="min-h-screen pt-5 justify-center items-center flex">
        <Home/>
    </section>

    <Swap />

    <section id="projets" class="min-h-screen justify-center items-center flex">
        <Projects/>
    </section>

    <Swap />

    <section id="competences" class="min-h-screen justify-center items-center flex">
        <Skills/>
    </section>

    <Swap />

    <section id="contact" class="min-h-screen justify-center items-center flex">
        <Contact/>
    </section>
</main>