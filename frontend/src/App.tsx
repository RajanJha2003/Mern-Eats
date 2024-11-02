
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout>
        <Homepage />
      </Layout>} />
      <Route path='/user-profile' element={<span>Profile Page</span>} />
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default App