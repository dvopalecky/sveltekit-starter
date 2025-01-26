import PocketBase from 'pocketbase';

const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_REMOTE_URL || 
                      import.meta.env.VITE_POCKETBASE_URL || 
                      'http://127.0.0.1:8090';

export const pb = new PocketBase(pocketbaseUrl);
