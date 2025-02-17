export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-secret-key'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'your-salt-key'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'your-salt-key'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  port: env.int('ADMIN_PORT', 4001),
  autoOpen: false,
  url: '/admin',
  serveAdminPanel: true,
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
  host: env('HOST', '0.0.0.0'),
});
