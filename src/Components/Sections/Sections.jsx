import CurseList from '../CurseList/CurseList'
import s from './Sections.module.css'

export default function Sections(props) {
    const sectionName= props.tittel
    const values =props.props
  
//     const name = "InProgres"
//   const inProgresList =tudos.map(tudo=>tudo.name)
//   // .filter(key => key == vm.system_id);
    // const currentNameInProgres = values.map(value => console.log(value.InProgres))
    // const currentNameSubmitted = values.map(value => console.log(value.Submitted))
    // const currentNameCreate = values.map(value => console.log(value.Create))
    // const currentNameDone = values.map(value => console.log(value.Done))
    // console.dir(currentNameInProgres)
    // console.dir(currentNameSubmitted)
    // console.dir(currentNameCreate)
    // console.dir(currentNameDone)
    return (
        <div className={s.section}>
            <h2>{sectionName}</h2>
            
            {/* {values.map(value => <CurseList name={value.name} mods={value.InProgres}/>)}
            {values.map(value => <CurseList name={value.name} mods={value.Submitted} />)}
            {values.map(value => <CurseList name={value.name} mods={value.Create} />)}
            {values.map(value => <CurseList name={value.name} mods={value.Done}/>)} */}
            </div>
    )
}