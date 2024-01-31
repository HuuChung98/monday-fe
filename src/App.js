import { Routes, Route } from 'react-router-dom';
import CreateSecondPage from './pages/auth/signUp/CreateSecondPage';
import CreateFourthPage from './pages/auth/signUp/CreateFourthPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='users/invitation/accept/second' element={<CreateSecondPage></CreateSecondPage>}></Route>
        <Route path='users/invitation/accept/fourth' element={<CreateFourthPage></CreateFourthPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
