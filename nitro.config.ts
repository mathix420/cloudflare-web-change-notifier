//https://nitro.unjs.io/config
export default defineNitroConfig({
  compatibilityDate: "2025-03-05",
  srcDir: "src",

  // https://nitro.build/deploy/providers/cloudflare#cloudflare-module-workers
  preset: "cloudflare_module",

  // https://nitro.build/guide/tasks#scheduled-tasks
  experimental: {
    tasks: true,
  },

  $production: {
    storage: { data: { driver: 'cloudflare-kv-binding', binding: 'KV' } },
  },

  // WARN: Make sure to have the same values in wrangler config
  scheduledTasks: {
    // Run `beeper` task every hours
    "0 * * * *": ["beeper"],
    // Run `crous` task every week day at 11:45 UTC+1
    "45 10 * * 1-5": ["crous"],
  },
});
