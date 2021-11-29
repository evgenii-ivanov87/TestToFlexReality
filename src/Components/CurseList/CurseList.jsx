import InProgresList from '../InProgresList/InProgresList'
import uuid from 'react-uuid'
import s from './CurseList.module.css'

export default function CurseList(props) {
   const tudos = props.props
   
    const handleClick=value => props.onClick(value)
  
    return (
        
        <div className={s.wrapper}>
            <div key={uuid()} className={s.wapperList}  >
                <>
                <h2 key={uuid()}> In Progres </h2>
                    {tudos.map(tudo => <InProgresList key={uuid()} name={tudo.name} mods={tudo.InProgres} onClick={handleClick} />)}
                </>
            </div>

              {/* <div key={uuid()} className={s.wapperList} >
                <>
                <h2 key={uuid()}> Submitted</h2>
                {tudos.map(tudo => <InProgresList  key={uuid()} name={tudo.name} mods={tudo.Submitted} onClick={handleClick}  />)}
                </>
            </div>

              <div key={uuid()} className={s.wapperList} >
                <>
                <h2 key={uuid()}> Create </h2>
                {tudos.map(tudo => <InProgresList  key={uuid()} name={tudo.name} mods={tudo.Create} onClick={handleClick}  />)}
                </>
            </div>

              <div key={uuid()}  className={s.wapperList} >
                <>
                <h2 key={uuid()}> Done </h2>
                {tudos.map(tudo => <InProgresList key={uuid()} name={tudo.name} mods={tudo.Done} onClick={e=>handleClick}  />)}
                </>
            </div> */}
            
           
        </div>
    )
    
}

