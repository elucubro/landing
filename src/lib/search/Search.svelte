<script>
    import { term } from "./stores";
    let val = '';

    $: term.set(val)
</script>
<div class="p-10">
<input autofocus bind:value={val} type="text" id="searchInput" class="">
</div>

<style>
    *:focus {
        outline: none;

    }
</style>