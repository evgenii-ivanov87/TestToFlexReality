import ModuleList from '../ModuleList/ModuleList'
import s from './SubmittedList.module.css'



export default function SubmittedList({name, mods}) {
    
    return (
       <div>
            <h3>{name}</h3>            
            <div >
            <ModuleList mods={ mods}/>
            </div>

        </div>)
}