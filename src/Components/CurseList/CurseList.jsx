import InProgresList from '../InProgresList/InProgresList'
import SubmittedList from '../SubmittedList/SubmittedList'
import CreateList from '../CreateList/CreateList'
import DoneList from '../DoneList/DoneList'
import s from './CurseList.module.css'

export default function CurseList({name,mods}) {
   
    console.log(name)
    console.log(mods)
    // const handlerCurseID = values => {
    //     props.onClick(values.props)
        
    // }

    return (
        
        <div  >
            <h3>{name}</h3>
            {/* {mods.filter()} */}
            {/* <div className={s.curseWrapperList}>
                <InProgresList props={props} />
                <SubmittedList   mods={props}/>
                <CreateList  mods={props} />
                <DoneList mods={props} />
            </div>                 */}
                
        </div>
    )
    
}

// className={s.curseContainer} onClick={e=>handlerCurseID(props)