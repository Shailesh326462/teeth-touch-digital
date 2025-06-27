
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Save } from "lucide-react";

interface ServicesManagerProps {
  services: any[];
  onAdd: (service: any) => void;
  onEdit: (service: any) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const ServicesManager = ({ services, onAdd, onEdit, onDelete, onToggleStatus }: ServicesManagerProps) => {
  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isActive: true
  });

  const handleAddService = () => {
    if (newService.name && newService.description && newService.price) {
      onAdd(newService);
      setNewService({
        name: "",
        description: "",
        price: "",
        category: "",
        isActive: true
      });
    }
  };

  const handleEditService = (service: any) => {
    setEditingService(service);
  };

  const handleSaveEdit = () => {
    if (editingService) {
      onEdit(editingService);
      setEditingService(null);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Add New Service
            <Plus className="h-5 w-5" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Service Name"
              value={newService.name}
              onChange={(e) => setNewService({...newService, name: e.target.value})}
            />
            <Input
              placeholder="Price (e.g., $120)"
              value={newService.price}
              onChange={(e) => setNewService({...newService, price: e.target.value})}
            />
            <Input
              placeholder="Category"
              value={newService.category}
              onChange={(e) => setNewService({...newService, category: e.target.value})}
            />
            <div className="md:col-span-2">
              <Textarea
                placeholder="Service Description"
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
              />
            </div>
            <Button onClick={handleAddService} className="md:col-span-2">
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="border rounded-lg p-4">
                {editingService?.id === service.id ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        value={editingService.name}
                        onChange={(e) => setEditingService({...editingService, name: e.target.value})}
                      />
                      <Input
                        value={editingService.price}
                        onChange={(e) => setEditingService({...editingService, price: e.target.value})}
                      />
                      <Input
                        value={editingService.category}
                        onChange={(e) => setEditingService({...editingService, category: e.target.value})}
                      />
                      <div className="md:col-span-2">
                        <Textarea
                          value={editingService.description}
                          onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveEdit} size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button onClick={() => setEditingService(null)} variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <Badge variant={service.isActive ? "default" : "secondary"}>
                          {service.isActive ? "Active" : "Inactive"}
                        </Badge>
                        <Badge variant="outline">{service.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      <p className="font-semibold text-green-600">{service.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => onToggleStatus(service.id)}
                        variant="outline"
                        size="sm"
                      >
                        {service.isActive ? "Deactivate" : "Activate"}
                      </Button>
                      <Button
                        onClick={() => handleEditService(service)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => onDelete(service.id)}
                        variant="outline"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesManager;
