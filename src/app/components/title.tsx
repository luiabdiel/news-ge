import Link from "next/link";

type TitleProps = {
  children: string
  className?: string;
  url: string
}

export default function Title({children, className, url}: TitleProps) {
  return (
    <Link target="_blank" href={url} className={`text-gray-900 text-3xl font-bold ${className}`}>{children}</Link>
  )
}