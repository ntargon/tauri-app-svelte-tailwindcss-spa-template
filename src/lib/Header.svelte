<script lang="ts">
  import { push } from "svelte-spa-router";

    type Hoge = {
        location: string,
        title: string,
    };

    const hogeArray: Array<Hoge> = [
        {
            location: '/',
            title: 'Zipcode Search',
        },
        {
            location: '/path_api_page',
            title: 'path | Tauri Apps',
        },
    ]
</script>


<div class="p-1">
  {#each hogeArray as hoge}
    <button on:click={() => push(hoge.location)}>{hoge.title}</button>
  {/each}
</div>

<style>
    button {
        @apply border-b-2 p-1 rounded-sm hover:border-cyan-400 mx-1
    }
</style>