<script>
  import { user } from "$lib/stores";
</script>

<div class="min-h-screen flex flex-col items-center justify-center">
  <div class="text-center">
    {#if $user}
      <h1 class="text-5xl font-bold mb-4">Welcome, {$user.email}!</h1>
      <p class="text-lg">You are logged in</p>
    {:else}
      <h1 class="text-5xl font-bold mb-4">Welcome</h1>
    {/if}
  </div>
</div>
