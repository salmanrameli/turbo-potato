import {useEffect, useState} from 'react';
// import logo from './assets/images/logo-universal.png';
import './App.css';
import {ListProjects, Dump, ListData} from "../wailsjs/go/main/App";
import { useNavigate } from 'react-router';
import { global } from './constants';
import Create from './project/create';

type Project = {
    id: string,
    name: string,
    path: string
}

function App() {
    let navigate = useNavigate();

    const [projects, setProjects] = useState<Project[]>([])
    const [mode, setMode] = useState<number>(global.MODE_HOME)

    // function appendToState(item: Project) {
    //     if (item && item !== undefined) {
    //         setProjects(prevProjects => [...prevProjects, item]);
    //     }
    // }

    // function getProjectData(id: string, name: string, path: string) {
    //     setProjectDetail({ID: id, name: name, path: path})
    // }

    function listProject() {
        ListProjects().then((results: Project[]) => {
            return (
                <>
                    {results.map((item) => {
                         if (item !== undefined && item.id != "") {
                            setProjects(prevProjects => [...prevProjects, item]);
                        }
                    })}
                </>
            )
        })
    }

    useEffect(() => {
        listProject()
    }, [])

    function displayButton() {
        switch (mode) {
            case global.MODE_HOME:
                return <>
                    <p className='text-sky-500 cursor-pointer text-left' onClick={_ => setMode(global.MODE_CREATE_NEW)}>New Project...</p>
                    <p className='text-sky-500 cursor-pointer text-left'>Open Project</p>
                </>
            case global.MODE_CREATE_NEW:
                return <h1 className='text-left cursor-pointer' onClick={_ => setMode(global.MODE_HOME)}>back</h1>
        }
    }

    function displayContent() {
        switch (mode) {
            case global.MODE_HOME:
                return <div className="h-56 grid grid-cols-3 gap-4 content-start w-full">
                    {projects.map((item) => {
                        return <button className='border border-2 border-rose-600 hover:bg-sky-500 rounded-md cursor-pointer'>
                            {/* <p className='font-normal hover:bg-sky-700' onClick={_ => getProjectData(item.ID, item.name, item.path)}>{item.name}</p> */}
                            <p className='font-normal hover:bg-sky-700' onClick={_ => navigate("/" + item.id)}>{item.name}</p>
                        </button>
                    })}
                </div>
            case global.MODE_CREATE_NEW:
                return <Create />
        }
    }

    return (
        <div id="App" className='container font-roboto'>
            {
                <div className='m-4'>
                    {
                        mode == global.MODE_HOME && 
                            <div className='mt-4'>
                                <h1 className='text-left text-3xl italic font-black cursor-default'>IXFREDOCS</h1>
                            </div>
                    }
                    <div className='my-4 w-100 align-left'>
                        {displayButton()}
                    </div>
                    {displayContent()}
                </div>
            }
            {/* <img src={logo} id="logo" alt="logo"/>
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button className="btn" onClick={greet}>Greet</button>
            </div> */}
        </div>
    )
}

export default App
