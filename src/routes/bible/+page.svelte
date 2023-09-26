
<script>
    // @ts-nocheck
        import Search from "$lib/search/Search.svelte";
        import ListItems from "$lib/search/ListItems.svelte";
        import asv from "$lib/search/asv.json"
        
        import { counter, increment, decrement } from "./counterstore";
        const keys = Object.keys(asv);
        const values = Object.values(asv);
        let title = keys[$counter];
        let content = values[$counter]; 
        console.log($counter)
        function updateText() {
        title = keys[$counter];
        content = values[$counter];
        } 
        
        $: {
        ;
        }
        function incrementCount() {
            increment()
            updateText()
        }
        function decrementCount() {
            decrement()
            updateText()
        }

        function onkey(e) {
            if (e.keyCode == 37) {decrementCount()}
            else if (e.keyCode == 39) {incrementCount()}
        }
        
        


        
</script>
<div class="flex flex-col content-center h-screen justify-between">   
    <div class="flex justify-center ">
        <a href="/" class="self-center text-xl text-white text-center p-6">back</a>
        <h1 class="self-center text-6xl text-white text-center p-6">{title}</h1>
    <a href="/bible/verses" class="self-center text-xl text-white text-center p-6">search</a>
    </div>
    <h2 class="text-2xl text-white text-center">{content}</h2>
    <div class="flex justify-self-flex-end">
    <button class="text-2xl text-white bg-black transition hover:bg-white hover:text-black w-[50%]" on:click={decrementCount}>←</button>
    <button class="text-2xl text-white bg-black transition hover:bg-white hover:text-black w-[50%]" on:click={incrementCount}>→</button>
    </div>
</div>

<svelte:window on:keydown|preventDefault={onkey}/>