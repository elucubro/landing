<script>
    import { term } from "./stores";
    let val = '';

    $: term.set(val)
</script>
<div class="p-10">
<input bind:value={val} type="text" id="searchInput" class="p-2 text-xl" placeholder="input verse title">
</div>

<style>
    *:focus {
        outline: none;

    }
</style>