import { Baseline, MedicalData } from "../types";

function Detail({ baseline, data }: { baseline: Baseline | undefined, data: MedicalData | undefined }) {
    return (
        data && <div className='w-full'>
            <h1>detail page for {data?.Patient.Nama}</h1>
            <table className='table-fixed w-full text-left border-2 font-light text-surface dark:text-white'>
                <thead>
                    <tr>
                        <th className='w-[10px]'></th>
                        <th className='w-75'>Nama Test</th>
                        <th>Hasil</th>
                        <th className='text-center'>Flag</th>
                        <th>Nilai Rujukan</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody className='border-2'>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>DARAH RUTIN ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Hemoglobin ({baseline?.Haemoglobin.Code})</td>
                        <td>{data?.Indicators.haemoglobin}</td>
                        <td className='text-center'>{(data.Indicators.haemoglobin < baseline!.Haemoglobin.Min || data.Indicators.haemoglobin > baseline!.Haemoglobin.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.Haemoglobin.Min} - {baseline?.Haemoglobin.Max}</td>
                        <td>{baseline?.Haemoglobin.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Leukosit ({baseline?.Leukosit.Code})</td>
                        <td>{data?.Indicators.leukosit}</td>
                        <td className='text-center'>{(data.Indicators.leukosit < baseline!.Leukosit.Min || data.Indicators.leukosit > baseline!.Leukosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.Leukosit.Min}-{baseline?.Leukosit.Max}</td>
                        <td>{baseline?.Leukosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Trombosit ({baseline?.Trombosit.Code})</td>
                        <td>{data?.Indicators.trombosit}</td>
                        <td className='text-center'>{(data.Indicators.trombosit < baseline!.Trombosit.Min || data.Indicators.trombosit > baseline!.Trombosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.Trombosit.Min}-{baseline?.Trombosit.Max}</td>
                        <td>{baseline?.Trombosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Hematokrit ({baseline?.Hematokrit.Code})</td>
                        <td>{data?.Indicators.hematokrit}</td>
                        <td className='text-center'>{(data.Indicators.hematokrit < baseline!.Hematokrit.Min || data.Indicators.hematokrit > baseline!.Hematokrit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.Hematokrit.Min}-{baseline?.Hematokrit.Max}</td>
                        <td>{baseline?.Hematokrit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Eritrosit ({baseline?.Eritrosit.Code})</td>
                        <td>{data?.Indicators.eritrosit}</td>
                        <td className='text-center'>{(data.Indicators.eritrosit < baseline!.Eritrosit.Min || data.Indicators.eritrosit > baseline!.Eritrosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.Eritrosit.Min}-{baseline?.Eritrosit.Max}</td>
                        <td>{baseline?.Eritrosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Laju Endap Darah ({baseline?.LajuEndapDarah.Code})</td>
                        <td>{data?.Indicators.lajuEndapDarah}</td>
                        <td className='text-center'>{(data.Indicators.lajuEndapDarah < baseline!.LajuEndapDarah.Min || data.Indicators.lajuEndapDarah > baseline!.LajuEndapDarah.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.LajuEndapDarah.Min}-{baseline?.LajuEndapDarah.Max}</td>
                        <td>{baseline?.LajuEndapDarah.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Index Eritrosit ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCV ~</td>
                        <td>{data?.Indicators.EritrositIndex.mcv}</td>
                        <td className='text-center'>{(data.Indicators.EritrositIndex.mcv < baseline!.EritrositIndex.MCV.Min || data.Indicators.EritrositIndex.mcv > baseline!.EritrositIndex.MCV.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.EritrositIndex.MCV.Min}-{baseline?.EritrositIndex.MCV.Max}</td>
                        <td>{baseline?.EritrositIndex.MCV.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCH ~</td>
                        <td>{data?.Indicators.EritrositIndex.mch}</td>
                        <td className='text-center'>{(data.Indicators.EritrositIndex.mch < baseline!.EritrositIndex.MCH.Min || data.Indicators.EritrositIndex.mch > baseline!.EritrositIndex.MCH.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.EritrositIndex.MCH.Min}-{baseline?.EritrositIndex.MCH.Max}</td>
                        <td>{baseline?.EritrositIndex.MCH.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCHC ~</td>
                        <td>{data?.Indicators.EritrositIndex.mchc}</td>
                        <td className='text-center'>{(data.Indicators.EritrositIndex.mchc < baseline!.EritrositIndex.MCHC.Min || data.Indicators.EritrositIndex.mchc > baseline!.EritrositIndex.MCHC.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.EritrositIndex.MCHC.Min}-{baseline?.EritrositIndex.MCHC.Max}</td>
                        <td>{baseline?.EritrositIndex.MCHC.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Hitung Jenis (diff) ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Basofil ~</td>
                        <td>{data?.Indicators.HitungJenis.basofil}</td>
                        <td className='text-center'>{(data.Indicators.HitungJenis.basofil < baseline!.HitungJenisItem.Basofil.Min || data.Indicators.HitungJenis.basofil > baseline!.HitungJenisItem.Basofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HitungJenisItem.Basofil.Min}-{baseline?.HitungJenisItem.Basofil.Max}</td>
                        <td>{baseline?.HitungJenisItem.Basofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Eosinofil ~</td>
                        <td>{data?.Indicators.HitungJenis.eosinofil}</td>
                        <td className='text-center'>{(data.Indicators.HitungJenis.eosinofil < baseline!.HitungJenisItem.Eosinofil.Min || data.Indicators.HitungJenis.eosinofil > baseline!.HitungJenisItem.Eosinofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HitungJenisItem.Eosinofil.Min}-{baseline?.HitungJenisItem.Eosinofil.Max}</td>
                        <td>{baseline?.HitungJenisItem.Eosinofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Neutrofil ~</td>
                        <td>{data?.Indicators.HitungJenis.neutrofil}</td>
                        <td className='text-center'>{(data.Indicators.HitungJenis.neutrofil < baseline!.HitungJenisItem.Neutrofil.Min || data.Indicators.HitungJenis.neutrofil > baseline!.HitungJenisItem.Neutrofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HitungJenisItem.Neutrofil.Min}-{baseline?.HitungJenisItem.Neutrofil.Max}</td>
                        <td>{baseline?.HitungJenisItem.Neutrofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Limfosit ~</td>
                        <td>{data?.Indicators.HitungJenis.limfosit}</td>
                        <td className='text-center'>{(data.Indicators.HitungJenis.limfosit < baseline!.HitungJenisItem.Limfosit.Min || data.Indicators.HitungJenis.limfosit > baseline!.HitungJenisItem.Limfosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HitungJenisItem.Limfosit.Min}-{baseline?.HitungJenisItem.Limfosit.Max}</td>
                        <td>{baseline?.HitungJenisItem.Limfosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Monosit ~</td>
                        <td>{data?.Indicators.HitungJenis.monosit}</td>
                        <td className='text-center'>{(data.Indicators.HitungJenis.monosit < baseline!.HitungJenisItem.Monosit.Min || data.Indicators.HitungJenis.monosit > baseline!.HitungJenisItem.Monosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HitungJenisItem.Monosit.Min}-{baseline?.HitungJenisItem.Monosit.Max}</td>
                        <td>{baseline?.HitungJenisItem.Monosit.Unit}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail