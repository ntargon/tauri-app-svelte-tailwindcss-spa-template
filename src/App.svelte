<script lang="ts">
  import Greet from './lib/Greet.svelte'
  import "./app.css"
  import Router from 'svelte-spa-router'
  import { routes } from './router'
  import { push } from 'svelte-spa-router';
</script>

<main class="mx-5">
  <div>
    <button on:click={() => push('/')}>Zipcode Search</button>
    <button on:click={() => push('/page1')}>Page1</button>
  </div>

  <div>
    <Router {routes} />
  </div>
</main>

<style>
</style>