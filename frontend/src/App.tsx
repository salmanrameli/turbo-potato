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
                return (
                    <table className='table table-sm table-bordered table-striped text-left'>
                        <thead>
                            <tr>
                                <th colSpan={2} className='w-full'>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((item) => {
                                return <tr>
                                    <td className='cursor-default'>{item.name}</td>
                                    <td><span className='cursor-pointer float-end pr-2 text-info' onClick={_ => navigate("/" + item.id)}>View...</span></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                )
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
                        <div className='row'>
                            <div className='col-12 my-2'>
                                {displayButton()}
                            </div>
                            <div className='col-12'>
                                {displayContent()}
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default App
