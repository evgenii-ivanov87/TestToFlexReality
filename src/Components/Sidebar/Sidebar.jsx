import InProgresList from '../InProgresList/InProgresList'
import SubmittedList from '../SubmittedList/SubmittedList'
import CreateList from '../CreateList/CreateList'
import DoneList from '../DoneList/DoneList'

export default function Sidebar(props) {
    const name = props.props.name
    const module = props.props.module
    
   

    return (
        <div  >
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