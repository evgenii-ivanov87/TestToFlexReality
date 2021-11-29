import ModuleList from '../ModuleList/ModuleList'
import s from './CreateList.module.css'

export default function CreateList({name, mods}) {
    return( <div>
            <h3>{name}</h3>            
            <div >
            <ModuleList mods={ mods}/>
            </div>

        </div>)
       
    
}