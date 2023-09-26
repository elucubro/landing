<script>
    import { filtered } from './stores.js';
    import { counter, set } from '../../routes/bible/counterstore.js'
    import asv from "./asv.json"
	import { goto } from '$app/navigation';
    const visible = 20; 
    const keys = Object.keys(asv);
    $: visiblestore = $filtered.slice(0, visible);
    // @ts-ignore
    function onclick(item){
        console.log(item)
        let val = keys.indexOf(item)
        set(val)
        console.log('brak')
        goto('/bible')
    }
</script>

<ul class="grid grid-cols-5 w-full h-full items-center justify-center">
{#each visiblestore as item}
    <button on:click={() => onclick(item)}>
        <div class="grid text-center hover:bg-white hover:text-black text-white text-xl h-[70%] m-auto w-[100%] items-center justify-center"><li>{item}</li></div>
    </button>
{/each}
</ul>
