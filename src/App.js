
import Body from './components/Body'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import { addItem,removeItem } from './utils/authSlice'

function App() {

  
  return (
    <>
    <Body/>
    </>
  );
}

export default App;
