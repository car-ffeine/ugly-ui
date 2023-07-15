import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from "./common/Box";
import Button from "./common/Button/Button.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button
                    backgroundColor="red"
                    textColor="white"
                    fontSize={18}
                    fontWeight="bold"
                    p={12}
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </Button>
                <Box backgroundColor={"red"} p={10} m={10}>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </Box>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
