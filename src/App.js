import { useState } from 'react'
import InProgresList from './Components/InProgresList/InProgresList'
import CreateList from './Components/CreateList/CreateList'
import SubmittedList from './Components/SubmittedList/SubmittedList'
import DoneList from './Components/DoneList/DoneList'
import CurseList from './Components/CurseList/CurseList'
import Sidebar from './Components/Sidebar/Sidebar'
import dbs from './db2.json'
import s from './App.css'


function App() {

  const [currentCurse, setCurrentCurse] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const onCuresID = (values) => {
    setCurrentCurse(values)
    setIsOpen(true)

  }
  // console.log(dbs.tudos)
  // console.log(dbs.tudos[0].Create)
  // console.log(dbs.tudos[0].Done)
  // console.log(dbs.tudos[0].InProgres)
  // console.log(dbs.tudos[0])
  // console.log(dbs.tudos[0].Submitted)
  const tudos = dbs.tudos
 console.log(tudos)

  return (
    <>
      {tudos.map((tudo,i )=>
        <>
        <h3>In Progres</h3>
          <InProgresList key={i} name={tudo.name} mods={tudo.InProgres }/>
      </>
      )}


        {/* <div className={s.warapper}>
        <h3>In Progres</h3>
        <InProgresList props={dbs} />
         <h3>Create</h3>
          <CreateList props={dbs}/>
        <h3>Submitted</h3>
          <SubmittedList props={dbs}/>
        <h3>Done</h3>
          <DoneListprops={dbs} />
          </div> */}
      
     
      
          <h1>Hello</h1>








      
      {/* <div className={s.wrapper}>
        {tudos.map((tudo, i) => 
          <CurseList key={i} name={tudo.name} mods={tudo.module} onClick={onCuresID} />
         
        )}
        {isOpen && <Sidebar props={currentCurse} />}
      </div> */}

    </>
  );
}

export default App;
