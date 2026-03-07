import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import {Dump, GetBaseline, GetFileContent, ListData} from "../../wailsjs/go/main/App";
import {MedicalData, Patient} from "../types";
import {IndicatorBaseline} from "../interfaces/baseline"
import Detail from './detail';
import { global } from '../constants';

function List() {
    let navigate = useNavigate();
    let { id } = useParams()
    const [baseline, setBaseline] = useState<IndicatorBaseline>()
    const [patients, setPatients] = useState<Patient[]>([])
    const [medicalData, setMedicalData] = useState<Record<string, MedicalData>>()
    const [detail, setDetail] = useState<MedicalData | undefined>(undefined)
    const [mode, setMode] = useState<number>(global.MODE_LIST)
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true)

    function showDetail(id: string) {
        if (medicalData) {
            setDetail(medicalData[id])
        }
    }

    useEffect(() => {
        if (baseline && detail) {
            setMode(global.MODE_DETAIL)
        }
    }, [detail])

    useEffect(() => {
        if (id) {
             ListData(id).then((data) => {
                setPatients(data)
            })

            GetFileContent(id).then((data) => {
                setMedicalData(data)
            }).finally(() => setIsLoadingData(false))
        }
    }, [id])

    useEffect(() => {
        GetBaseline().then((data) => {
            setBaseline(data)
        })
    }, [])

    function back() {
        setDetail(undefined)

        setMode(global.MODE_LIST)
    }

    function displayNavigationButton() {
        switch(mode) {
            case global.MODE_LIST:
                return <p className='text-left cursor-pointer' onClick={() => navigate('/')}>home</p>
            case global.MODE_DETAIL:
                return <p className='text-left cursor-pointer' onClick={() => back()}>back</p>
        }
    }

    return (
        <div className='m-4'>
            {displayNavigationButton()}
            {
                mode == global.MODE_LIST ? (
                    <table className='table table-sm table-bordered w-full text-left'>
                        <thead>
                            <tr>
                                <th className='w-auto'>ID</th>
                                <th>Nama</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => {
                                return <tr>
                                    <td>{patient.ID}</td>
                                    <td>{patient.Nama}</td>
                                    <td>
                                        <button className='cursor-pointer text-info' disabled={isLoadingData}  onClick={(_) => showDetail(patient.ID)}>Detail...</button>
                                    </td>
                                    <td className='cursor-pointer text-info'>Print</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                ) : (
                    <>
                        {
                            <Detail
                                baseline={baseline}
                                data={detail!}
                            />
                        }
                    </>
                )
            }
            
        </div>
    )
}

export default List