import { useState } from "react"
import { Dump, SaveProject, SelectFileNewProject } from "../../wailsjs/go/main/App"

function Create() {
    const [path, setPath] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [diagnosaStandard, setDiagnosaStandard] = useState<number[]>([])

    function selectFile() {
        SelectFileNewProject().then((path) => {
            setPath(path)
        })
    }

    function submit() {
        Dump(diagnosaStandard)
        
        SaveProject(name, path, diagnosaStandard).then(() => {})
    }

    function changeDiagnosaStandard(event: any, value: number) {
        if (event.target.checked) {
            Dump("checked with value: " + value);

            setDiagnosaStandard(prevDiagnosaStandard => [...prevDiagnosaStandard, value])
        } else {
            Dump("uncheck for value: " + value)

            const updatedItem = diagnosaStandard.filter((item: number) => item != value)

            setDiagnosaStandard(updatedItem)
        }
    }

    return (
        <div className="w-full">
            <h1 className="text-left mb-4">create new</h1>
            <div className="">
                <div className="flex">
                    <p className="float-left mt-2 mr-2">name:</p>
                    <input type="text" id="name" name="name" className="inline-flex border rounded-md text-heading text-sm rounded-base w-full py-2 px-2" placeholder="..." required onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex mt-2">
                    <p className="float-left mt-2 mr-6">file:</p>
                    <button className="float-left mt-1 border rounded-md border-stone-800 text-sm px-2 py-1" onClick={_ => selectFile()}>select</button>
                </div>
                {path != "" &&
                    <div className="flex mt-2">
                        <p className="float-left mt-2">path: <span className="ml-2">{path}</span></p>
                        <button className="float-left mt-1 border rounded-md border-stone-800 text-sm px-2 py-1 ml-2" onClick={_ => setPath("")}>clear</button>
                    </div>
                }
                <div className="col-12 align-left">
                    <div className="col-12">
                        <input type="checkbox" name="fit_with_note" className="inline-flex" value="1" onChange={e => changeDiagnosaStandard(e, 1)}></input>
                        <label htmlFor="fit_with_note" className="inline-flex">Fit with note</label>
                    </div>
                    <div className="col-12">
                        <input type="checkbox" name="temporary_unfit" value="2" className="inline-flex" onChange={e => changeDiagnosaStandard(e, 2)}></input>
                        <label htmlFor="temporary_unfit" className="inline-flex">Temporary unfit</label>
                    </div>
                </div>
            </div>
            <button type="submit" className="mt-4 border rounded-md border-stone-800 font-medium text-sm px-2 py-2" disabled={name && path ? false : true} onClick={_ => submit()}>Submit</button>
        </div>
    )
}

export default Create