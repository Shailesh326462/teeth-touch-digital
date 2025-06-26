
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Lock, 
  LogIn, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Users,
  Calendar,
  MessageSquare,
  Settings
} from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Cleaning",
      description: "Professional teeth cleaning and oral examination",
      price: "$120",
      category: "General Dentistry",
      isActive: true
    },
    {
      id: 2,
      name: "Teeth Whitening",
      description: "Professional whitening treatment for brighter smile",
      price: "$450",
      category: "Cosmetic Dentistry",
      isActive: true
    },
    {
      id: 3,
      name: "Dental Implants",
      description: "Permanent tooth replacement solution",
      price: "$2,500",
      category: "Restorative Dentistry",
      isActive: true
    }
  ]);
  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isActive: true
  });
  const { toast } = useToast();

  // Mock authentication - in a real app, this would be handled by a backend
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === "admin" && credentials.password === "dental123") {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    setCredentials({ username: "", password: "" });
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  // Check if user is already authenticated on page load
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAddService = () => {
    if (newService.name && newService.description && newService.price) {
      const service = {
        id: Math.max(...services.map(s => s.id)) + 1,
        ...newService
      };
      setServices([...services, service]);
      setNewService({
        name: "",
        description: "",
        price: "",
        category: "",
        isActive: true
      });
      toast({
        title: "Service Added",
        description: "New service has been added successfully.",
      });
    }
  };

  const handleEditService = (service: any) => {
    setEditingService(service);
  };

  const handleSaveEdit = () => {
    if (editingService) {
      setServices(services.map(s => 
        s.id === editingService.id ? editingService : s
      ));
      setEditingService(null);
      toast({
        title: "Service Updated",
        description: "Service has been updated successfully.",
      });
    }
  };

  const handleDeleteService = (id: number) => {
    setServices(services.filter(s => s.id !== id));
    toast({
      title: "Service Deleted",
      description: "Service has been deleted successfully.",
    });
  };

  const toggleServiceStatus = (id: number) => {
    setServices(services.map(s => 
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
  };

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 text-white p-4 rounded-full">
                <Lock className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <p className="text-gray-600">Access the admin dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </form>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
              <p className="text-blue-800"><strong>Demo Credentials:</strong></p>
              <p className="text-blue-700">Username: admin</p>
              <p className="text-blue-700">Password: dental123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-600">Smile Dental Management</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "dashboard" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab("services")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "services" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Manage Services
                  </button>
                  <button
                    onClick={() => setActiveTab("appointments")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "appointments" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Appointments
                  </button>
                  <button
                    onClick={() => setActiveTab("messages")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "messages" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Messages
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{services.length}</div>
                      <p className="text-xs text-muted-foreground">
                        {services.filter(s => s.isActive).length} active services
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Appointments</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">
                        This week
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">New Patients</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">
                        This month
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">New appointment request from John Doe</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">Service "Teeth Whitening" updated</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">New contact form submission</p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "services" && (
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
                                  onClick={() => toggleServiceStatus(service.id)}
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
                                  onClick={() => handleDeleteService(service.id)}
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
            )}

            {activeTab === "appointments" && (
              <Card>
                <CardHeader>
                  <CardTitle>Recent Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">John Doe</h3>
                          <p className="text-sm text-gray-600">General Cleaning</p>
                          <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                        </div>
                        <Badge>Confirmed</Badge>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Jane Smith</h3>
                          <p className="text-sm text-gray-600">Teeth Whitening</p>
                          <p className="text-sm text-gray-500">Dec 28, 2:00 PM</p>
                        </div>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Mike Johnson</h3>
                          <p className="text-sm text-gray-600">Consultation</p>
                          <p className="text-sm text-gray-500">Dec 30, 11:30 AM</p>
                        </div>
                        <Badge>Confirmed</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "messages" && (
              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Sarah Wilson</h3>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        "I'm interested in learning more about your cosmetic dentistry services..."
                      </p>
                      <Badge variant="secondary">Unread</Badge>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Robert Brown</h3>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        "What insurance plans do you accept? I have Delta Dental..."
                      </p>
                      <Badge>Replied</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
