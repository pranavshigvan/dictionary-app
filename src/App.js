import { useState} from 'react';
import './App.css'
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Meaning from './components/Meaning';
import TitleBar from './components/TitleBar';
// #DBB1EF
function App() {
  const [data, setData] = useState(null)
  const [font, setFont] = useState("Helvetica")
  let fonts = ["Helvetica","Arial","Verdana","Tahoma","Trebuchet MS","Gill Sans","Times New Roman","Georgia","Palatino","Baskerville","Courier","Comic Sans MS"]
  
  const getData = (data)=>{
    if (data ===  null) {
      setData(null)
    }else {
      let newData = data[0]
      let word = newData.word
      let phonetic = newData.phonetic
      let meanings = newData.meanings
      let audio = ''
      for (let i = 0; i < newData.phonetics.length; i++) {
        if (newData.phonetics[i].audio) {
          audio = newData.phonetics[i].audio
          break;
        }
      }   
      setData({word,phonetic,audio,meanings})
    }
    
  }
  return (
    <div className="App" style={{fontFamily:font}}>
      <Header fonts={fonts} setFont={setFont} font={font}/>
      <Searchbar getData={getData}/>
      {data ? <div>
        <TitleBar data={data}/>
          {data.meanings.map(meaning=>{
            return <Meaning meaning={meaning} key={Math.random()}/>
          })}
      </div>:'loading...'}
    </div>
  );
}

export default App;
