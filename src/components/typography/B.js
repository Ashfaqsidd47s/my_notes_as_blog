export function B({children}) {
    return (
        <span className="leading-7 font-bold [&:not(:first-child)]:mt-6">
            {children}
        </span>
    )
  }