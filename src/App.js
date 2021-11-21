import CurseList from './Components/CurseList/CurseList'
import db from './db.json'



function App() {

  return (
   
    <CurseList props={ db.tudos}/>
  );
}

export default App;
