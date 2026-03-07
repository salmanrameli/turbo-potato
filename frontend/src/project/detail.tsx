import { MedicalData } from "../types";
import { IndicatorBaseline } from "../interfaces/baseline"

function Detail({ baseline, data }: { baseline: IndicatorBaseline | undefined, data: MedicalData | undefined }) {
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
                        <td>Hemoglobin ({baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.haemoglobin}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.haemoglobin < baseline!.HematologiBaseline.DarahRutinItem.Haemoglobin.Min || data.Indicators.hematologi.darahRutin.haemoglobin > baseline!.HematologiBaseline.DarahRutinItem.Haemoglobin.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Min} - {baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Leukosit ({baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.leukosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.leukosit < baseline!.HematologiBaseline.DarahRutinItem.Leukosit.Min || data.Indicators.hematologi.darahRutin.leukosit > baseline!.HematologiBaseline.DarahRutinItem.Leukosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Trombosit ({baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.trombosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.trombosit < baseline!.HematologiBaseline.DarahRutinItem.Trombosit.Min || data.Indicators.hematologi.darahRutin.trombosit > baseline!.HematologiBaseline.DarahRutinItem.Trombosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Hematokrit ({baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.hematokrit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.hematokrit < baseline!.HematologiBaseline.DarahRutinItem.Hematokrit.Min || data.Indicators.hematologi.darahRutin.hematokrit > baseline!.HematologiBaseline.DarahRutinItem.Hematokrit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Eritrosit ({baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.eritrosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.eritrosit < baseline!.HematologiBaseline.DarahRutinItem.Eritrosit.Min || data.Indicators.hematologi.darahRutin.eritrosit > baseline!.HematologiBaseline.DarahRutinItem.Eritrosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Laju Endap Darah ({baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.lajuEndapDarah}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.lajuEndapDarah < baseline!.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Min || data.Indicators.hematologi.darahRutin.lajuEndapDarah > baseline!.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Min}-{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Index Eritrosit ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCV ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mcv}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mcv < baseline!.HematologiBaseline.EritrositIndex.MCV.Min || data.Indicators.hematologi.eritrositIndex.mcv > baseline!.HematologiBaseline.EritrositIndex.MCV.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCV.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCV.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCV.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCH ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mch}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mch < baseline!.HematologiBaseline.EritrositIndex.MCH.Min || data.Indicators.hematologi.eritrositIndex.mch > baseline!.HematologiBaseline.EritrositIndex.MCH.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCH.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCH.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCH.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCHC ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mchc}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mchc < baseline!.HematologiBaseline.EritrositIndex.MCHC.Min || data.Indicators.hematologi.eritrositIndex.mchc > baseline!.HematologiBaseline.EritrositIndex.MCHC.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCHC.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCHC.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndex.MCHC.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Hitung Jenis (diff) ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Basofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.basofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.basofil < baseline!.HematologiBaseline.HitungJenisItem.Basofil.Min || data.Indicators.hematologi.hitungJenis.basofil > baseline!.HematologiBaseline.HitungJenisItem.Basofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Eosinofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.eosinofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.eosinofil < baseline!.HematologiBaseline.HitungJenisItem.Eosinofil.Min || data.Indicators.hematologi.hitungJenis.eosinofil > baseline!.HematologiBaseline.HitungJenisItem.Eosinofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Neutrofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.neutrofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.neutrofil < baseline!.HematologiBaseline.HitungJenisItem.Neutrofil.Min || data.Indicators.hematologi.hitungJenis.neutrofil > baseline!.HematologiBaseline.HitungJenisItem.Neutrofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Limfosit ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.limfosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.limfosit < baseline!.HematologiBaseline.HitungJenisItem.Limfosit.Min || data.Indicators.hematologi.hitungJenis.limfosit > baseline!.HematologiBaseline.HitungJenisItem.Limfosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Monosit ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.monosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.monosit < baseline!.HematologiBaseline.HitungJenisItem.Monosit.Min || data.Indicators.hematologi.hitungJenis.monosit > baseline!.HematologiBaseline.HitungJenisItem.Monosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Unit}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail