export interface IndicatorBaseline {
    HematologiBaseline: HematologiItemBaseline,
    UrinalisisBaseline: UrinalisisItemBaseline,
    KimiaKlinikBaseline: KimiaKlinikItemBaseline,
}

interface HematologiItemBaseline {
    DarahRutinBaseline: DarahRutinItemBaseline,
    EritrositIndexBaseline: EritrositIndexItemBaseline,
    HitungJenisBaseline: HitungJenisItemBaseline,
}

interface DarahRutinItemBaseline {
    Haemoglobin: ReferenceNumber,
    Leukosit: ReferenceNumber,
    Trombosit: ReferenceNumber,
    Hematokrit: ReferenceNumber,
    Eritrosit: ReferenceNumber,
    LajuEndapDarah: ReferenceNumber,
}

interface EritrositIndexItemBaseline {
    MCV: ReferenceNumber,
    MCH: ReferenceNumber,
    MCHC: ReferenceNumber,
}

interface HitungJenisItemBaseline {
    Basofil: ReferenceNumber,
    Eosinofil: ReferenceNumber,
    Neutrofil: ReferenceNumber,
    Limfosit: ReferenceNumber,
    Monosit: ReferenceNumber,
}

interface KimiaKlinikItemBaseline {
    BilirubinTotal: ReferenceNumber,
    SGOT_AST: ReferenceNumber,
    SGPT_ALT: ReferenceNumber,
    Cholinesterase: ReferenceNumber,
    FosfataseAlkali: ReferenceNumber,
    GlukosaPuasa: ReferenceNumber,
    Glukosa2Jam: ReferenceNumber,
    HbA1c: ReferenceNumber,
    RerataGlukosaDarah: ReferenceNumber,
    CholesterolTotal: ReferenceNumber,
    HDL: ReferenceNumber,
    LDL: ReferenceNumber,
    Trigliserida: ReferenceNumber,
    RatioCholesterolTotal: ReferenceNumber,
    Ureum: ReferenceNumber,
    BUN: ReferenceNumber,
    Kreatinin: ReferenceNumber,
    AsamUrat: ReferenceNumber,    
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
    Urobilinogen: ReferenceString,
    DarahHbEri: ReferenceString,
    Nitrit: ReferenceString
    LekositEsterase: ReferenceString,
    SedimenItem: SedimenItemBaseline,
}

interface SedimenItemBaseline {
    SLekosit: ReferenceNumber,
    SEritrosit: ReferenceNumber,
    SEpitel: ReferenceNumber,
    SSilinder: ReferenceString,
    SKristal: ReferenceString,
    SBakteri: ReferenceString,
    SJamur: ReferenceString,
    SLainLain: ReferenceString,
}

export interface ReferenceNumber {
    Min: number,
    Max: number,
    Unit: string,
    Code: string
}

export interface ReferenceString {
    Reference: string
    Unit: string
}