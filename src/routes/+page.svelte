<script>
    import Nav from "$lib/nav/Nav.svelte";
    import RecentProjects from "$lib/projects/RecentProjects.svelte";
</script> 

<div class="w-screen max-w-full h-screen bg-background">
<div class="self-start w-screen max-w-full fixed top-0"><Nav/></div>
<div class="grid h-screen justify-center items-center">
<div class="rounded-3xl self-center justify-self-center">
    <h1 class="text-white text-center md:text-8xl font-poppins font-semibold">Hey! I'm <span class="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Tinotenda.</span></h1>
    <h2 class="text-white text-center md:text-2xl mt-5">freelance full-stack developer | crafting digital experiences</h2>
</div>
</div>
</div>

<div class="w-full max-w-full min-w-full m-0 h-screen bg-background | grid justify-center items-center grid-cols-1 grid-rows-1">

<div class="w-screen max-w-full m-0 h-screen bg-transparent | flex flex-col justify-center items-center">
    <h1 class="text-white text-4xl text-center font-poppins">Latest Projects:</h1>
    <RecentProjects/>
</div>

</div>
<div class="md:h-20 bg-background text-white grid justify-center content-center text-lg">
    © 2020-2023 Tinotenda Mhandire | tino@tinotenda.dev, hosted with tinotendaSMTP (and love)

</div>