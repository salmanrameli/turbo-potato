package standards

import Structs "ixfredocs/internal/structs"

var MedicalStandard = &Structs.Baseline{
	Haemoglobin: Structs.ReferenceFloat64{Min: 13.5, Max: 17.5, Unit: "g/dL", Code: "HGB"},
	Eritrosit:   Structs.ReferenceFloat64{Min: 4.5, Max: 5.9, Unit: "10^6 sel/uL", Code: "RBC"},
	EritrositIndex: Structs.EritrositIndexItemBaseline{
		MCV:  Structs.ReferenceFloat64{Min: 80.0, Max: 100.0, Unit: "fL"},
		MCH:  Structs.ReferenceFloat64{Min: 26.0, Max: 34.0, Unit: "pg/sel"},
		MCHC: Structs.ReferenceFloat64{Min: 31.0, Max: 37.0, Unit: "g/dL"},
	},
	Leukosit:          Structs.ReferenceFloat64{Min: 4.4, Max: 11.3, Unit: "10^3 sel/uL", Code: "WBC"},
	EosinofilSingular: Structs.ReferenceFloat64{Min: 1.0, Max: 3.0, Unit: "%"},
	Hematokrit:        Structs.ReferenceFloat64{Min: 41.0, Max: 53.0, Unit: "%", Code: "PCV"},
	Trombosit:         Structs.ReferenceUint16{Min: 150, Max: 450, Unit: "10^3 sel/uL", Code: "PLT"},
	LajuEndapDarah:    Structs.ReferenceUint8{Min: 1, Max: 16, Unit: "mm/jam", Code: "LED"},
	GDP:               Structs.ReferenceUint8{Min: 70, Max: 125, Unit: ""},
	CholesterolTotal:  Structs.ReferenceFloat64{Min: 0, Max: 200.0, Unit: "mg/dL"},
	Trigliserida:      Structs.ReferenceUint16{Min: 0, Max: 150, Unit: "mg/dL"},
	HDL:               Structs.ReferenceFloat64{Min: 40.0, Max: 60.0, Unit: "mg/dL"},
	LDL:               Structs.ReferenceFloat64{Min: 0, Max: 130.0, Unit: "mg/dL"},
	// CreatinineLK:      Structs.ReferenceFloat64{Min: 0.67, Max: 1.17, Unit: "mg/dL"},
	// CreatininePR:      Structs.ReferenceFloat64{Min: 0.51, Max: 0.95, Unit: "mg/dL"},
	BUN:      Structs.ReferenceFloat64{Min: 8.0, Max: 23.0, Unit: "mg/dL"},
	AsamUrat: Structs.ReferenceFloat64{Min: 3.4, Max: 7.0, Unit: "mg/dL"},
	HitungJenisItem: Structs.HitungJenisItemBaseline{
		Basofil:   Structs.ReferenceFloat64{Min: 0.0, Max: 1.0, Unit: "%"},
		Eosinofil: Structs.ReferenceFloat64{Min: 1.0, Max: 3.0, Unit: "%"},
		Neutrofil: Structs.ReferenceFloat64{Min: 50.0, Max: 70.0, Unit: "%"},
		Limfosit:  Structs.ReferenceFloat64{Min: 20.0, Max: 40.0, Unit: "%"},
		Monosit:   Structs.ReferenceFloat64{Min: 2.0, Max: 8.0, Unit: "%"},
	},
	UrinalisisItem: Structs.UrinalisisItemBaseline{
		Warna:        Structs.ReferenceString{Reference: "kuning"},
		Kejernihan:   Structs.ReferenceString{Reference: "jernih"},
		PH:           Structs.ReferenceFloat64{Min: 4.8, Max: 7.8},
		BeratJenis:   Structs.ReferenceFloat64{Min: 1.005, Max: 1.030},
		Protein:      Structs.ReferenceString{Reference: "negatif"},
		Reduksi:      Structs.ReferenceString{Reference: "negatif"},
		Keton:        Structs.ReferenceString{Reference: "negatif"},
		Bilirubin:    Structs.ReferenceString{Reference: "negatif"},
		Urobilinogen: Structs.ReferenceString{Reference: "negatif"},
	},
}
