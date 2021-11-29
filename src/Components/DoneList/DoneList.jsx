import ModuleList from '../ModuleList/ModuleList'
import s from './DoneList.module.css'

export default function DoneList({name, mods}) {
    
    
    return (
       <div>
            <h3>{name}</h3>            
            <div >
            <ModuleList mods={ mods}/>
            </div>

        </div>
    )
}