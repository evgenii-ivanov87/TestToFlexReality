import  { useState } from 'react'
import CurseList from './Components/CurseList/CurseList'
import Sidebar from './Components/Sidebar/Sidebar'
import db from './db.json'


function App() {
  const tudos = db.tudos
  const[currentCurse,setCurrentCurse] = useState({})
  const onCuresID= (values) => setCurrentCurse(values)
 
  console.log(currentCurse)
  return (
  <>
      {tudos.map((tudo, i) => <CurseList key={i} props={tudo} onClick={onCuresID} />)}
      {currentCurse && <Sidebar props={this.currentCurse} />}
    </>
  );
}

export default App;
