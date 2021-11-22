import ModuleList from '../ModuleList/ModuleList'
import s from './InProgresList.module.css'


export default function InProgresList({name, mods}) {
    const filterToStatus = mods.filter(mod=>mod.status ==="In progres")
  
    return (
        
        <div className={s.InProgresWrapper}>
            <h2>InProgresList</h2>
            <ModuleList mods={ filterToStatus}/>
        </div>
    )
}