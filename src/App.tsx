import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { useEffect } from 'react'
import { useRoutes, useLocation, useSearchParams } from 'react-router-dom'

function App() {
  const location = useLocation()
  console.log('🚀 ~ file: App.tsx ~ line 11 ~ App ~ location', location)

  // Ko dùng thư viện
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log('🚀 ~ file: App.tsx ~ line 13 ~ App ~ searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])

  useEffect(() => {
    console.log('🚀 ~ file: App.tsx ~ line 13 ~ App ~ location', location)
  }, [location])
  // Dùng thư viện query-string

  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <div className='App'>
      <MainLayout>
        {/* Cách 1 */}
        {elements}

        {/* Cách 2 */}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} />

          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </MainLayout>
      {/* <Dashboard />
        <About />
        <Staff /> */}
    </div>
  )
}

export default App
