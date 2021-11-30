import { useState,  useEffect } from 'react'
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
  const [currentInProgres, setCurrentInProgres] = useState()
  const [currentSubmitted, setCurrentSubmitted] = useState()
  const [currentCreate, setCurrentCreate] = useState()
  const [currentDone, setCurrentDone] = useState()

 
  const tudos = dbs.tudos

  useEffect(() =>{
  const itemInProgres = tudos.map(tudo => setCurrentInProgres(tudo.InProgres))
  const itemSubmitted = tudos.map(tudo => setCurrentSubmitted(tudo.Submitted))
  const itemCreate = tudos.map(tudo => setCurrentCreate(tudo.Create))
  const itemDone = tudos.map(tudo => setCurrentDone(tudo.Done))})
  
 console.log(currentInProgres)
//  console.log(currentSubmitted)
//  console.log(currentCreate)
//  console.log(currentDone)



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
