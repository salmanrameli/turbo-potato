package structs

type Project struct {
	ID                 string   `json:"id"`
	Path               string   `json:"path"`
	Name               string   `json:"name"`
	DiagnosisStandards []string `json:"diagnosis_standards"`
	DateCreated        int64    `json:"date_created"`
}
