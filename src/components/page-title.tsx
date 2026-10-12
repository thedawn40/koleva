import { useEffect } from "react";

export function PageTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = `${title} · Koleva`;
  }, [title]);
  return null;
}