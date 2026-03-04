package structs

type MedicalData struct {
	Patient    Patient    `csv:",inline"`
	Indicators Indicators `csv:",inline"`
}

type Indicators struct {
	Hematologi  HematologiItem  `csv:",inline"`
	Urinalisis  UrinalisisItem  `csv:",inline"`
	KimiaKlinik KimiaKlinikItem `csv:",inline"`
}

type HematologiItem struct {
	DarahRutin     DarahRutinItem     `csv:",inline"`
	EritrositIndex EritrositIndexItem `csv:",inline"`
	HitungJenis    HitungJenisItem    `csv:",inline"`
}

type DarahRutinItem struct {
	Haemoglobin    float64 `json:"haemoglobin" csv:"haemoglobin,omitempty"`
	Leukosit       float64 `json:"leukosit" csv:"leukosit,omitempty"`
	Trombosit      uint16  `json:"trombosit" csv:"trombosit,omitempty"`
	Hematokrit     float64 `json:"hematokrit" csv:"hematokrit,omitempty"`
	Eritrosit      float64 `json:"eritrosit" csv:"eritrosit,omitempty"`
	LajuEndapDarah uint8   `json:"laju_endap_darah" csv:"laju_endap_darah,omitempty"`
}

type EritrositIndexItem struct {
	MCV  float64 `json:"mcv" csv:"mcv,omitempty"`
	MCH  float64 `json:"mch" csv:"mch,omitempty"`
	MCHC float64 `json:"mchc" csv:"mchc,omitempty"`
}

type HitungJenisItem struct {
	Basofil   float64 `json:"basofil" csv:"basofil,omitempty"`
	Eosinofil float64 `json:"eosinofil" csv:"eosinofil,omitempty"`
	Neutrofil float64 `json:"neutrofil" csv:"neutrofil,omitempty"`
	Limfosit  float64 `json:"limfosit" csv:"limfosit,omitempty"`
	Monosit   float64 `json:"monosit" csv:"monosit,omitempty"`
}

type UrinalisisItem struct {
	Warna           string      `json:"warna_urin" csv:"warna_urin,omitempty"`
	Kejernihan      string      `json:"kejernihan" csv:"kejernihan,omitempty"`
	PH              float64     `json:"pH" csv:"ph,omitempty"`
	BeratJenis      float64     `json:"berat_jenis" csv:"berat_jenis,omitempty"`
	Protein         string      `json:"protein" csv:"protein,omitempty"`
	Reduksi         string      `json:"reduksi" csv:"reduksi,omitempty"`
	Keton           string      `json:"keton" csv:"keton,omitempty"`
	Bilirubin       string      `json:"bilirubin" csv:"bilirubin,omitempty"`
	Urobilinogen    string      `json:"urobilinogen" csv:"urobilinogen,omitempty"`
	DarahHbEri      string      `csv:"darah_hb_eri"`
	Nitrit          string      `csv:"nitrit"`
	LekositEsterase string      `csv:"lekosit_esterase"`
	Sedimen         SedimenItem `csv:",inline"`
}

type SedimenItem struct {
	SLekosit   uint8  `csv:"s_lekosit"`
	SEritrosit uint8  `csv:"s_eritrosit"`
	SEpitel    uint8  `csv:"s_epitel"`
	SSilinder  string `csv:"s_silinder"`
	SKristal   string `csv:"s_kristal"`
	SBakteri   string `csv:"s_bakteri"`
	SJamur     string `csv:"s_jamur"`
	SLainLain  string `csv:"s_lain_lain"`
}

type KimiaKlinikItem struct {
	BilirubinTotal        float64 `csv:"bilirubin_total"`
	SGOT_AST              float64 `csv:"sgot_ast"`
	SGPT_ALT              float64 `csv:"sgpt_alt"`
	Cholinesterase        uint16  `csv:"cholinesterase"`
	FosfataseAlkali       uint8   `csv:"fosfatase_alkali"`
	GlukosaPuasa          float64 `csv:"glukosa_puasa"`
	Glukosa2Jam           float64 `csv:"glukosa_2_jam"`
	HbA1c                 float64 `csv:"hba1c"`
	RerataGlukosaDarah    float64 `csv:"rerata_glukosa_darah"`
	CholesterolTotal      float64 `csv:"cholesterol_total"`
	HDL                   float64 `json:"hdl" csv:"hdl,omitempty"`
	LDL                   float64 `json:"ldl" csv:"ldl,omitempty"`
	Trigliserida          uint16  `json:"trigliserida" csv:"trigliserida,omitempty"`
	RatioCholesterolTotal float64 `csv:"ratio_cholesterol_total"`
	Ureum                 float64 `csv:"ureum"`
	BUN                   float64 `json:"bun" csv:"bun,omitempty"`
	Kreatinin             float64 `json:"kreatinin"`
	AsamUrat              float64 `json:"asam_urat"`
}
