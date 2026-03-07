import { HematologiItemBaseline } from "../../interfaces/baseline"
import { hematologiItem } from "../../interfaces/medical_indicators"

function Hematologi({baseline, data} : {baseline: HematologiItemBaseline | undefined, data: hematologiItem}) {
    return (
        <tbody className='border-2'>
            <tr className='border-2'>
                <td colSpan={5} className='font-bold'>DARAH RUTIN ~</td>
            </tr>
            <tr className='border-2'>
                <td>Hemoglobin ({baseline?.DarahRutinItem.Haemoglobin.Code})</td>
                <td className="text-center">{data?.DarahRutin.haemoglobin}</td>
                <td className='text-center'>{(data.DarahRutin.haemoglobin < baseline!.DarahRutinItem.Haemoglobin.Min || data.DarahRutin.haemoglobin > baseline!.DarahRutinItem.Haemoglobin.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.Haemoglobin.Min} - {baseline?.DarahRutinItem.Haemoglobin.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.Haemoglobin.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Jumlah Leukosit ({baseline?.DarahRutinItem.Leukosit.Code})</td>
                <td className="text-center">{data?.DarahRutin.leukosit}</td>
                <td className='text-center'>{(data.DarahRutin.leukosit < baseline!.DarahRutinItem.Leukosit.Min || data.DarahRutin.leukosit > baseline!.DarahRutinItem.Leukosit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.Leukosit.Min}-{baseline?.DarahRutinItem.Leukosit.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.Leukosit.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Jumlah Trombosit ({baseline?.DarahRutinItem.Trombosit.Code})</td>
                <td className="text-center">{data?.DarahRutin.trombosit}</td>
                <td className='text-center'>{(data.DarahRutin.trombosit < baseline!.DarahRutinItem.Trombosit.Min || data.DarahRutin.trombosit > baseline!.DarahRutinItem.Trombosit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.Trombosit.Min}-{baseline?.DarahRutinItem.Trombosit.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.Trombosit.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Hematokrit ({baseline?.DarahRutinItem.Hematokrit.Code})</td>
                <td className="text-center">{data?.DarahRutin.hematokrit}</td>
                <td className='text-center'>{(data.DarahRutin.hematokrit < baseline!.DarahRutinItem.Hematokrit.Min || data.DarahRutin.hematokrit > baseline!.DarahRutinItem.Hematokrit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.Hematokrit.Min}-{baseline?.DarahRutinItem.Hematokrit.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.Hematokrit.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Jumlah Eritrosit ({baseline?.DarahRutinItem.Eritrosit.Code})</td>
                <td className="text-center">{data?.DarahRutin.eritrosit}</td>
                <td className='text-center'>{(data.DarahRutin.eritrosit < baseline!.DarahRutinItem.Eritrosit.Min || data.DarahRutin.eritrosit > baseline!.DarahRutinItem.Eritrosit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.Eritrosit.Min}-{baseline?.DarahRutinItem.Eritrosit.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.Eritrosit.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Laju Endap Darah ({baseline?.DarahRutinItem.LajuEndapDarah.Code})</td>
                <td className="text-center">{data?.DarahRutin.lajuEndapDarah}</td>
                <td className='text-center'>{(data.DarahRutin.lajuEndapDarah < baseline!.DarahRutinItem.LajuEndapDarah.Min || data.DarahRutin.lajuEndapDarah > baseline!.DarahRutinItem.LajuEndapDarah.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.DarahRutinItem.LajuEndapDarah.Min}-{baseline?.DarahRutinItem.LajuEndapDarah.Max}</td>
                <td className="text-end">{baseline?.DarahRutinItem.LajuEndapDarah.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td colSpan={5} className='font-bold'>Index Eritrosit ~</td>
            </tr>
            <tr className='border-2'>
                <td>MCV ~</td>
                <td className="text-center">{data?.EritrositIndex.mcv}</td>
                <td className='text-center'>{(data.EritrositIndex.mcv < baseline!.EritrositIndex.MCV.Min || data.EritrositIndex.mcv > baseline!.EritrositIndex.MCV.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.EritrositIndex.MCV.Min}-{baseline?.EritrositIndex.MCV.Max}</td>
                <td className="text-end">{baseline?.EritrositIndex.MCV.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>MCH ~</td>
                <td className="text-center">{data?.EritrositIndex.mch}</td>
                <td className='text-center'>{(data.EritrositIndex.mch < baseline!.EritrositIndex.MCH.Min || data.EritrositIndex.mch > baseline!.EritrositIndex.MCH.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.EritrositIndex.MCH.Min}-{baseline?.EritrositIndex.MCH.Max}</td>
                <td className="text-end">{baseline?.EritrositIndex.MCH.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>MCHC ~</td>
                <td className="text-center">{data?.EritrositIndex.mchc}</td>
                <td className='text-center'>{(data.EritrositIndex.mchc < baseline!.EritrositIndex.MCHC.Min || data.EritrositIndex.mchc > baseline!.EritrositIndex.MCHC.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.EritrositIndex.MCHC.Min}-{baseline?.EritrositIndex.MCHC.Max}</td>
                <td className="text-end">{baseline?.EritrositIndex.MCHC.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td colSpan={5} className='font-bold'>Hitung Jenis (diff) ~</td>
            </tr>
            <tr className='border-2'>
                <td className='pl-4'>• Basofil ~</td>
                <td className="text-center">{data?.HitungJenis.basofil}</td>
                <td className='text-center'>{(data.HitungJenis.basofil < baseline!.HitungJenisItem.Basofil.Min || data.HitungJenis.basofil > baseline!.HitungJenisItem.Basofil.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HitungJenisItem.Basofil.Min}-{baseline?.HitungJenisItem.Basofil.Max}</td>
                <td className="text-end">{baseline?.HitungJenisItem.Basofil.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td className='pl-4'>• Eosinofil ~</td>
                <td className="text-center">{data?.HitungJenis.eosinofil}</td>
                <td className='text-center'>{(data.HitungJenis.eosinofil < baseline!.HitungJenisItem.Eosinofil.Min || data.HitungJenis.eosinofil > baseline!.HitungJenisItem.Eosinofil.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HitungJenisItem.Eosinofil.Min}-{baseline?.HitungJenisItem.Eosinofil.Max}</td>
                <td className="text-end">{baseline?.HitungJenisItem.Eosinofil.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td className='pl-4'>• Neutrofil ~</td>
                <td className="text-center">{data?.HitungJenis.neutrofil}</td>
                <td className='text-center'>{(data.HitungJenis.neutrofil < baseline!.HitungJenisItem.Neutrofil.Min || data.HitungJenis.neutrofil > baseline!.HitungJenisItem.Neutrofil.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HitungJenisItem.Neutrofil.Min}-{baseline?.HitungJenisItem.Neutrofil.Max}</td>
                <td className="text-end">{baseline?.HitungJenisItem.Neutrofil.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td className='pl-4'>• Limfosit ~</td>
                <td className="text-center">{data?.HitungJenis.limfosit}</td>
                <td className='text-center'>{(data.HitungJenis.limfosit < baseline!.HitungJenisItem.Limfosit.Min || data.HitungJenis.limfosit > baseline!.HitungJenisItem.Limfosit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HitungJenisItem.Limfosit.Min}-{baseline?.HitungJenisItem.Limfosit.Max}</td>
                <td className="text-end">{baseline?.HitungJenisItem.Limfosit.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td className='pl-4'>• Monosit ~</td>
                <td className="text-center">{data?.HitungJenis.monosit}</td>
                <td className='text-center'>{(data.HitungJenis.monosit < baseline!.HitungJenisItem.Monosit.Min || data.HitungJenis.monosit > baseline!.HitungJenisItem.Monosit.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HitungJenisItem.Monosit.Min}-{baseline?.HitungJenisItem.Monosit.Max}</td>
                <td className="text-end">{baseline?.HitungJenisItem.Monosit.Unit}</td>
            </tr>
        </tbody>
    )
}

export default Hematologi