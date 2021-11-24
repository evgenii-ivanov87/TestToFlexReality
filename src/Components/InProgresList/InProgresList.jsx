import ModuleList from '../ModuleList/ModuleList'
import s from './InProgresList.module.css'


export default function InProgresList(props) {
    const values = props.props.props.module
    // console.log(values)
    // const  filterToStatus = values.filter(value=>value.status ==="In progres")
  
    return (
        <div>
            <h2>Hello</h2>
            <div className={s.InProgresWrapper}>
            {/* <ModuleList mods={ filterToStatus}/> */}
            </div>
        </div>
    )
        
}