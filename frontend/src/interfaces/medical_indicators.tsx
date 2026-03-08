export interface Indicators {
    Hematologi: hematologiItem,
    Urinalisis: urinalisisItem,
    KimiaKlinik: kimiaKlinikItem,
}

export interface hematologiItem {
    DarahRutin: darahRutinItem
    EritrositIndex : eritrositIndexItem,
    HitungJenis: hitungJenisItem,
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

export interface urinalisisItem {
    warna_urin: string,
    kejernihan: string,
    urine_ph: number,
    urine_berat_jenis: number,
    urine_protein: string,
    urine_reduksi: string,
    urine_keton: string,
    urine_bilirubin: string,
    urobilinogen: string,
    DarahHbEri: string,
    Nitrit: string,
    LekositEsterase: string,
    Sedimen: sedimenItem,
}

interface sedimenItem {
    SLekosit: string,
    SEritrosit: string,
    SEpitel: string,
    SSilinder: string,
    SKristal: string,
    SBakteri: string,
    SJamur: string,
    SLainLain: string,
}

export interface kimiaKlinikItem {
    BilirubinTotal: number,
    SGOT_AST: number,
    SGPT_ALT: number,
    Cholinesterase: number,
    FosfataseAlkali: number,
    GlukosaPuasa: number,
    Glukosa2Jam: number,
    HbA1c: number,
    RerataGlukosaDarah: number,
    CholesterolTotal: number,
    hdl: number,
    ldl: number,
    trigliserida: number,
    RatioCholesterolTotal: number,
    Ureum: number,
    bun: number,
    kreatinin: number,
    asam_urat: number,
}