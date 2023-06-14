import React from 'react'
import style from "./Meanings.module.css"
const Meaning = ({meaning}) => {
  return (
    <div className={style.meanings}>
        <h3>{meaning.partOfSpeech}</h3>
        <ul>
          {meaning.definitions.map(item=>{
            return <li key={Math.random()}>
                <p>{item.definition}</p>
              {item.example&& <i>{`"${item.example}"`}</i>}
            </li>
          })}
        </ul>
        {/* {console.log(meaning.antonyms !== [])} */}
        {/* {meaning.antonyms === [] ? <h4>Antonyms:<span>{meaning.antonyms.map(word=>`${word}, `)}</span></h4>:''}
        {meaning.synonyms === [] ? <h4>Synonyms:<span>{meaning.synonyms.map(word=>`${word}, `)}</span></h4>:''} */}
    </div>
  )
}

export default Meaning