export namespace structs {
	
	export class ReferenceString {
	    Reference: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceString(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Reference = source["Reference"];
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
	export class Baseline {
	    Haemoglobin: ReferenceFloat64;
	    Eritrosit: ReferenceFloat64;
	    EritrositIndex: EritrositIndexItemBaseline;
	    Leukosit: ReferenceFloat64;
	    EosinofilSingular: ReferenceFloat64;
	    Hematokrit: ReferenceFloat64;
	    Trombosit: ReferenceUint16;
	    LajuEndapDarah: ReferenceUint8;
	    GDP: ReferenceUint8;
	    CholesterolTotal: ReferenceFloat64;
	    Trigliserida: ReferenceUint16;
	    HDL: ReferenceFloat64;
	    LDL: ReferenceFloat64;
	    Creatinine: ReferenceFloat64;
	    BUN: ReferenceFloat64;
	    AsamUrat: ReferenceFloat64;
	    HitungJenisItem: HitungJenisItemBaseline;
	    UrinalisisItem: UrinalisisItemBaseline;
	
	    static createFrom(source: any = {}) {
	        return new Baseline(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Haemoglobin = this.convertValues(source["Haemoglobin"], ReferenceFloat64);
	        this.Eritrosit = this.convertValues(source["Eritrosit"], ReferenceFloat64);
	        this.EritrositIndex = this.convertValues(source["EritrositIndex"], EritrositIndexItemBaseline);
	        this.Leukosit = this.convertValues(source["Leukosit"], ReferenceFloat64);
	        this.EosinofilSingular = this.convertValues(source["EosinofilSingular"], ReferenceFloat64);
	        this.Hematokrit = this.convertValues(source["Hematokrit"], ReferenceFloat64);
	        this.Trombosit = this.convertValues(source["Trombosit"], ReferenceUint16);
	        this.LajuEndapDarah = this.convertValues(source["LajuEndapDarah"], ReferenceUint8);
	        this.GDP = this.convertValues(source["GDP"], ReferenceUint8);
	        this.CholesterolTotal = this.convertValues(source["CholesterolTotal"], ReferenceFloat64);
	        this.Trigliserida = this.convertValues(source["Trigliserida"], ReferenceUint16);
	        this.HDL = this.convertValues(source["HDL"], ReferenceFloat64);
	        this.LDL = this.convertValues(source["LDL"], ReferenceFloat64);
	        this.Creatinine = this.convertValues(source["Creatinine"], ReferenceFloat64);
	        this.BUN = this.convertValues(source["BUN"], ReferenceFloat64);
	        this.AsamUrat = this.convertValues(source["AsamUrat"], ReferenceFloat64);
	        this.HitungJenisItem = this.convertValues(source["HitungJenisItem"], HitungJenisItemBaseline);
	        this.UrinalisisItem = this.convertValues(source["UrinalisisItem"], UrinalisisItemBaseline);
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
	    date_created: number;
	
	    static createFrom(source: any = {}) {
	        return new Project(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.path = source["path"];
	        this.name = source["name"];
	        this.date_created = source["date_created"];
	    }
	}
	
	
	
	

}

