type DescriptionProps = {
  children: string
  className?: string;
}

export default function Description({children, className}: DescriptionProps) {
  return (
    <p className={`text-gray-900 ${className}`}>{children}</p>
  )
}