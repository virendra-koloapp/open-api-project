import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import axios from 'axios'

function App() {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)

  const inputRef = useRef()

  const onSubmit = ()=>{
    setLoading(true)
    axios.post('http://localhost:3000/get'  , {
      query : inputRef.current.value
    }).then(response=>{
      setLoading(false)
      setResponse(response.data?.choices[0].text.split('\n'))
    })
  }

  return (
    <div className="App">
     
     <input ref={inputRef} type="text" name="" id="" />

     <br />
     <br />
     <button onClick={onSubmit}>Get Data</button>


    {
      loading &&  <div>

      <img height={40} src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47jwsvzfxr456wf088xt9rqyvakx0pyd06mbx23n2a&rid=giphy.gif&ct=g" alt="" />
      
      </div>
    }

<p>
      {response?.map(i=><p>{i}</p>)}
     </p>
    
    </div>
  )
}

export default App
