import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import ConsultancyRead from 'templates/ConsultancyRead'
import Loading from 'components/Loading/Loding';

export default function Consultoria() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  const { uuid } = router.query
  return <>
  {
    loading ?
      (
        <Loading />
      ) :
      (
        <ConsultancyRead uuid={uuid as string} />
      )
  }
  </>
}
