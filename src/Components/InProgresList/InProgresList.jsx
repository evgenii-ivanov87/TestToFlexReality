import ModuleList from '../ModuleList/ModuleList'
import uuid from 'react-uuid'
import s from './InProgresList.module.css'


export default function InProgresList(props) {
    const values = props
    
   const handleClick = value => props.onClick(value)
    
    return (
        <div className={s.cardWrapper} onClick={e=>handleClick(values.mods)} >            
            <h3 key={uuid()}>{ values.name}</h3>
            {values.mods.map(val => <ModuleList key={uuid()} item={val} />)}
       
           
     </div>       
    )
        
}