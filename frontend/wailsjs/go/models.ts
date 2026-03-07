export namespace structs {
	
	export class ReferenceUint8 {
	    Min: number;
	    Max: number;
	    Unit: string;
	    Code: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceUint8(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Min = source["Min"];
	        this.Max = source["Max"];
	        this.Unit = source["Unit"];
	        this.Code = source["Code"];
	    }
	}
	export class ReferenceUint16 {
	    Min: number;
	    Max: number;
	    Unit: string;
	    Code: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceUint16(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Min = source["Min"];
	        this.Max = source["Max"];
	        this.Unit = source["Unit"];
	        this.Code = source["Code"];
	    }
	}
	export class ReferenceFloat64 {
	    Min: number;
	    Max: number;
	    Unit: string;
	    Code: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceFloat64(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Min = source["Min"];
	        this.Max = source["Max"];
	        this.Unit = source["Unit"];
	        this.Code = source["Code"];
	    }
	}
	export class DarahRutinItemBaseline {
	    Haemoglobin: ReferenceFloat64;
	    Leukosit: ReferenceFloat64;
	    Trombosit: ReferenceUint16;
	    Hematokrit: ReferenceFloat64;
	    Eritrosit: ReferenceFloat64;
	    LajuEndapDarah: ReferenceUint8;
	
	    static createFrom(source: any = {}) {
	        return new DarahRutinItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Haemoglobin = this.convertValues(source["Haemoglobin"], ReferenceFloat64);
	        this.Leukosit = this.convertValues(source["Leukosit"], ReferenceFloat64);
	        this.Trombosit = this.convertValues(source["Trombosit"], ReferenceUint16);
	        this.Hematokrit = this.convertValues(source["Hematokrit"], ReferenceFloat64);
	        this.Eritrosit = this.convertValues(source["Eritrosit"], ReferenceFloat64);
	        this.LajuEndapDarah = this.convertValues(source["LajuEndapDarah"], ReferenceUint8);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EritrositIndexItemBaseline {
	    MCV: ReferenceFloat64;
	    MCH: ReferenceFloat64;
	    MCHC: ReferenceFloat64;
	
	    static createFrom(source: any = {}) {
	        return new EritrositIndexItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.MCV = this.convertValues(source["MCV"], ReferenceFloat64);
	        this.MCH = this.convertValues(source["MCH"], ReferenceFloat64);
	        this.MCHC = this.convertValues(source["MCHC"], ReferenceFloat64);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class HitungJenisItemBaseline {
	    Basofil: ReferenceFloat64;
	    Eosinofil: ReferenceFloat64;
	    Neutrofil: ReferenceFloat64;
	    Limfosit: ReferenceFloat64;
	    Monosit: ReferenceFloat64;
	
	    static createFrom(source: any = {}) {
	        return new HitungJenisItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Basofil = this.convertValues(source["Basofil"], ReferenceFloat64);
	        this.Eosinofil = this.convertValues(source["Eosinofil"], ReferenceFloat64);
	        this.Neutrofil = this.convertValues(source["Neutrofil"], ReferenceFloat64);
	        this.Limfosit = this.convertValues(source["Limfosit"], ReferenceFloat64);
	        this.Monosit = this.convertValues(source["Monosit"], ReferenceFloat64);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class HematologiItemBaseline {
	    DarahRutinItem: DarahRutinItemBaseline;
	    EritrositIndex: EritrositIndexItemBaseline;
	    HitungJenisItem: HitungJenisItemBaseline;
	
	    static createFrom(source: any = {}) {
	        return new HematologiItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.DarahRutinItem = this.convertValues(source["DarahRutinItem"], DarahRutinItemBaseline);
	        this.EritrositIndex = this.convertValues(source["EritrositIndex"], EritrositIndexItemBaseline);
	        this.HitungJenisItem = this.convertValues(source["HitungJenisItem"], HitungJenisItemBaseline);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class KimiaKlinikItemBaseline {
	    BilirubinTotal: ReferenceFloat64;
	    SGOT_AST: ReferenceFloat64;
	    SGPT_ALT: ReferenceFloat64;
	    Cholinesterase: ReferenceUint16;
	    FosfataseAlkali: ReferenceUint8;
	    GlukosaPuasa: ReferenceFloat64;
	    Glukosa2Jam: ReferenceFloat64;
	    HbA1c: ReferenceFloat64;
	    RerataGlukosaDarah: ReferenceFloat64;
	    CholesterolTotal: ReferenceFloat64;
	    HDL: ReferenceFloat64;
	    LDL: ReferenceFloat64;
	    Trigliserida: ReferenceFloat64;
	    RatioCholesterolTotal: ReferenceFloat64;
	    Ureum: ReferenceFloat64;
	    BUN: ReferenceFloat64;
	    Kreatinin: ReferenceFloat64;
	    AsamUrat: ReferenceFloat64;
	
	    static createFrom(source: any = {}) {
	        return new KimiaKlinikItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BilirubinTotal = this.convertValues(source["BilirubinTotal"], ReferenceFloat64);
	        this.SGOT_AST = this.convertValues(source["SGOT_AST"], ReferenceFloat64);
	        this.SGPT_ALT = this.convertValues(source["SGPT_ALT"], ReferenceFloat64);
	        this.Cholinesterase = this.convertValues(source["Cholinesterase"], ReferenceUint16);
	        this.FosfataseAlkali = this.convertValues(source["FosfataseAlkali"], ReferenceUint8);
	        this.GlukosaPuasa = this.convertValues(source["GlukosaPuasa"], ReferenceFloat64);
	        this.Glukosa2Jam = this.convertValues(source["Glukosa2Jam"], ReferenceFloat64);
	        this.HbA1c = this.convertValues(source["HbA1c"], ReferenceFloat64);
	        this.RerataGlukosaDarah = this.convertValues(source["RerataGlukosaDarah"], ReferenceFloat64);
	        this.CholesterolTotal = this.convertValues(source["CholesterolTotal"], ReferenceFloat64);
	        this.HDL = this.convertValues(source["HDL"], ReferenceFloat64);
	        this.LDL = this.convertValues(source["LDL"], ReferenceFloat64);
	        this.Trigliserida = this.convertValues(source["Trigliserida"], ReferenceFloat64);
	        this.RatioCholesterolTotal = this.convertValues(source["RatioCholesterolTotal"], ReferenceFloat64);
	        this.Ureum = this.convertValues(source["Ureum"], ReferenceFloat64);
	        this.BUN = this.convertValues(source["BUN"], ReferenceFloat64);
	        this.Kreatinin = this.convertValues(source["Kreatinin"], ReferenceFloat64);
	        this.AsamUrat = this.convertValues(source["AsamUrat"], ReferenceFloat64);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SedimenItemBaseline {
	    SLekosit: ReferenceUint8;
	    SEritrosit: ReferenceUint8;
	    SEpitel: ReferenceUint8;
	    SSilinder: ReferenceString;
	    SKristal: ReferenceString;
	    SBakteri: ReferenceString;
	    SJamur: ReferenceString;
	    SLainLain: ReferenceString;
	
	    static createFrom(source: any = {}) {
	        return new SedimenItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SLekosit = this.convertValues(source["SLekosit"], ReferenceUint8);
	        this.SEritrosit = this.convertValues(source["SEritrosit"], ReferenceUint8);
	        this.SEpitel = this.convertValues(source["SEpitel"], ReferenceUint8);
	        this.SSilinder = this.convertValues(source["SSilinder"], ReferenceString);
	        this.SKristal = this.convertValues(source["SKristal"], ReferenceString);
	        this.SBakteri = this.convertValues(source["SBakteri"], ReferenceString);
	        this.SJamur = this.convertValues(source["SJamur"], ReferenceString);
	        this.SLainLain = this.convertValues(source["SLainLain"], ReferenceString);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ReferenceString {
	    Reference: string;
	    Unit: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceString(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Reference = source["Reference"];
	        this.Unit = source["Unit"];
	    }
	}
	export class UrinalisisItemBaseline {
	    Warna: ReferenceString;
	    Kejernihan: ReferenceString;
	    PH: ReferenceFloat64;
	    BeratJenis: ReferenceFloat64;
	    Protein: ReferenceString;
	    Reduksi: ReferenceString;
	    Keton: ReferenceString;
	    Bilirubin: ReferenceString;
	    Urobilinogen: ReferenceString;
	    DarahHbEri: ReferenceString;
	    Nitrit: ReferenceString;
	    LekositEsterase: ReferenceString;
	    SedimenItem: SedimenItemBaseline;
	
	    static createFrom(source: any = {}) {
	        return new UrinalisisItemBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Warna = this.convertValues(source["Warna"], ReferenceString);
	        this.Kejernihan = this.convertValues(source["Kejernihan"], ReferenceString);
	        this.PH = this.convertValues(source["PH"], ReferenceFloat64);
	        this.BeratJenis = this.convertValues(source["BeratJenis"], ReferenceFloat64);
	        this.Protein = this.convertValues(source["Protein"], ReferenceString);
	        this.Reduksi = this.convertValues(source["Reduksi"], ReferenceString);
	        this.Keton = this.convertValues(source["Keton"], ReferenceString);
	        this.Bilirubin = this.convertValues(source["Bilirubin"], ReferenceString);
	        this.Urobilinogen = this.convertValues(source["Urobilinogen"], ReferenceString);
	        this.DarahHbEri = this.convertValues(source["DarahHbEri"], ReferenceString);
	        this.Nitrit = this.convertValues(source["Nitrit"], ReferenceString);
	        this.LekositEsterase = this.convertValues(source["LekositEsterase"], ReferenceString);
	        this.SedimenItem = this.convertValues(source["SedimenItem"], SedimenItemBaseline);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class IndicatorBaseline {
	    HematologiBaseline: HematologiItemBaseline;
	    UrinalisisBaseline: UrinalisisItemBaseline;
	    KimiaKlinikBaseline: KimiaKlinikItemBaseline;
	
	    static createFrom(source: any = {}) {
	        return new IndicatorBaseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.HematologiBaseline = this.convertValues(source["HematologiBaseline"], HematologiItemBaseline);
	        this.UrinalisisBaseline = this.convertValues(source["UrinalisisBaseline"], UrinalisisItemBaseline);
	        this.KimiaKlinikBaseline = this.convertValues(source["KimiaKlinikBaseline"], KimiaKlinikItemBaseline);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class Patient {
	    ID: string;
	    Nama: string;
	
	    static createFrom(source: any = {}) {
	        return new Patient(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.Nama = source["Nama"];
	    }
	}
	export class Project {
	    id: string;
	    path: string;
	    name: string;
	    diagnosis_standards: number[];
	    date_created: number;
	
	    static createFrom(source: any = {}) {
	        return new Project(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.path = source["path"];
	        this.name = source["name"];
	        this.diagnosis_standards = source["diagnosis_standards"];
	        this.date_created = source["date_created"];
	    }
	}
	
	
	
	
	

}

