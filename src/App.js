import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/auth/signUp/SignUp';
import CreateAccount from './pages/auth/signUp/CreateAccount';
import InviteMembers from './pages/auth/signUp/InviteMembers';


function App() {
  return (
    <>
      <Routes>
        <Route path='sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='users/invitation/accept' element={<CreateAccount></CreateAccount>}></Route>
        <Route path='users/invitation/member' element={<InviteMembers></InviteMembers>}></Route>
      </Routes>
    </>
  );
}

export default App;
