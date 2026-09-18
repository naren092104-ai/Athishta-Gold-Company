import { execFileSync } from 'node:child_process';

if (process.platform === 'linux') {
  const npmCommand = process.env.npm_execpath;
  const command = npmCommand ? process.execPath : 'npm';
  const args = npmCommand
    ? [npmCommand, 'install', '--no-save', '--ignore-scripts', '--include=optional', '@rolldown/binding-linux-x64-gnu@1.2.9']
    : ['install', '--no-save', '--ignore-scripts', '--include=optional', '@rolldown/binding-linux-x64-gnu@1.2.9'];

  execFileSync(command, args, { stdio: 'inherit' });
}
