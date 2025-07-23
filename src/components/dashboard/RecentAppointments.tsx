import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, User, Calendar } from 'lucide-react'

interface Appointment {
  id: string
  patientName: string
  time: string
  treatment: string
  status: 'confirmed' | 'pending' | 'completed'
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Smith',
    time: '9:00 AM',
    treatment: 'Routine Cleaning',
    status: 'confirmed'
  },
  {
    id: '2',
    patientName: 'Sarah Johnson',
    time: '10:30 AM',
    treatment: 'Root Canal',
    status: 'confirmed'
  },
  {
    id: '3',
    patientName: 'Mike Davis',
    time: '2:00 PM',
    treatment: 'Crown Placement',
    status: 'pending'
  },
  {
    id: '4',
    patientName: 'Emily Wilson',
    time: '3:30 PM',
    treatment: 'Consultation',
    status: 'confirmed'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'completed':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function RecentAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 mr-2" />
          Today's Appointments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{appointment.patientName}</p>
                  <p className="text-sm text-gray-500">{appointment.treatment}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {appointment.time}
                </div>
                <Badge className={getStatusColor(appointment.status)}>
                  {appointment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}