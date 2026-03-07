import { useState } from 'react';
import { MedicalData } from "../types";
import { IndicatorBaseline } from "../interfaces/baseline"
import { breakdown } from '../constants';
import Hematologi from './medical_detail/hematologi';
import KimiaKlinik from './medical_detail/kimia_klinik';
import Urinalisis from './medical_detail/urinalisis';

function Detail({ baseline, data }: { baseline: IndicatorBaseline | undefined, data: MedicalData }) {
    const [mode, setMode] = useState<number>(breakdown.MODE_HEMATOLOGI)

    function displayData() {
        switch(mode) {
            case breakdown.MODE_HEMATOLOGI:
                return <Hematologi baseline={baseline?.HematologiBaseline} data={data.Indicators.Hematologi} />
            case breakdown.MODE_KIMIA_KLINIK:
                return <KimiaKlinik />
            case breakdown.MODE_URINALISIS:
                return <Urinalisis />
        }
    }

    return (
        data && <div className='w-full'>
            <h1>detail page for {data?.Patient.Nama}</h1>

            <nav className="nav nav-pills nav-justified my-4">
                <a className={`nav-link ${mode == breakdown.MODE_HEMATOLOGI ? 'active' : ''}`} href="#" onClick={_ => setMode(breakdown.MODE_HEMATOLOGI)}>Hematologi</a>
                <a className={`nav-link ${mode == breakdown.MODE_KIMIA_KLINIK ? 'active' : ''}`} href="#" onClick={_ => setMode(breakdown.MODE_KIMIA_KLINIK)}>Kimia Klinik</a>
                <a className={`nav-link ${mode == breakdown.MODE_URINALISIS ? 'active' : ''}`} href="#" onClick={_ => setMode(breakdown.MODE_URINALISIS)}>Urinalisis</a>
            </nav>

            <table className='table table-bordered table-sm table-striped-columns w-full text-left border-2'>
                <thead>
                    <tr>
                        <th className='w-50'>Nama Test</th>
                        <th className="text-center">Hasil</th>
                        <th className='text-center'>Flag</th>
                        <th className="text-center">Nilai Rujukan</th>
                        <th className="text-end">Unit</th>
                    </tr>
                </thead>
                {displayData()}
            </table>
        </div>
    )
}

export default Detail