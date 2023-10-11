<script>
    import Nav from "$lib/nav/Nav.svelte";
    import RecentProjects from "$lib/projects/RecentProjects.svelte";
    import Pricing from "$lib/pricing/Pricing.svelte";
	import { goto } from "$app/navigation";

    // get current year
    let year = new Date().getFullYear();

    let visible = false; 
    function togglevisibility(){
        visible = !visible
    }
    
</script> 

<div class="w-screen max-w-full h-screen bg-background">
<div class="self-start w-screen max-w-full fixed top-0"><Nav/></div>
<div class="grid h-screen justify-center items-center">
<div class="rounded-3xl flex flex-col justify-center items-center self-center justify-self-center">
    <h1 class="text-white text-center text-6xl md:text-8xl font-poppins font-semibold">Hey! I'm <span class="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Tinotenda.</span></h1>
    <h2 class="text-white text-center md:text-2xl mt-5">freelance full-stack developer | crafting digital experiences</h2>
    <button class="w-80 h-20 rounded-3xl text-2xl text-white font-poppins border-primary border-solid border-4 mt-5">Contact Me!</button>
</div>
</div>
</div>

<div class="w-full max-w-full min-w-full h-screen bg-background | grid justify-center items-center grid-cols-1 grid-rows-1">

<div data-aos="fade-in" class="w-screen max-w-full h-screen bg-transparent | flex flex-col justify-center items-center">
    <h1 class="text-white text-4xl text-center font-poppins">Latest Projects:</h1>
    <RecentProjects/>
</div>


</div>

<div data-aos="fade-in" class="w-screen max-w-full h-screen bg-transparent | justify-center items-center | hidden lg:grid lg:grid-cols-3 lg:grid-rows-2">
 
    <div class="grid grid-rows-2 grid-cols-1 h-full justify-center items-center row-span-2">
    <h1 class="text-white text-7xl text-center font-poppins">I Don't Do Templates.</h1>
    <h1 class="text-white text-4xl text-center font-poppins">(An <span class="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">EPIC</span> design philosophy)</h1>
    </div>
    <div class="text-white text-center text-4xl flex p-10 grid-rows-2 grid-cols-2 h-full items-center justify-center row-span-2 col-span-2">   
        <p>
            "I don't do templates" is not just a motto for me; it's a guiding principle that fuels my passion for web development. I approach each project as a unique opportunity to blend artistry and functionality, ensuring that the final product not only looks stunning but also performs flawlessly. By meticulously crafting every aspect of a website, from the user interface to the user experience, I strive to create digital experiences that captivate, engage, and leave a lasting impact on visitors. Whether it's a personal blog, a corporate website, or an e-commerce platform, I believe that exceptional design should be at the heart of every online endeavor. So, if you're ready to take your online presence to the next level and embrace a web development journey where innovation knows no bounds, let's collaborate and bring your vision to life. Together, we can defy the ordinary and embark on a quest for epic digital greatness.
        </p>
    </div>
    
    
</div>

<div class="w-screen max-w-full h-screen bg-transparent | flex flex-col justify-center items-center">
    <h1 class="text-white text-4xl text-center font-poppins">Pricing:</h1>
    <Pricing/>
</div>
<div class="md:h-20 bg-background text-white grid justify-center content-center text-lg">
    © 2020-{year} Tinotenda Mhandire | tino@tinotenda.dev, hosted with tinotendaSMTP (and love)
</div>