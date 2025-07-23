export interface Patient {
  id: string
  user_id: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  date_of_birth?: string
  address?: string
  emergency_contact_name?: string
  emergency_contact_phone?: string
  insurance_provider?: string
  insurance_policy_number?: string
  medical_history?: string
  allergies?: string
  created_at: string
  updated_at: string
}

export interface Appointment {
  id: string
  user_id: string
  patient_id: string
  appointment_date: string
  appointment_time: string
  duration: number
  treatment_type: string
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show'
  notes?: string
  created_at: string
  updated_at: string
}

export interface Treatment {
  id: string
  user_id: string
  patient_id: string
  appointment_id?: string
  treatment_name: string
  treatment_code?: string
  description?: string
  cost?: number
  status: 'planned' | 'in-progress' | 'completed' | 'cancelled'
  treatment_date?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface Billing {
  id: string
  user_id: string
  patient_id: string
  treatment_id?: string
  amount: number
  insurance_covered: number
  patient_payment: number
  status: 'pending' | 'paid' | 'overdue' | 'cancelled'
  invoice_date?: string
  due_date?: string
  notes?: string
  created_at: string
  updated_at: string
}