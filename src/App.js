import react,{useState} from 'react'
import logo from './logo.svg';
import Button from './components/button/button'
function App() {
  const [counters, setCounters] = useState(1)
  return (
    <div className="App">
      <p className='text-red-600 text-lg'> {counters} Done</p>
      <Button  text={`click button`} className="hover:text-red-500"  onClick={()=>{setCounters(counters+1)}} disabled={true} isLoading={true} />
      </div>
      )
}

export default App;
