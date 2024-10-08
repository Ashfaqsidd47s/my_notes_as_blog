import React from 'react'

export default function Code({children, className}) {
  return (
    <code className={`"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" ${className}`}>
      {children}
    </code>
  )
}
