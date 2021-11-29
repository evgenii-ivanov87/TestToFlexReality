import uuid from 'react-uuid'
import s from './ModuleList.module.css'

export default function ModuleList(item) {
 
  
    return (
      
             <li className={s.list}  key={uuid()}>{ item.item}</li>  
    )
}