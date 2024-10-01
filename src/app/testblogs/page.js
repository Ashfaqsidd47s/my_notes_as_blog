import { H1 } from '@/components/typography/H1'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Testblogs() {
  return (
    <div className='prose'>
        
        <H1>This is the test blog page</H1>
        <Link href="/testblogs/tree"><Button>Tree</Button></Link>
    </div>
  )
}
