import { MedicalData } from "../types";
import { IndicatorBaseline } from "../interfaces/baseline"

function Detail({ baseline, data }: { baseline: IndicatorBaseline | undefined, data: MedicalData }) {
    return (
        data && <div className='w-full'>
            <h1>detail page for {data?.Patient.Nama}</h1>
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
                <tbody className='border-2'>
                    <tr className='border-2'>
                        <td colSpan={5} className='font-bold'>DARAH RUTIN ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Hemoglobin ({baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.haemoglobin}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.haemoglobin < baseline!.HematologiBaseline.DarahRutinItem.Haemoglobin.Min || data.Indicators.Hematologi.DarahRutin.haemoglobin > baseline!.HematologiBaseline.DarahRutinItem.Haemoglobin.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Min} - {baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.Haemoglobin.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Jumlah Leukosit ({baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.leukosit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.leukosit < baseline!.HematologiBaseline.DarahRutinItem.Leukosit.Min || data.Indicators.Hematologi.DarahRutin.leukosit > baseline!.HematologiBaseline.DarahRutinItem.Leukosit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.Leukosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Jumlah Trombosit ({baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.trombosit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.trombosit < baseline!.HematologiBaseline.DarahRutinItem.Trombosit.Min || data.Indicators.Hematologi.DarahRutin.trombosit > baseline!.HematologiBaseline.DarahRutinItem.Trombosit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.Trombosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Hematokrit ({baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.hematokrit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.hematokrit < baseline!.HematologiBaseline.DarahRutinItem.Hematokrit.Min || data.Indicators.Hematologi.DarahRutin.hematokrit > baseline!.HematologiBaseline.DarahRutinItem.Hematokrit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.Hematokrit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Jumlah Eritrosit ({baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.eritrosit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.eritrosit < baseline!.HematologiBaseline.DarahRutinItem.Eritrosit.Min || data.Indicators.Hematologi.DarahRutin.eritrosit > baseline!.HematologiBaseline.DarahRutinItem.Eritrosit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Min}-{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.Eritrosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>Laju Endap Darah ({baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Code})</td>
                        <td className="text-center">{data?.Indicators.Hematologi.DarahRutin.lajuEndapDarah}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.DarahRutin.lajuEndapDarah < baseline!.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Min || data.Indicators.Hematologi.DarahRutin.lajuEndapDarah > baseline!.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Min}-{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.DarahRutinItem.LajuEndapDarah.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td colSpan={5} className='font-bold'>Index Eritrosit ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td>MCV ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.EritrositIndex.mcv}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.EritrositIndex.mcv < baseline!.HematologiBaseline.EritrositIndex.MCV.Min || data.Indicators.Hematologi.EritrositIndex.mcv > baseline!.HematologiBaseline.EritrositIndex.MCV.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.EritrositIndex.MCV.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCV.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.EritrositIndex.MCV.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>MCH ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.EritrositIndex.mch}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.EritrositIndex.mch < baseline!.HematologiBaseline.EritrositIndex.MCH.Min || data.Indicators.Hematologi.EritrositIndex.mch > baseline!.HematologiBaseline.EritrositIndex.MCH.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.EritrositIndex.MCH.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCH.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.EritrositIndex.MCH.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td>MCHC ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.EritrositIndex.mchc}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.EritrositIndex.mchc < baseline!.HematologiBaseline.EritrositIndex.MCHC.Min || data.Indicators.Hematologi.EritrositIndex.mchc > baseline!.HematologiBaseline.EritrositIndex.MCHC.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.EritrositIndex.MCHC.Min}-{baseline?.HematologiBaseline.EritrositIndex.MCHC.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.EritrositIndex.MCHC.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td colSpan={5} className='font-bold'>Hitung Jenis (diff) ~</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='pl-4'>• Basofil ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.HitungJenis.basofil}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.HitungJenis.basofil < baseline!.HematologiBaseline.HitungJenisItem.Basofil.Min || data.Indicators.Hematologi.HitungJenis.basofil > baseline!.HematologiBaseline.HitungJenisItem.Basofil.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.HitungJenisItem.Basofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='pl-4'>• Eosinofil ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.HitungJenis.eosinofil}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.HitungJenis.eosinofil < baseline!.HematologiBaseline.HitungJenisItem.Eosinofil.Min || data.Indicators.Hematologi.HitungJenis.eosinofil > baseline!.HematologiBaseline.HitungJenisItem.Eosinofil.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.HitungJenisItem.Eosinofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='pl-4'>• Neutrofil ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.HitungJenis.neutrofil}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.HitungJenis.neutrofil < baseline!.HematologiBaseline.HitungJenisItem.Neutrofil.Min || data.Indicators.Hematologi.HitungJenis.neutrofil > baseline!.HematologiBaseline.HitungJenisItem.Neutrofil.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.HitungJenisItem.Neutrofil.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='pl-4'>• Limfosit ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.HitungJenis.limfosit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.HitungJenis.limfosit < baseline!.HematologiBaseline.HitungJenisItem.Limfosit.Min || data.Indicators.Hematologi.HitungJenis.limfosit > baseline!.HematologiBaseline.HitungJenisItem.Limfosit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.HitungJenisItem.Limfosit.Unit}</td>
                    </tr>
                    <tr className='border-2'>
                        <td className='pl-4'>• Monosit ~</td>
                        <td className="text-center">{data?.Indicators.Hematologi.HitungJenis.monosit}</td>
                        <td className='text-center'>{(data.Indicators.Hematologi.HitungJenis.monosit < baseline!.HematologiBaseline.HitungJenisItem.Monosit.Min || data.Indicators.Hematologi.HitungJenis.monosit > baseline!.HematologiBaseline.HitungJenisItem.Monosit.Max) ? <>*</> : <></>}</td>
                        <td className="text-center">{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Min}-{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Max}</td>
                        <td className="text-end">{baseline?.HematologiBaseline.HitungJenisItem.Monosit.Unit}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail