<script lang='ts'>
  import { appDir, cacheDir, configDir, downloadDir, homeDir } from '@tauri-apps/api/path';
  import { onMount } from 'svelte';

  let tableItems = [];

  onMount(async () => {
    const appDirPath = await appDir();
    const configDirPath = await configDir();
    const cacheDirPath = await cacheDir();
    const downloadDirPath = await downloadDir();
    const homeDirPath = await homeDir();

    tableItems = [
      {
        name: 'appDir',
        path: appDirPath,
      },
      {
        name: 'configDir',
        path: configDirPath,
      },
      {
        name: 'cacheDir',
        path: cacheDirPath,
      },
      {
        name: 'downloadDir',
        path: downloadDirPath,
      },
      {
        name: 'homeDir',
        path: homeDirPath,
      },
    ]
  });
</script>

<h1>path | Tauri Apps</h1>

<a href="https://tauri.app/v1/api/js/path">path | Tauri Apps</a>

<table class="border">
  <thead>
    <tr>
      <th>変数</th>
      <th>実際のパス</th>
    </tr>
  </thead>
  <tbody>
    {#each tableItems as item}
      <tr>
        <td>{item.name}</td>
        <td>{item.path}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  th, td {
    @apply border p-1
  }
  th {
    @apply bg-gray-100
  }
</style>