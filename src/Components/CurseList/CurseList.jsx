import InProgresList from '../InProgresList/InProgresList'
import SubmittedList from '../SubmittedList/SubmittedList'
import CreateList from '../CreateList/CreateList'
import DoneList from   '../DoneList/DoneList'

export default function CurseList() {

    return (
        <>
            <InProgresList />
            <SubmittedList />
            <CreateList />
            <DoneList/>
        </>
    )
    
}