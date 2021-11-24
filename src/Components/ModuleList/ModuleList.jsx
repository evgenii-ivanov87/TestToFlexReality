
import s from './ModuleList.module.css'

export default function ModuleList(props) {
    const moduleTettels = props.mods
   console.log(moduleTettels)

    return (
        // <h3>Hello</h3>
        <ul className={s.moduleWrapper}>
            {moduleTettels.map((moduleTettel,i) =>
                
                     <li className={s.moduleItem} key={i}>{ moduleTettel.tittel}</li>
                ) 
        }</ul>
       
    //    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, blanditiis.</p>
    )
}