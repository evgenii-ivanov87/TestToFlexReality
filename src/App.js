import CurseList from './Components/CurseList/CurseList'
import db from './db.json'



function App() {
  const tudos = db.tudos
  return (
  <>
      {tudos.map((tudo,i) => <CurseList key={i} props={tudo}/>)}
    </>
  );
}

export default App;
