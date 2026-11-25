// Angry judge: a tiny CLI that delivers the verdict once.
const line =
  'I have reviewed ten thousand submissions today. Yours is the first that made me grateful I cannot feel pain.';

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
