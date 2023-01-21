<script lang="ts">
  import Header from './lib/Header.svelte';
  import './app.css'
  import Router from 'svelte-spa-router';
  import { routes } from './router';
  import { register, unregisterAll } from '@tauri-apps/api/globalShortcut';
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';

  onMount(async () => {
    await unregisterAll();
    await register('Shift+Space', async () => {
      console.log('shortcut');
      await appWindow.show();
      await appWindow.setFocus();
    });
  })

  /**
   * Escapeキーでウィンドウを隠す
   * @param e
   */
  const onKeyDown = async (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      await appWindow.hide();
    }
  }
</script>

<main class="mx-5">
  <Header />

  <div>
    <Router {routes} />
  </div>
</main>

<svelte:window on:keydown={onKeyDown} />

<style>
</style>