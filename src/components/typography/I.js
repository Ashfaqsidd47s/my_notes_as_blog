export function I({children}) {
    return (
        <span className="leading-7 italic [&:not(:first-child)]:mt-6">
            {children}
        </span>
    )
  }