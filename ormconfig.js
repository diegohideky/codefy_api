module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [
    'dist/api/models/*.{ts,js}',
  ],
  migrations: [
    'src/database/migration/*.{ts,js}',
  ],
  cli: {
    entitiesDir: 'src/api/models',
    migrationsDir: 'src/database/migration',
  },
};
