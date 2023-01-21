<script lang="ts">
  import { push, location } from "svelte-spa-router";
  import { routesWithTitle } from "../router"
</script>


<div class="p-1">
  {#each routesWithTitle as routeWithTitle}
    <button
      on:click={() => push(routeWithTitle.location)}
      class="{$location === routeWithTitle.location ? 'border-cyan-400' : ''}"
    >{routeWithTitle.title}</button>
  {/each}
</div>

<style>
    button {
        @apply border-b-2 p-1 rounded-sm hover:border-cyan-400 mx-1
    }
</style>