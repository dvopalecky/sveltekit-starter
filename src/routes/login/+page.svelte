<script>
  import { pb } from "$lib/pocketbase";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let error = "";

  async function login() {
    try {
      await pb.collection("users").authWithPassword(email, password);
      goto("/");
    } catch (err) {
      error = err.message;
    }
  }
</script>

<div class="h-full w-full flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <div class="bg-base-100 shadow-xl rounded-lg">
      <div class="card-body p-6">
        <h2 class="text-2xl font-bold mb-4">Login</h2>

        {#if error}
          <div class="alert alert-error mb-4">{error}</div>
        {/if}

        <form on:submit|preventDefault={login}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              bind:value={email}
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="form-control mt-4">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              bind:value={password}
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="form-control mt-6">
            <button class="btn btn-primary w-full">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
