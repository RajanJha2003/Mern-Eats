
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<span>Home</span>} />
      <Route path='/user-profile' element={<span>Profile Page</span>} />
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default App