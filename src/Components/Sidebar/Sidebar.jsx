import InProgresList from '../InProgresList/InProgresList'
import SubmittedList from '../SubmittedList/SubmittedList'
import CreateList from '../CreateList/CreateList'
import DoneList from '../DoneList/DoneList'
import s from './Sidebar.module.css'

export default function Sidebar(props) {
    const name = props.props.name
    const module = props.props.module
    
   console.log(props)

    return (
        <div className={s.sidebarWrapper} >
            <div>
                <h2>{name}</h2>
            </div>
            <div >
                <InProgresList mods={module} />
                <SubmittedList   mods={module}/>
                <CreateList  mods={module} />
                <DoneList mods={module} />
            </div>
                
                
            
                           
        
        </div>
    )
}