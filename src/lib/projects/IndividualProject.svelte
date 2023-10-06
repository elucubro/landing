<script lang="ts">
    let img_src: string; 
    export let link_href: string;
    let github_link: string;
    export let title: string;  
    export let desc: string; 
    export let logo_array: ComponentType[]; 
    
	import type { ComponentType } from 'svelte';
</script>
<a class="bg-white group hover:bg-slate-200 h-full flex flex-col justify-center content-center text-3xl font-poppins w-full rounded-3xl p-5 text-black" href={link_href}>
    <h1 class="text-center group-hover:mt-auto text-3xl">{title}</h1>
    <h1 class="hidden text-center text-xl group-hover:block">{desc}</h1>
    <div class="hidden group-hover:flex justify-around mt-auto h-10">
    {#each logo_array as logos}
    <svelte:component this={logos}/> 
    {/each}</div>
</a>