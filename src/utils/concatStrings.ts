export default function (...args: (string | undefined)[]): string {
  return args.filter((i) => i).join(' ');
}
