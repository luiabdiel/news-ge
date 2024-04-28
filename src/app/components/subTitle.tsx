type SubTitleProps = {
  children: string
  className?: string;
}

export default function SubTitle({children, className}: SubTitleProps) {
  return (
    <span className={`text-gray-600 ${className}`}>{children}</span>
  )
}