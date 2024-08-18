module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-eu-central-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 6543),  // Usar el puerto mostrado en la imagen
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.lceyrerackvogtlmykbm'),
      password: env('DATABASE_PASSWORD', 'J!fdvD.B@F5KuEt'), // Reemplaza con tu contraseña real
      ssl: {
        rejectUnauthorized: false,  // Desactiva la verificación del certificado si usas SSL autofirmado
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    acquireConnectionTimeout: 10000,
  },
});
