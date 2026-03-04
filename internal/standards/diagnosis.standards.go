package standards

import Structs "ixfredocs/internal/structs"

var DiagnosisFitWithNote = &Structs.DiagnosisFitWithNoteIndicatorsBaseline{
	Haemoglobin:      Structs.ReferenceFloat64{Min: 8, Max: 13.5},
	Eritrosit:        Structs.ReferenceFloat64{Min: 6}, // > 6000000 + Hb > 18
	Leukosit:         Structs.ReferenceFloat64{Min: 11.3, Max: 15},
	Eosinofil:        Structs.ReferenceFloat64{Min: 2 * HitungJenisBaseline.Eosinofil.Max},
	Trombosit:        Structs.ReferenceUint16{Min: 100, Max: 500}, // < 100000 || > 500000
	LajuEndapDarah:   Structs.ReferenceUint8{Min: 50},
	GDP:              Structs.ReferenceUint16{Min: 125},
	CholesterolTotal: Structs.ReferenceFloat64{Min: 200},
	Trigliserida:     Structs.ReferenceUint16{Min: 150, Max: 500}, // 150 < val < 500
	LDL:              Structs.ReferenceFloat64{Min: 150},
	KreatininLK:      Structs.ReferenceFloat64{Min: 1.17, Max: 5}, // normal < val < 5
	KreatininPR:      Structs.ReferenceFloat64{Min: 0.95, Max: 5}, // normal < val < 5
	BUN:              Structs.ReferenceFloat64{Min: ((0.2 * KimiaKlinikBaseline.BUN.Max) + KimiaKlinikBaseline.BUN.Max)},
}

var DiagnosisTemporaryUnfit = &Structs.DiagnosisFitWithNoteIndicatorsBaseline{
	Haemoglobin:      Structs.ReferenceFloat64{Min: 8}, // < 8
	Eritrosit:        DiagnosisFitWithNote.Eritrosit,
	Leukosit:         Structs.ReferenceFloat64{Min: 15}, // > 15000
	Eosinofil:        DiagnosisFitWithNote.Eosinofil,
	Trombosit:        Structs.ReferenceUint16{Min: 100}, // < 100000
	LajuEndapDarah:   DiagnosisFitWithNote.LajuEndapDarah,
	GDP:              Structs.ReferenceUint16{Min: 70, Max: 400}, // < 70 || > 400
	CholesterolTotal: DiagnosisFitWithNote.CholesterolTotal,
	Trigliserida:     Structs.ReferenceUint16{Max: 499}, // >= 500
	LDL:              DiagnosisFitWithNote.LDL,
	KreatininLK:      Structs.ReferenceFloat64{Max: 5}, // > 5
	KreatininPR:      Structs.ReferenceFloat64{Max: 5}, // > 5
	BUN:              DiagnosisFitWithNote.BUN,
}
