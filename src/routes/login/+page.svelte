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

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login</h2>

        {#if error}
          <div class="alert alert-error">{error}</div>
        {/if}

        <form on:submit|preventDefault={login}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              bind:value={email}
              class="input input-bordered"
              required
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              bind:value={password}
              class="input input-bordered"
              required
            />
          </div>

          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
