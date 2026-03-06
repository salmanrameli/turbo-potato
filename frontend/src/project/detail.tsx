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
                        <td>Hemoglobin ({baseline?.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.haemoglobin}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.haemoglobin < baseline!.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Min || data.Indicators.hematologi.darahRutin.haemoglobin > baseline!.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Min} - {baseline?.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Haemoglobin.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Leukosit ({baseline?.HematologiBaseline.DarahRutinBaseline.Leukosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.leukosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.leukosit < baseline!.HematologiBaseline.DarahRutinBaseline.Leukosit.Min || data.Indicators.hematologi.darahRutin.leukosit > baseline!.HematologiBaseline.DarahRutinBaseline.Leukosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Leukosit.Min}-{baseline?.HematologiBaseline.DarahRutinBaseline.Leukosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Leukosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Trombosit ({baseline?.HematologiBaseline.DarahRutinBaseline.Trombosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.trombosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.trombosit < baseline!.HematologiBaseline.DarahRutinBaseline.Trombosit.Min || data.Indicators.hematologi.darahRutin.trombosit > baseline!.HematologiBaseline.DarahRutinBaseline.Trombosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Trombosit.Min}-{baseline?.HematologiBaseline.DarahRutinBaseline.Trombosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Trombosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Hematokrit ({baseline?.HematologiBaseline.DarahRutinBaseline.Hematokrit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.hematokrit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.hematokrit < baseline!.HematologiBaseline.DarahRutinBaseline.Hematokrit.Min || data.Indicators.hematologi.darahRutin.hematokrit > baseline!.HematologiBaseline.DarahRutinBaseline.Hematokrit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Hematokrit.Min}-{baseline?.HematologiBaseline.DarahRutinBaseline.Hematokrit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Hematokrit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Jumlah Eritrosit ({baseline?.HematologiBaseline.DarahRutinBaseline.Eritrosit.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.eritrosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.eritrosit < baseline!.HematologiBaseline.DarahRutinBaseline.Eritrosit.Min || data.Indicators.hematologi.darahRutin.eritrosit > baseline!.HematologiBaseline.DarahRutinBaseline.Eritrosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Eritrosit.Min}-{baseline?.HematologiBaseline.DarahRutinBaseline.Eritrosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.Eritrosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>Laju Endap Darah ({baseline?.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Code})</td>
                        <td>{data?.Indicators.hematologi.darahRutin.lajuEndapDarah}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.darahRutin.lajuEndapDarah < baseline!.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Min || data.Indicators.hematologi.darahRutin.lajuEndapDarah > baseline!.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Min}-{baseline?.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Max}</td>
                        <td>{baseline?.HematologiBaseline.DarahRutinBaseline.LajuEndapDarah.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Index Eritrosit ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCV ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mcv}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mcv < baseline!.HematologiBaseline.EritrositIndexBaseline.MCV.Min || data.Indicators.hematologi.eritrositIndex.mcv > baseline!.HematologiBaseline.EritrositIndexBaseline.MCV.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCV.Min}-{baseline?.HematologiBaseline.EritrositIndexBaseline.MCV.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCV.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCH ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mch}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mch < baseline!.HematologiBaseline.EritrositIndexBaseline.MCH.Min || data.Indicators.hematologi.eritrositIndex.mch > baseline!.HematologiBaseline.EritrositIndexBaseline.MCH.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCH.Min}-{baseline?.HematologiBaseline.EritrositIndexBaseline.MCH.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCH.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td>MCHC ~</td>
                        <td>{data?.Indicators.hematologi.eritrositIndex.mchc}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.eritrositIndex.mchc < baseline!.HematologiBaseline.EritrositIndexBaseline.MCHC.Min || data.Indicators.hematologi.eritrositIndex.mchc > baseline!.HematologiBaseline.EritrositIndexBaseline.MCHC.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCHC.Min}-{baseline?.HematologiBaseline.EritrositIndexBaseline.MCHC.Max}</td>
                        <td>{baseline?.HematologiBaseline.EritrositIndexBaseline.MCHC.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td colSpan={5} className='font-bold'>Hitung Jenis (diff) ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Basofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.basofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.basofil < baseline!.HematologiBaseline.HitungJenisBaseline.Basofil.Min || data.Indicators.hematologi.hitungJenis.basofil > baseline!.HematologiBaseline.HitungJenisBaseline.Basofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Basofil.Min}-{baseline?.HematologiBaseline.HitungJenisBaseline.Basofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Basofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Eosinofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.eosinofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.eosinofil < baseline!.HematologiBaseline.HitungJenisBaseline.Eosinofil.Min || data.Indicators.hematologi.hitungJenis.eosinofil > baseline!.HematologiBaseline.HitungJenisBaseline.Eosinofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Eosinofil.Min}-{baseline?.HematologiBaseline.HitungJenisBaseline.Eosinofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Eosinofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Neutrofil ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.neutrofil}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.neutrofil < baseline!.HematologiBaseline.HitungJenisBaseline.Neutrofil.Min || data.Indicators.hematologi.hitungJenis.neutrofil > baseline!.HematologiBaseline.HitungJenisBaseline.Neutrofil.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Neutrofil.Min}-{baseline?.HematologiBaseline.HitungJenisBaseline.Neutrofil.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Neutrofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Limfosit ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.limfosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.limfosit < baseline!.HematologiBaseline.HitungJenisBaseline.Limfosit.Min || data.Indicators.hematologi.hitungJenis.limfosit > baseline!.HematologiBaseline.HitungJenisBaseline.Limfosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Limfosit.Min}-{baseline?.HematologiBaseline.HitungJenisBaseline.Limfosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Limfosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='w-[10px]'></td>
                        <td className='pl-4'>• Monosit ~</td>
                        <td>{data?.Indicators.hematologi.hitungJenis.monosit}</td>
                        <td className='text-center'>{(data.Indicators.hematologi.hitungJenis.monosit < baseline!.HematologiBaseline.HitungJenisBaseline.Monosit.Min || data.Indicators.hematologi.hitungJenis.monosit > baseline!.HematologiBaseline.HitungJenisBaseline.Monosit.Max) ? <>*</> : <></>}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Monosit.Min}-{baseline?.HematologiBaseline.HitungJenisBaseline.Monosit.Max}</td>
                        <td>{baseline?.HematologiBaseline.HitungJenisBaseline.Monosit.Unit}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail