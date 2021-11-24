import { useState } from 'react'
import CurseList from './Components/CurseList/CurseList'
import Sidebar from './Components/Sidebar/Sidebar'
import db from './db.json'
import s from './App.css'


function App() {
  const tudos = db.tudos
  const [currentCurse, setCurrentCurse] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const onCuresID = (values) => {
    setCurrentCurse(values)
    setIsOpen(true)
  }




  return (
    <>
      <div className={s.wrapper}>
        {tudos.map((tudo, i) => 
          <CurseList key={i} name={tudo.name} mods={tudo.module} onClick={onCuresID} />
         
        )}
        {isOpen && <Sidebar props={currentCurse} />}
      </div>

    </>
  );
}

export default App;
