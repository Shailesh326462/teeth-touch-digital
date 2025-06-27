
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";

interface DoctorsManagerProps {
  doctors: any[];
  onAdd: (doctor: any) => void;
  onDelete: (id: number) => void;
}

const DoctorsManager = ({ doctors, onAdd, onDelete }: DoctorsManagerProps) => {
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    education: "",
    bio: "",
    isActive: true
  });

  const handleAddDoctor = () => {
    if (newDoctor.name && newDoctor.specialization) {
      onAdd(newDoctor);
      setNewDoctor({
        name: "",
        specialization: "",
        experience: "",
        education: "",
        bio: "",
        isActive: true
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Add New Doctor
            <Plus className="h-5 w-5" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={(e) => setNewDoctor({...newDoctor, name: e.target.value})}
              />
              <Input
                placeholder="Specialization"
                value={newDoctor.specialization}
                onChange={(e) => setNewDoctor({...newDoctor, specialization: e.target.value})}
              />
              <Input
                placeholder="Experience (e.g., 10 years)"
                value={newDoctor.experience}
                onChange={(e) => setNewDoctor({...newDoctor, experience: e.target.value})}
              />
              <Input
                placeholder="Education"
                value={newDoctor.education}
                onChange={(e) => setNewDoctor({...newDoctor, education: e.target.value})}
              />
            </div>
            <Textarea
              placeholder="Doctor Bio"
              value={newDoctor.bio}
              onChange={(e) => setNewDoctor({...newDoctor, bio: e.target.value})}
            />
            <Button onClick={handleAddDoctor}>
              <Plus className="mr-2 h-4 w-4" />
              Add Doctor
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{doctor.name}</h3>
                      <Badge variant="outline">{doctor.specialization}</Badge>
                      <Badge variant={doctor.isActive ? "default" : "secondary"}>
                        {doctor.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Experience: {doctor.experience}</p>
                    <p className="text-sm text-gray-600 mb-1">Education: {doctor.education}</p>
                    <p className="text-gray-600 text-sm">{doctor.bio}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => onDelete(doctor.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorsManager;
