import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/auth/signUp/SignUp';


function App() {
  return (
    <>
      <Routes>
        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  );
}

export default App;
