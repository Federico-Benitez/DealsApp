export default function calculateRate(value: string) {
  const rate = Math.ceil(Number(value) / 20);
  return rate;
}
