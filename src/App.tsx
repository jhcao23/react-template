import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Calendar from './Calendar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-white-800">
      <div className="flex space-x-4">
        <a href="https://react.dev" target="_blank" className="hover:text-blue-500">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="mt-4 text-4xl font-bold">Vite + React</h1>
      <div className="mt-4 text-2xl">
        <button onClick={() => setCount((count) => count + 1)} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-400">
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-2xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
      <Calendar />
    </div>
  )
}

export default App