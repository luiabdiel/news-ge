import React from "react";

type ContainerProps = {
  children: React.ReactNode
  className?: string;
}

export default function Container({children, className}:ContainerProps) {
  return (
    <div className={`flex flex-col p-8 m-auto max-w-3xl ${className}`}>
      {children}
    </div>
  )
}