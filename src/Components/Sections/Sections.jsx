import CurseList from '../CurseList/CurseList'
import s from './Sections.module.css'

export default function Sections(props) {
    const sectionName= props.tittel
    const values =props.props
    
    return (
        <div className={s.section}>
            <h2>{sectionName}</h2>
            {values.map(value=>value.filter(value==="InProgres"))}
            {/* <CurseList name={name} mods={mods }/> */}
            </div>
    )
}