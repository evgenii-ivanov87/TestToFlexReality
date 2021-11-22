
import s from './ModuleList.module.css'

export default function ModuleList(props) {
    const moduleTettels = props.mods
   

    return (
        <ul className={s.moduleWrapper}>
            {moduleTettels.map((moduleTettel,i) =>
                
                     <li className={s.moduleItem} key={i}>{ moduleTettel.tittel}</li>
                ) 
        }</ul>
       
    //    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, blanditiis.</p>
    )
}