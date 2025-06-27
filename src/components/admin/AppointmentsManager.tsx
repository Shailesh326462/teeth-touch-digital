
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppointmentsManagerProps {
  appointments: any[];
  onUpdateStatus: (id: number, status: string) => void;
}

const AppointmentsManager = ({ appointments, onUpdateStatus }: AppointmentsManagerProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointment Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No appointment requests yet.</p>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">{appointment.firstName} {appointment.lastName}</h3>
                    <p className="text-sm text-gray-600">{appointment.email} | {appointment.phone}</p>
                    <p className="text-sm text-gray-600">DOB: {appointment.dateOfBirth}</p>
                    <p className="text-sm text-gray-600">Service: {appointment.serviceType}</p>
                    <p className="text-sm text-gray-600">Preferred: {appointment.preferredDate} at {appointment.preferredTime}</p>
                    <p className="text-sm text-gray-600">Reason: {appointment.reasonForVisit}</p>
                    {appointment.isNewPatient && <Badge variant="secondary" className="mt-1">New Patient</Badge>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Badge variant={appointment.status === "Confirmed" ? "default" : appointment.status === "Pending" ? "secondary" : "destructive"}>
                      {appointment.status}
                    </Badge>
                    <div className="flex space-x-1">
                      <Button
                        onClick={() => onUpdateStatus(appointment.id, "Confirmed")}
                        size="sm"
                        variant="outline"
                      >
                        Confirm
                      </Button>
                      <Button
                        onClick={() => onUpdateStatus(appointment.id, "Cancelled")}
                        size="sm"
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
                {appointment.medicalConditions && (
                  <div className="mt-2 p-2 bg-yellow-50 rounded">
                    <p className="text-sm"><strong>Medical Conditions:</strong> {appointment.medicalConditions}</p>
                  </div>
                )}
                {appointment.medications && (
                  <div className="mt-2 p-2 bg-blue-50 rounded">
                    <p className="text-sm"><strong>Medications:</strong> {appointment.medications}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentsManager;
