import React , {useRef} from 'react'
import style from "./TitleBar.module.css"
import play from '../asset/images/play.png'
const TitleBar = ({data}) => {
    const audioRef = useRef()
  return (
    <div className={style.title}>
        <div className={style.word}>
          <h1>{data.word}</h1>
          <p>{data.phonetic}</p>
        </div>
        <div>
          <button onClick={()=>{audioRef.current.play()}}> <img src={play} alt="" /> </button>
          <audio ref={audioRef}  src={data.audio}></audio>
        </div> 
    </div>
  )
}

export default TitleBar