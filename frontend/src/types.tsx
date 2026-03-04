import { indicators } from "./interfaces/medical_indicators"

export interface Patient {
    ID: string,
    Nama: string
}

export interface MedicalData {
    Patient: Patient,
    Indicators: indicators
}
