import { KimiaKlinikItemBaseline } from "../../interfaces/baseline"
import { kimiaKlinikItem } from "../../interfaces/medical_indicators"

function KimiaKlinik({baseline, data} : {baseline: KimiaKlinikItemBaseline | undefined, data: kimiaKlinikItem}) {
    return (
        <tbody className="border-2">
            <tr className='border-2'>
                <td className='pl-4'>• Bilirubin Total ~</td>
                <td className="text-center">{data?.BilirubinTotal}</td>
                <td className='text-center'>{(data.BilirubinTotal < baseline!.BilirubinTotal.Min || data.BilirubinTotal > baseline!.BilirubinTotal.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.BilirubinTotal.Min}-{baseline?.BilirubinTotal.Max}</td>
                <td className="text-end">{baseline?.BilirubinTotal.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>SGOT/AST ~</td>
                <td className="text-center">{data?.SGOT_AST}</td>
                <td className='text-center'>{(data.SGOT_AST < baseline!.SGOT_AST.Min || data.SGOT_AST > baseline!.SGOT_AST.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{"< " + baseline?.SGOT_AST.Max}</td>
                <td className="text-end">{baseline?.SGOT_AST.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>SGPT/ALT ~</td>
                <td className="text-center">{data?.SGPT_ALT}</td>
                <td className='text-center'>{(data.SGPT_ALT < baseline!.SGPT_ALT.Min || data.SGPT_ALT > baseline!.SGPT_ALT.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{"< " + baseline?.SGPT_ALT.Max}</td>
                <td className="text-end">{baseline?.SGPT_ALT.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Cholinesterase ({baseline?.Cholinesterase.Code}) ~</td>
                <td className="text-center">{data?.Cholinesterase}</td>
                <td className='text-center'>{(data.Cholinesterase < baseline!.Cholinesterase.Min || data.Cholinesterase > baseline!.Cholinesterase.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.Cholinesterase.Min} - {baseline?.Cholinesterase.Max}</td>
                <td className="text-end">{baseline?.Cholinesterase.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Fosfatase Alkali ({baseline?.FosfataseAlkali.Code}) ~</td>
                <td className="text-center">{data?.FosfataseAlkali}</td>
                <td className='text-center'>{(data.FosfataseAlkali < baseline!.FosfataseAlkali.Min || data.FosfataseAlkali > baseline!.FosfataseAlkali.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.FosfataseAlkali.Min} -- {baseline?.FosfataseAlkali.Max}</td>
                <td className="text-end">{baseline?.FosfataseAlkali.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Glukosa Puasa ~</td>
                <td className="text-center">{data?.GlukosaPuasa}</td>
                <td className='text-center'>{(data.GlukosaPuasa < baseline!.GlukosaPuasa.Min || data.GlukosaPuasa > baseline!.GlukosaPuasa.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.GlukosaPuasa.Min} - {baseline?.GlukosaPuasa.Max}</td>
                <td className="text-end">{baseline?.GlukosaPuasa.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Glukosa 2 jam PP ~</td>
                <td className="text-center">{data?.Glukosa2Jam}</td>
                <td className='text-center'>{(data.Glukosa2Jam < baseline!.Glukosa2Jam.Min || data.Glukosa2Jam > baseline!.Glukosa2Jam.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.Glukosa2Jam.Min} - {baseline?.Glukosa2Jam.Max}</td>
                <td className="text-end">{baseline?.Glukosa2Jam.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>HbA1c ({baseline?.HbA1c.Code}) ~</td>
                <td className="text-center">{data?.HbA1c}</td>
                <td className='text-center'>{data.HbA1c > baseline!.HbA1c.Max ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HbA1c.Min} - {baseline?.HbA1c.Max}</td>
                <td className="text-end">{baseline?.HbA1c.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Rerata Glukosa Darah ~</td>
                <td className="text-center">{data?.RerataGlukosaDarah}</td>
                <td className='text-center'></td>
                <td className="text-center"></td>
                <td className="text-end">{baseline?.RerataGlukosaDarah.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Cholesterol Total ~</td>
                <td className="text-center">{data?.CholesterolTotal}</td>
                <td className='text-center'>{data.CholesterolTotal > baseline!.CholesterolTotal.Max ? <>*</> : <></>}</td>
                <td className="text-center">{"< " + baseline?.CholesterolTotal.Max}</td>
                <td className="text-end">{baseline?.CholesterolTotal.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Cholesterol HDL ~</td>
                <td className="text-center">{data?.hdl}</td>
                <td className='text-center'>{(data.hdl < baseline!.HDL.Min || data.hdl > baseline!.HDL.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.HDL.Min} - {"< " + baseline?.HDL.Max}</td>
                <td className="text-end">{baseline?.HDL.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Cholesterol LDL ~</td>
                <td className="text-center">{data?.ldl}</td>
                <td className='text-center'>{data.ldl > baseline!.LDL.Max ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.LDL.Max}</td>
                <td className="text-end">{baseline?.LDL.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Trigliserida ~</td>
                <td className="text-center">{data?.trigliserida}</td>
                <td className='text-center'>{data.trigliserida > baseline!.Trigliserida.Max ? <>*</> : <></>}</td>
                <td className="text-center">{"< " + baseline?.Trigliserida.Max}</td>
                <td className="text-end">{baseline?.Trigliserida.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Ratio Cholesterol Total / HDL ~</td>
                <td className="text-center">{data?.RatioCholesterolTotal}</td>
                <td className='text-center'>{data.RatioCholesterolTotal > baseline!.RatioCholesterolTotal.Max ? <>*</> : <></>}</td>
                <td className="text-center">{"< " + baseline?.Cholinesterase.Max}</td>
                <td className="text-end">{baseline?.Cholinesterase.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Ureum ~</td>
                <td className="text-center">{data?.Ureum}</td>
                <td className='text-center'>{(data.Ureum < baseline!.Ureum.Min || data.Ureum > baseline!.Ureum.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.Ureum.Min} - {baseline?.Ureum.Max}</td>
                <td className="text-end">{baseline?.Ureum.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>BUN ~</td>
                <td className="text-center">{data?.bun}</td>
                <td className='text-center'>{(data.bun < baseline!.BUN.Min || data.bun > baseline!.BUN.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.BUN.Min} - {baseline?.BUN.Max}</td>
                <td className="text-end">{baseline?.BUN.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Kreatinin ~</td>
                <td className="text-center">{data?.kreatinin}</td>
                <td className='text-center'>{(data.kreatinin < baseline!.Kreatinin.Min || data.kreatinin > baseline!.Kreatinin.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.Kreatinin.Min} - {baseline?.Kreatinin.Max}</td>
                <td className="text-end">{baseline?.Kreatinin.Unit}</td>
            </tr>
            <tr className='border-2'>
                <td>Asam Urat ~</td>
                <td className="text-center">{data?.asam_urat}</td>
                <td className='text-center'>{(data.asam_urat < baseline!.AsamUrat.Min || data.asam_urat > baseline!.AsamUrat.Max) ? <>*</> : <></>}</td>
                <td className="text-center">{baseline?.AsamUrat.Min} - {baseline?.AsamUrat.Max}</td>
                <td className="text-end">{baseline?.AsamUrat.Unit}</td>
            </tr>
        </tbody>
    )
}

export default KimiaKlinik