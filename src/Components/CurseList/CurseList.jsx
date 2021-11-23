import InProgresList from '../InProgresList/InProgresList'
import SubmittedList from '../SubmittedList/SubmittedList'
import CreateList from '../CreateList/CreateList'
import DoneList from '../DoneList/DoneList'
import s from './CurseList.module.css'

export default function CurseList(props) {
    const name = props.props.name
    const module = props.props.module
   
    const handlerCurseID = values => {
        props.onClick(values.props)
        
    }

    return (
        <div className={s.curseContainer} onClick={e=>handlerCurseID(props)} >
            <div>
                <h2>{name}</h2>
            </div>
            <div className={s.curseWrapperList}>
                <InProgresList mods={module} />
                <SubmittedList   mods={module}/>
                <CreateList  mods={module} />
                <DoneList mods={module} />
            </div>                
                
        </div>
    )
    
}