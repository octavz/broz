interface ContainerProps {
  readonly children: React.ReactNode
  readonly className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}