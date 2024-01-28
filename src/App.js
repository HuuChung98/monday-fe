import { Routes, Route } from 'react-router-dom';
import CreateSecondPage from './pages/auth/signUp/CreateSecondPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='users/invitation/accept/second' element={<CreateSecondPage></CreateSecondPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
