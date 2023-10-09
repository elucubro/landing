<script>
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
    import { onMount } from 'svelte';
</script>

<div
class="max-w-full flex flex-col lg:grid p-10 w-full h-full lg:grid-cols-3 lg:grid-rows-2 gap-5"
>
	<!-- Basic Tier -->
	<div
		data-aos="fade-up" class="flex flex-col items-center p-20 text-center justify-center col-span-1 rounded-3xl row-span-2 border-primary border-solid border-4 h-[95%] w-full"
	>
		<h1 class="text-white font-poppins text-5xl mb-5">Basic Tier</h1>
        <h2 class="text-white font-sans text-2xl mb-5">Starting at $700AUD</h2>
		<p class="text-white text-xl mb-5">
			This tier is for small businesses that don't need an extreme amount of functionality, but
			still want my signature professional design, and a completely customized experience that tells your story.
		</p>
		<ul class="text-white">
			<div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Custom design</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Included content writing</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Ecommerce functionality</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Search Engine Optimization</p>
			</div>
		</ul>
        <button class="mt-auto w-[50%] bg-primary grid justify-center text-2xl font-poppins rounded-2xl items-center h-[15%] text-white">Contact Me!</button>
	</div>
	<!-- Advanced Tier -->
	<div
    data-aos="fade-up" class="flex flex-col items-center p-20 text-center justify-center col-span-1 rounded-3xl row-span-2 border-primary border-solid border-4 h-[95%] w-full"
	>
		<h1 class="text-white font-poppins text-5xl mb-5">Advanced Tier</h1>
        <h2 class="text-white font-sans text-2xl mb-5">Starting at $1750AUD</h2>
		<p class="text-white text-xl mb-5">
			This tier is for small businesses or pre-established companies that need specific functionality <br> (This can be discussed, I'm almost sure your ideas are within my ability!)<br> and want a completely customized experience
		</p>
		<ul class="text-white">
			<div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Custom Advanced Feature</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>24/7 Software Support</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Unique Bespoke Design</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Complete Strategic Design</p>
			</div>
		</ul>
        <button class="mt-auto w-[50%] bg-primary grid justify-center text-2xl font-poppins rounded-2xl items-center h-[15%] text-white">Contact Me!</button>
	</div>
	<!-- Premium Tier -->
	<div
    data-aos="fade-up" class="flex flex-col items-center p-20 text-center justify-center col-span-1 rounded-3xl row-span-2 border-primary border-solid border-4 h-[95%] w-full" data-
	>
		<h1 class="text-white font-poppins text-5xl mb-5">Premium Tier</h1>
        <h2 class="text-white font-sans text-2xl mb-5">Starting at $4500AUD</h2>
		<p class="text-white text-xl mb-5">
			This tier is for startups or pre-established companies that need heavy-duty tech infrastructure, for a large amount of users <br> Expect a high quality development process, and a completely customized experience
		</p>
		<ul class="text-white">
			<div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>High Quality Consultation</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>24/7 Software Support</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Idea Validation</p>
			</div>
            <div class="flex items-center gap-3 text-xl font-sans w-full mb-5">
				<div class="h-9 text-primary"><FaCheck /></div>
				<p>Cost Minimization Services</p>
			</div>
		</ul>
        <button class="mt-auto w-[50%] bg-primary grid justify-center text-2xl font-poppins rounded-2xl items-center h-[15%] text-white">Contact Me!</button>
	</div>
</div>
