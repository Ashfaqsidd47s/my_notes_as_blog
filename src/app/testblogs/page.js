import { H1 } from '@/components/typography/H1'
import Link from 'next/link'
import React from 'react'

export default function Testblogs() {
  return (
    <div>
        <H1>These are test blogs</H1>
        <Link href="/testblogs/tree"><Button>Tree</Button></Link>
    </div>
  )
}
