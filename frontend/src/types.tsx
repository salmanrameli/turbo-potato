export interface Patient {
    ID: string,
    Nama: string
}

export interface Indicators {
    haemoglobin: number,
    eritrosit: number,
    EritrositIndex : eritrositIndexItem,
    leukosit: number,
    hematokrit: number,
    trombosit: number,
    lajuEndapDarah: number,
    gdp: number,
    CholesterolTotal: number,
    trigliserida: number,
    hdl: number,
    ldl: number,
    CreatinineLK: number,
    CreatininePR: number,
    bun: number,
    HitungJenis: hitungJenisItem,
    Urinalisis: urinalisisItem
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
}

export interface MedicalData {
    Patient: Patient,
    Indicators: Indicators
}

interface ReferenceNumber {
    Min: number,
    Max: number,
    Unit: string,
    Code: string
}

interface ReferenceString {
    Reference: string
}

export interface Baseline {
    Haemoglobin: ReferenceNumber,
    Eritrosit: ReferenceNumber,
    EritrositIndex: EritrositIndexBaseline
    // MCV: ReferenceNumber,
    // MCH: ReferenceNumber,
    // MCHC: ReferenceNumber,
    Leukosit: ReferenceNumber,
    Hematokrit: ReferenceNumber,
    Trombosit: ReferenceNumber,
    LajuEndapDarah: ReferenceNumber,
    GDP: ReferenceNumber,
    CholesterolTotal: ReferenceNumber,
    Trigliserida: ReferenceNumber,
    HDL: ReferenceNumber,
    LDL: ReferenceNumber,
    Creatinine: ReferenceNumber,
    // CreatinineLK: ReferenceNumber,
    // CreatininePR: ReferenceNumber,
    BUN: ReferenceNumber,
    // Basofil: ReferenceNumber,
    // Eosinofil: ReferenceNumber,
    // Limfosit: ReferenceNumber,
    // Monosit: ReferenceNumber,
    HitungJenisItem: HitungJenisItemBaseline,
    UrinalisisItem: UrinalisisItemBaseline
}

interface EritrositIndexBaseline {
    MCV: ReferenceNumber,
    MCH: ReferenceNumber,
    MCHC: ReferenceNumber
}

interface HitungJenisItemBaseline {
    Basofil: ReferenceNumber,
    Eosinofil: ReferenceNumber,
    Neutrofil: ReferenceNumber,
    Limfosit: ReferenceNumber,
    Monosit: ReferenceNumber
}

interface UrinalisisItemBaseline {
    Warna: ReferenceString,
    Kejernihan: ReferenceString,
    PH: ReferenceNumber,
    BeratJenis: ReferenceNumber,
    Protein: ReferenceString,
    Reduksi: ReferenceString,
    Keton: ReferenceString,
    Bilirubin: ReferenceString,
    Urobilinogen: ReferenceString
}