<script>
  import { user } from "$lib/stores";
</script>

<div class="h-full w-full flex items-center justify-center p-4">
  <div class="text-center max-w-full">
    {#if $user}
      <h1 class="text-4xl md:text-5xl font-bold mb-2 break-words">
        Welcome,
        <br />
        <span class="text-3xl md:text-4xl">{$user.email}</span>
      </h1>
      <p class="text-lg">You are logged in</p>
    {:else}
      <h1 class="text-5xl font-bold mb-4">Welcome</h1>
    {/if}
  </div>
</div>
