import ModuleList from '../ModuleList/ModuleList'
import s from './DoneList.module.css'

export default function DoneList({name, mods}) {
    const filterToDone = mods.filter(mod=>mod.status ==="Done")
    
    return (
        <div className={s.doneWrapper}>
        <h2>DoneList</h2>
            <ModuleList mods={filterToDone }/>
        </div>
    )
}