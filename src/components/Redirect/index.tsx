import { useRouter } from 'next/router'
import { useEffect } from 'react'

type RedirectProps = {
  to: string
}

const Redirect = ({ to }: RedirectProps) => {
  const router = useRouter()

  useEffect(() => {
    router.push(to)
  }, [to, router])

  return null
}

export default Redirect
