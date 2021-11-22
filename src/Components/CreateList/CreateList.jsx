import ModuleList from '../ModuleList/ModuleList'
import s from './CreateList.module.css'

export default function CreateList({name, mods}) {
    const filterToCreate = mods.filter(mod=>mod.status ==="Create")
    return (
         <div className={s.createWrapper}>
        <h2>CreateList</h2>
        <ModuleList mods={filterToCreate }/>
        </div>
    )
}