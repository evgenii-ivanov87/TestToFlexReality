
// import s from './ModuleList.module.css'

export default function ModuleList(props) {
    const moduleTettels = props.mods
  
    return (
      
        <ul >
            {moduleTettels.map((moduleTettel,i) =>
                
                     <li  key={i}>{ moduleTettel}</li>
                ) 
        }</ul>
       
    
    )
}