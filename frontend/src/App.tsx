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
                return <p className='text-left cursor-pointer' onClick={_ => setMode(global.MODE_HOME)}>back</p>
        }
    }

    function displayContent() {
        switch (mode) {
            case global.MODE_HOME:
                return <div className="h-56 grid grid-cols-3 gap-4 content-start w-full">
                    {projects.map((item) => {
                        return <button className='border border-2 rounded-md cursor-pointer'>
                            <p className='font-normal' onClick={_ => navigate("/" + item.id)}>{item.name}</p>
                        </button>
                    })}
                </div>
            case global.MODE_CREATE_NEW:
                return <Create />
        }
    }

    return (
        <div id="App" className='container-fluid font-roboto'>
            <div className='row'>
                {
                    <>
                        {
                            mode == global.MODE_HOME && 
                                <div className='col-12 mt-2'>
                                    <h1 className='display-1 float-left'>IXFREDOCS</h1>
                                </div>
                        }
                        <div className='col-12 my-2 w-100 align-left'>
                            {displayButton()}
                        </div>
                        {displayContent()}
                    </>
                }
            </div>
        </div>
    )
}

export default App
