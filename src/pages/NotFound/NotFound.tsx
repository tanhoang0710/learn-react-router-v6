import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from not found'
      })
      // navigate(-1, {replace: }) để nhảy lại ngay trang trước đó
    }, 2000)
  }, [navigate])

  return <div>Not found</div>
}

export default NotFound
