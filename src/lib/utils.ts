export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatRupiah(value: number): string {
  return `Rp${value.toLocaleString("id-ID", { maximumFractionDigits: 0 })}`;
}
