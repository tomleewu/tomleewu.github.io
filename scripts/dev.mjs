import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const cwd = fileURLToPath(new URL('..', import.meta.url));
const build = spawnSync('pnpm', ['build'], { cwd, stdio: 'inherit' });
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const children = [];
let stopping = false;

function stop(code) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) child.kill('SIGTERM');
}

process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));

for (const [command, args] of [
  ['tailwindcss', ['-i', 'main.css', '-o', 'static/dist.css', '--minify', '--watch=always']],
  ['python3', ['-m', 'http.server', '8080', '--bind', '127.0.0.1']],
]) {
  const child = spawn(command, args, { cwd, stdio: 'inherit' });
  children.push(child);
  child.once('error', (error) => {
    console.error(error.message);
    stop(1);
  });
  child.once('exit', (code) => stop(code ?? 1));
}
