package structs

type MedicalData struct {
	Patient    Patient    `csv:",inline"`
	Indicators Indicators `csv:",inline"`
}

type EritrositIndexItem struct {
	MCV  float64 `json:"mcv" csv:"mcv,omitempty"`
	MCH  float64 `json:"mch" csv:"mch,omitempty"`
	MCHC float64 `json:"mchc" csv:"mchc,omitempty"`
}

type EritrositIndexItemBaseline struct {
	MCV  ReferenceFloat64
	MCH  ReferenceFloat64
	MCHC ReferenceFloat64
}

type HitungJenisItem struct {
	Basofil   float64 `json:"basofil" csv:"basofil,omitempty"`
	Eosinofil float64 `json:"eosinofil" csv:"eosinofil,omitempty"`
	Neutrofil float64 `json:"neutrofil" csv:"neutrofil,omitempty"`
	Limfosit  float64 `json:"limfosit" csv:"limfosit,omitempty"`
	Monosit   float64 `json:"monosit" csv:"monosit,omitempty"`
}

type HitungJenisItemBaseline struct {
	Basofil   ReferenceFloat64
	Eosinofil ReferenceFloat64
	Neutrofil ReferenceFloat64
	Limfosit  ReferenceFloat64
	Monosit   ReferenceFloat64
}

type Indicators struct {
	Haemoglobin    float64            `json:"haemoglobin" csv:"haemoglobin,omitempty"`
	Eritrosit      float64            `json:"eritrosit" csv:"eritrosit,omitempty"`
	EritrositIndex EritrositIndexItem `csv:",inline"`
	// MCV      float64 `json:"mcv" csv:"mcv,omitempty"`
	// MCH      float64 `json:"mch" csv:"mch,omitempty"`
	// MCHC     float64 `json:"mchc" csv:"mchc,omitempty"`
	// EosinofilSingular float64 `json:"eosinofil" csv:"eosinofil,omitempty"`
	Leukosit         float64 `json:"leukosit" csv:"leukosit,omitempty"`
	Hematokrit       float64 `json:"hematokrit" csv:"hematokrit,omitempty"`
	Trombosit        uint16  `json:"trombosit" csv:"trombosit,omitempty"`
	LajuEndapDarah   uint8   `json:"laju_endap_darah" csv:"laju_endap_darah,omitempty"`
	GDP              uint8   `json:"gdp" csv:"gdp,omitempty"`
	CholesterolTotal float64 `json:"cholesterol_total,omitempty"`
	Trigliserida     uint16  `json:"trigliserida" csv:"trigliserida,omitempty"`
	HDL              float64 `json:"hdl" csv:"hdl,omitempty"`
	LDL              float64 `json:"ldl" csv:"ldl,omitempty"`
	Creatinine       float64 `json:"creatinine"`
	// CreatinineLK     float64         `json:"creatinine_lk"`
	// CreatininePR     float64         `json:"creatinine_pr"`
	BUN         float64         `json:"bun" csv:"bun,omitempty"`
	AsamUrat    float64         `json:"asam_urat"`
	HitungJenis HitungJenisItem `csv:",inline"`
	// Basofil          float64         `json:"basofil" csv:"basofil,omitempty"`
	// Eosinofil        float64         `json:"eosinofil" csv:"eosinofil,omitempty"`
	// Neutrofil        float64         `json:"neutrofil" csv:"neutrofil,omitempty"`
	// Limfosit         float64         `json:"limfosit" csv:"limfosit,omitempty"`
	Monosit    float64        `json:"monosit" csv:"monosit,omitempty"`
	Urinalisis UrinalisisItem `csv:",inline"`
}

type UrinalisisItem struct {
	Warna        string  `json:"warna_urin" csv:"warna_urin,omitempty"`
	Kejernihan   string  `json:"kejernihan" csv:"kejernihan,omitempty"`
	PH           float64 `json:"pH" csv:"ph,omitempty"`
	BeratJenis   float64 `json:"berat_jenis" csv:"berat_jenis,omitempty"`
	Protein      string  `json:"protein" csv:"protein,omitempty"`
	Reduksi      string  `json:"reduksi" csv:"reduksi,omitempty"`
	Keton        string  `json:"keton" csv:"keton,omitempty"`
	Bilirubin    string  `json:"bilirubin" csv:"bilirubin,omitempty"`
	Urobilinogen string  `json:"urobilinogen" csv:"urobilinogen,omitempty"`
}

type Baseline struct {
	Haemoglobin       ReferenceFloat64
	Eritrosit         ReferenceFloat64
	EritrositIndex    EritrositIndexItemBaseline
	Leukosit          ReferenceFloat64
	EosinofilSingular ReferenceFloat64
	Hematokrit        ReferenceFloat64
	Trombosit         ReferenceUint16
	LajuEndapDarah    ReferenceUint8
	GDP               ReferenceUint8
	CholesterolTotal  ReferenceFloat64
	Trigliserida      ReferenceUint16
	HDL               ReferenceFloat64
	LDL               ReferenceFloat64
	Creatinine        ReferenceFloat64
	// CreatinineLK      ReferenceFloat64
	// CreatininePR      ReferenceFloat64
	BUN             ReferenceFloat64
	AsamUrat        ReferenceFloat64
	HitungJenisItem HitungJenisItemBaseline
	UrinalisisItem  UrinalisisItemBaseline
}

type UrinalisisItemBaseline struct {
	Warna        ReferenceString
	Kejernihan   ReferenceString
	PH           ReferenceFloat64
	BeratJenis   ReferenceFloat64
	Protein      ReferenceString
	Reduksi      ReferenceString
	Keton        ReferenceString
	Bilirubin    ReferenceString
	Urobilinogen ReferenceString
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
}
