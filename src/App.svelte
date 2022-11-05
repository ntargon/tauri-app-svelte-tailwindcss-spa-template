<script lang="ts">
  import Greet from './lib/Greet.svelte'
  import "./app.css"
  import Router from 'svelte-spa-router'
  import { routes } from './router'
  import { push } from 'svelte-spa-router';
</script>

<main class="container">
  <h1>Welcome to Tauri!</h1>

  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>

  <div class="row">
    <Greet />
  </div>

  <div class="bg-red-500">
    bg-red-500
  </div>

  <Router {routes} />

  <div>
    <button on:click={() => push('/')}>Page0</button>
    <button on:click={() => push('/page1')}>Page1</button>
  </div>

</main>

<style>
</style>