<script lang="ts">
  import Greet from './lib/Greet.svelte';
  import Header from './lib/Header.svelte';
  import './app.css'
  import Router from 'svelte-spa-router';
  import { routes } from './router';
</script>

<main class="mx-5">
  <Header />

  <div>
    <Router {routes} />
  </div>
</main>

<style>
</style>