import { build } from 'vite';

async function bootstrap() {
  await build({ configFile: 'packages/main/vite.config.ts' });
  await build({ configFile: 'packages/renderer/vite.config.ts' });
}

bootstrap().catch((ex) => console.error(ex));
