import { useState } from 'react'
import { PatientList } from '@/components/patients/PatientList'
import { AddPatientForm } from '@/components/patients/AddPatientForm'
import type { Patient } from '@/types'

export function Patients() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const handlePatientAdded = () => {
    setRefreshKey(prev => prev + 1)
    setShowAddForm(false)
  }

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient)
    // TODO: Show patient details modal or navigate to patient detail page
    console.log('Selected patient:', patient)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
        <p className="text-gray-600 mt-2">Manage your patient records and information.</p>
      </div>

      {/* Patient List */}
      <PatientList
        key={refreshKey}
        onPatientSelect={handlePatientSelect}
        onAddPatient={() => setShowAddForm(true)}
      />

      {/* Add Patient Form */}
      <AddPatientForm
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        onPatientAdded={handlePatientAdded}
      />
    </div>
  )
}