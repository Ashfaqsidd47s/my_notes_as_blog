export function P({children, className}) {
    return (
        <p className={`" mb-4 leading-7 [&:not(:first-child)]:mt-6" ${className}`}>
            {children}
        </p>
    )
  }
  