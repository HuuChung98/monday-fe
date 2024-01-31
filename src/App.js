import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/auth/signUp/SignUp';
import CreateAccount from './pages/auth/signUp/CreateAccount';


function App() {
  return (
    <>
      <Routes>
        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='users/invitation/accept' element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
    </>
  );
}

export default App;
