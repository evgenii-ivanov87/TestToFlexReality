import ModuleList from '../ModuleList/ModuleList'
import s from './SubmittedList.module.css'



export default function SubmittedList({name, mods}) {
    const filterToSubmitted = mods.filter(mod=>mod.status ==="Submitted")
    return (
        <div className={s.submittedWrapper}>
        <h2>SubmittedList</h2>
            <ModuleList mods={filterToSubmitted }/>
        </div>
    )
}