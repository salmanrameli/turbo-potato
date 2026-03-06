export interface Indicators {
    hematologi: hematologiItem,
    urinalisis: urinalisisItem,
    kimiaKlinik: kimiaKlinikItem,
}

interface hematologiItem {
    darahRutin: darahRutinItem
    eritrositIndex : eritrositIndexItem,
    hitungJenis: hitungJenisItem,
}

interface darahRutinItem {
    haemoglobin: number,
    leukosit: number,
    trombosit: number,
    hematokrit: number,
    eritrosit: number,
    lajuEndapDarah: number,
}

interface eritrositIndexItem {
    mcv: number,
    mch: number,
    mchc: number,
}

interface hitungJenisItem {
    basofil: number,
    eosinofil: number,
    neutrofil: number,
    limfosit: number,
    monosit: number,
}

interface urinalisisItem {
    warna: string,
    kejernihan: string,
    ph: number,
    beratJenis: number,
    protein: string,
    reduksi: string,
    keton: string,
    bilirubin: string,
    urobilinogen: string,
    darahHbEri: string,
    nitrit: string,
    lekositEsterase: string,
    sedimen: sedimenItem,
}

interface sedimenItem {
    sLekosit: number,
    sEritrosit: number,
    sEpitel: number,
    sSilinder: string,
    sKristal: string,
    sBakteri: string,
    sJamur: string,
    sLainLain: string,
}

interface kimiaKlinikItem {
    bilirubinTotal: number,
    sgot_ast: number,
    sgpt_alt: number,
    cholinesterase: number,
    fosfataseAlkali: number,
    glukosaPuasa: number,
    glukosa2Jam: number,
    hbA1c: number,
    rerataGlukosaDarah: number,
    CholesterolTotal: number,
    hdl: number,
    ldl: number,
    trigliserida: number,
    ratioCholesterolTotal: number,
    ureum: number,
    bun: number,
    kreatinin: number,
    asamUrat: number,
}