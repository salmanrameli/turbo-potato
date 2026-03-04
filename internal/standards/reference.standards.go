package standards

import Structs "ixfredocs/internal/structs"

var StandardIndicators = &Structs.IndicatorBaseline{
	HematologiBaseline:  *HematologiBaseLine,
	UrinalisisBaseline:  *UrinalisisBaseline,
	KimiaKlinikBaseline: *KimiaKlinikBaseline,
}

var HematologiBaseLine = &Structs.HematologiItemBaseline{
	DarahRutinItem:  *DarahRutinBaseline,
	EritrositIndex:  *EritrositIndexBaseline,
	HitungJenisItem: *HitungJenisBaseline,
}

var DarahRutinBaseline = &Structs.DarahRutinItemBaseline{
	Haemoglobin:    Structs.ReferenceFloat64{Min: 13.5, Max: 17.5, Unit: "g/dL", Code: "HGB"},
	Leukosit:       Structs.ReferenceFloat64{Min: 4.4, Max: 11.3, Unit: "10^3 sel/uL", Code: "WBC"},
	Trombosit:      Structs.ReferenceUint16{Min: 150, Max: 450, Unit: "10^3 sel/uL", Code: "PLT"},
	Hematokrit:     Structs.ReferenceFloat64{Min: 41.0, Max: 53.0, Unit: "%", Code: "PCV"},
	Eritrosit:      Structs.ReferenceFloat64{Min: 4.5, Max: 5.9, Unit: "10^6 sel/uL", Code: "RBC"},
	LajuEndapDarah: Structs.ReferenceUint8{Min: 1, Max: 16, Unit: "mm/jam", Code: "LED"},
}

var EritrositIndexBaseline = &Structs.EritrositIndexItemBaseline{
	MCV:  Structs.ReferenceFloat64{Min: 80.0, Max: 100.0, Unit: "fL"},
	MCH:  Structs.ReferenceFloat64{Min: 26.0, Max: 34.0, Unit: "pg/sel"},
	MCHC: Structs.ReferenceFloat64{Min: 31.0, Max: 37.0, Unit: "g/dL"},
}

var HitungJenisBaseline = &Structs.HitungJenisItemBaseline{
	Basofil:   Structs.ReferenceFloat64{Min: 0.0, Max: 1.0, Unit: "%"},
	Eosinofil: Structs.ReferenceFloat64{Min: 1.0, Max: 3.0, Unit: "%"},
	Neutrofil: Structs.ReferenceFloat64{Min: 50.0, Max: 70.0, Unit: "%"},
	Limfosit:  Structs.ReferenceFloat64{Min: 20.0, Max: 40.0, Unit: "%"},
	Monosit:   Structs.ReferenceFloat64{Min: 2.0, Max: 8.0, Unit: "%"},
}

var KimiaKlinikBaseline = &Structs.KimiaKlinikItemBaseline{
	BilirubinTotal:        Structs.ReferenceFloat64{Max: 1, Unit: "mg/dL"},
	SGOT_AST:              Structs.ReferenceFloat64{Max: 40, Unit: "U/L"},
	SGPT_ALT:              Structs.ReferenceFloat64{Max: 41, Unit: "U/L"},
	Cholinesterase:        Structs.ReferenceUint16{Min: 5400, Max: 13200, Unit: "U/L", Code: "CHE"},
	FosfataseAlkali:       Structs.ReferenceUint8{Min: 40, Max: 130, Unit: "U/L", Code: "ALP"},
	GlukosaPuasa:          Structs.ReferenceFloat64{Min: 70, Max: 99, Unit: "mg/dL"},
	Glukosa2Jam:           Structs.ReferenceFloat64{Max: 140, Unit: "mg/dL"},
	HbA1c:                 Structs.ReferenceFloat64{Max: 6.5, Unit: "%"},
	RerataGlukosaDarah:    Structs.ReferenceFloat64{Unit: "mg/dL"},
	CholesterolTotal:      Structs.ReferenceFloat64{Max: 200.0, Unit: "mg/dL"},
	HDL:                   Structs.ReferenceFloat64{Min: 40.0, Max: 60.0, Unit: "mg/dL"},
	LDL:                   Structs.ReferenceFloat64{Min: 0, Max: 130.0, Unit: "mg/dL"},
	Trigliserida:          Structs.ReferenceUint16{Min: 0, Max: 150, Unit: "mg/dL"},
	RatioCholesterolTotal: Structs.ReferenceFloat64{Max: 4.5},
	Ureum:                 Structs.ReferenceFloat64{Min: 17, Max: 49, Unit: "mg/dL"},
	BUN:                   Structs.ReferenceFloat64{Min: 8.0, Max: 23.0, Unit: "mg/dL"},
	AsamUrat:              Structs.ReferenceFloat64{Min: 3.4, Max: 7.0, Unit: "mg/dL"},
}

var UrinalisisBaseline = &Structs.UrinalisisItemBaseline{
	Warna:           Structs.ReferenceString{Reference: "kuning"},
	Kejernihan:      Structs.ReferenceString{Reference: "jernih"},
	PH:              Structs.ReferenceFloat64{Min: 4.8, Max: 7.8},
	BeratJenis:      Structs.ReferenceFloat64{Min: 1.005, Max: 1.030},
	Protein:         Structs.ReferenceString{Reference: "negatif"},
	Reduksi:         Structs.ReferenceString{Reference: "negatif"},
	Keton:           Structs.ReferenceString{Reference: "negatif"},
	Bilirubin:       Structs.ReferenceString{Reference: "negatif"},
	Urobilinogen:    Structs.ReferenceString{Reference: "negatif"},
	DarahHbEri:      Structs.ReferenceString{Reference: "negatif"},
	Nitrit:          Structs.ReferenceString{Reference: "negatif"},
	LekositEsterase: Structs.ReferenceString{Reference: "negatif"},
	SedimenItem: Structs.SedimenItemBaseline{
		SLekosit:   Structs.ReferenceUint8{Min: 4, Max: 5, Unit: "/LPB"},
		SEritrosit: Structs.ReferenceUint8{Min: 0, Max: 1, Unit: "/LPB"},
		SEpitel:    Structs.ReferenceUint8{Unit: "/LPK"},
		SSilinder:  Structs.ReferenceString{Reference: "negatif", Unit: "/LPK"},
		SKristal:   Structs.ReferenceString{Reference: "negatif", Unit: "/LPK"},
		SBakteri:   Structs.ReferenceString{Reference: "negatif", Unit: "/LPB"},
		SJamur:     Structs.ReferenceString{Reference: "negatif", Unit: "/LPB"},
		SLainLain:  Structs.ReferenceString{Reference: "negatif"},
	},
}
