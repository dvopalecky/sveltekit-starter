import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export function load() {
  if (!pb.authStore.isValid || !pb.authStore.model) {
    throw redirect(303, '/login');
  }
  return {
    user: pb.authStore.model,
  };
}
