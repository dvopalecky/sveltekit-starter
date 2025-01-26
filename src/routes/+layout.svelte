<script>
  import { onMount } from "svelte";
  import { pb } from "$lib/pocketbase";
  import { user } from "$lib/stores";
  import "../app.css";

  onMount(() => {
    if (pb.authStore.isValid) {
      user.set(pb.authStore.model);
    }

    pb.authStore.onChange((auth) => {
      user.set(pb.authStore.model);
    });
  });
</script>

<div class="h-screen flex flex-col overflow-hidden">
  <header class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">MyApp</a>
    </div>
    <div class="flex-none">
      {#if $user}
        <button class="btn btn-ghost" on:click={() => pb.authStore.clear()}
          >Logout</button
        >
      {:else}
        <a href="/login" class="btn btn-ghost">Login</a>
        <a href="/signup" class="btn btn-ghost">Sign Up</a>
      {/if}
    </div>
  </header>

  <main class="flex-1 overflow-auto">
    <slot />
  </main>
</div>
