import React,{useState,useEffect,useRef} from 'react'
import style from "./Searchbar.module.css"
import search from "../asset/images/search.png"
const Searchbar = ({getData}) => {
  const [word, setWord] = useState("dictionary")
  const inputRef = useRef(word)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setWord(inputRef.current.value)
  }
  
  useEffect(()=>{
    const fetchData = async()=>{   
        getData(null)   
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let data = await response.json()
        console.log(data)
        getData(data)
    }
    fetchData(word)
  },[word])

  return (
    <form action=""  onSubmit={handleSubmit}>
        <input type="text" name="" id=""  ref={inputRef} placeholder='dictionary'/>
        <button type="submit"><img src={search} alt="" /></button>
    </form>
  )
}

export default Searchbar