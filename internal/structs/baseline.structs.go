package structs

type IndicatorBaseline struct {
	HematologiBaseline  HematologiItemBaseline
	UrinalisisBaseline  UrinalisisItemBaseline
	KimiaKlinikBaseline KimiaKlinikItemBaseline
}

type HematologiItemBaseline struct {
	DarahRutinItem  DarahRutinItemBaseline
	EritrositIndex  EritrositIndexItemBaseline
	HitungJenisItem HitungJenisItemBaseline
}

type DarahRutinItemBaseline struct {
	Haemoglobin    ReferenceFloat64
	Leukosit       ReferenceFloat64
	Trombosit      ReferenceUint16
	Hematokrit     ReferenceFloat64
	Eritrosit      ReferenceFloat64
	LajuEndapDarah ReferenceUint8
}

type EritrositIndexItemBaseline struct {
	MCV  ReferenceFloat64
	MCH  ReferenceFloat64
	MCHC ReferenceFloat64
}

type HitungJenisItemBaseline struct {
	Basofil   ReferenceFloat64
	Eosinofil ReferenceFloat64
	Neutrofil ReferenceFloat64
	Limfosit  ReferenceFloat64
	Monosit   ReferenceFloat64
}

type UrinalisisItemBaseline struct {
	Warna           ReferenceString
	Kejernihan      ReferenceString
	PH              ReferenceFloat64
	BeratJenis      ReferenceFloat64
	Protein         ReferenceString
	Reduksi         ReferenceString
	Keton           ReferenceString
	Bilirubin       ReferenceString
	Urobilinogen    ReferenceString
	DarahHbEri      ReferenceString
	Nitrit          ReferenceString
	LekositEsterase ReferenceString
	SedimenItem     SedimenItemBaseline
}

type KimiaKlinikItemBaseline struct {
	BilirubinTotal        ReferenceFloat64
	SGOT_AST              ReferenceFloat64
	SGPT_ALT              ReferenceFloat64
	Cholinesterase        ReferenceUint16
	FosfataseAlkali       ReferenceUint8
	GlukosaPuasa          ReferenceFloat64
	Glukosa2Jam           ReferenceFloat64
	HbA1c                 ReferenceFloat64
	RerataGlukosaDarah    ReferenceFloat64
	CholesterolTotal      ReferenceFloat64
	HDL                   ReferenceFloat64
	LDL                   ReferenceFloat64
	Trigliserida          ReferenceUint16
	RatioCholesterolTotal ReferenceFloat64
	Ureum                 ReferenceFloat64
	BUN                   ReferenceFloat64
	Kreatinin             ReferenceFloat64
	AsamUrat              ReferenceFloat64
}

type SedimenItemBaseline struct {
	SLekosit   ReferenceUint8
	SEritrosit ReferenceUint8
	SEpitel    ReferenceUint8
	SSilinder  ReferenceString
	SKristal   ReferenceString
	SBakteri   ReferenceString
	SJamur     ReferenceString
	SLainLain  ReferenceString
}

type ReferenceFloat64 struct {
	Min  float64
	Max  float64
	Unit string
	Code string
}

type ReferenceUint8 struct {
	Min  uint8
	Max  uint8
	Unit string
	Code string
}

type ReferenceUint16 struct {
	Min  uint16
	Max  uint16
	Unit string
	Code string
}

type ReferenceString struct {
	Reference string
	Unit      string
}
