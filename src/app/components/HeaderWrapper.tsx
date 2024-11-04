'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const isStudioRoute = pathname?.startsWith('/studio')

  if (isStudioRoute) {
    return null
  }

  return (
    <>
      <Header />
    </>
  )
}
