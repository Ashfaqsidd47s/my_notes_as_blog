export function P({children, className}) {
    return (
        <p className={`" m-3 mt-2 leading-7 [&:not(:first-child)]:mt-6" ${className}`}>
            {children}
        </p>
    )
  }
  