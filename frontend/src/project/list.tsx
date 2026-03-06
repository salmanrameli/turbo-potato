import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import {Dump, GetBaseline, GetFileContent, ListData} from "../../wailsjs/go/main/App";
import {MedicalData, Patient} from "../types";
import {IndicatorBaseline} from "../interfaces/baseline"
import {Indicators} from "../interfaces/medical_indicators"
import Detail from './detail';
import { global } from '../constants';

function List() {
    let navigate = useNavigate();
    let { id } = useParams()
    const [baseline, setBaseline] = useState<IndicatorBaseline>()
    const [patients, setPatients] = useState<Patient[]>([])
    const [medicalData, setMedicalData] = useState<Record<string, MedicalData>>()
    const [detail, setDetail] = useState<MedicalData>()
    const [mode, setMode] = useState<number>(global.MODE_LIST)
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true)

    function showDetail(id: string) {
        if (medicalData) {
            setMode(global.MODE_DETAIL)

            setDetail(medicalData[id])
        }
    }

    useEffect(() => {
        if (id) {
            GetBaseline().then((data) => {
                // setBaseline(data)
            })

            ListData(id).then((data) => {
                setPatients(data)
            })

            GetFileContent(id).then((data) => {
                setMedicalData(data)
            }).finally(() => setIsLoadingData(false))
        }
    }, [id])

    function displayNavigationButton() {
        switch(mode) {
            case global.MODE_LIST:
                return <h1 className='text-left cursor-pointer' onClick={() => navigate('/')}>home</h1>
            case global.MODE_DETAIL:
                return <h1 className='text-left cursor-pointer' onClick={() => setMode(global.MODE_LIST)}>back</h1>
        }
    }

    return (
        <div className='m-4'>
            {displayNavigationButton()}
            {
                mode == global.MODE_LIST ? (
                    <table className='table-fixed w-full text-left'>
                        <thead>
                            <tr>
                                <th className='w-50'>ID</th>
                                <th>Nama</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => {
                                return <tr>
                                    <td>{patient.ID}</td>
                                    <td>{patient.Nama}</td>
                                    <td className='text-sky-500'>
                                        <button className='cursor-pointer' disabled={isLoadingData}  onClick={(_) => showDetail(patient.ID)}>Detail...</button>
                                    </td>
                                    <td className='text-sky-500 cursor-pointer'>Print</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                ) : (
                    <>
                        {
                            <Detail
                                baseline={baseline}
                                data={detail}
                            />
                        }
                    </>
                )
            }
            
        </div>
    )
}

export default List