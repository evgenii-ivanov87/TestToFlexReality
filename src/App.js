import { useState } from 'react'
import Sections from './Components/Sections/Sections'
import dbs from './db2.json'
import s from './App.css'


function App() {

  const [currentCurse, setCurrentCurse] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const onCuresID = (values) => {
    setCurrentCurse(values)
    setIsOpen(true)

  }
 console.log(currentCurse)
  const tudos = dbs.tudos


  return (
    
    <div className={s.wrapper}>
      <Sections tittel={"InProgres"} props={tudos} />
      <Sections tittel={"Submitted" }props={tudos} />
      <Sections tittel={"Create" } props={tudos}/>
      <Sections tittel={"Done" } props={tudos}/>
    </div>
   
  );
}

export default App;
