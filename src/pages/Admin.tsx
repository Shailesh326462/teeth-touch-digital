
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
  Settings,
  Star,
  UserCheck
} from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [appointments, setAppointments] = useState([]);
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
  
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Excellent service! Dr. Smith was very professional and made me feel comfortable.",
      date: "2024-01-15",
      isActive: true
    },
    {
      id: 2,
      name: "Mike Davis",
      rating: 5,
      comment: "Best dental experience I've ever had. Highly recommend!",
      date: "2024-01-10",
      isActive: true
    }
  ]);

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Smith",
      specialization: "General Dentistry",
      experience: "15 years",
      education: "DDS from Harvard School of Dental Medicine",
      bio: "Dr. Smith is passionate about providing comprehensive dental care with a gentle touch.",
      isActive: true
    },
    {
      id: 2,
      name: "Dr. Michael Johnson",
      specialization: "Orthodontics",
      experience: "12 years",
      education: "DDS, MS in Orthodontics from UCLA",
      bio: "Specializing in creating beautiful smiles through advanced orthodontic treatments.",
      isActive: true
    }
  ]);

  const [editingService, setEditingService] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [editingDoctor, setEditingDoctor] = useState(null);
  
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isActive: true
  });

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    rating: 5,
    comment: "",
    date: new Date().toISOString().split('T')[0],
    isActive: true
  });

  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    education: "",
    bio: "",
    isActive: true
  });

  const { toast } = useToast();

  // Listen for new appointment submissions
  useEffect(() => {
    const handleNewAppointment = (event) => {
      const appointmentData = event.detail;
      setAppointments(prev => [...prev, {
        id: Date.now(),
        ...appointmentData,
        status: "Pending",
        submittedAt: new Date().toISOString()
      }]);
    };

    window.addEventListener('newAppointment', handleNewAppointment);
    return () => window.removeEventListener('newAppointment', handleNewAppointment);
  }, []);

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

  // Service handlers
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

  // Testimonial handlers
  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.comment) {
      const testimonial = {
        id: Math.max(...testimonials.map(t => t.id)) + 1,
        ...newTestimonial
      };
      setTestimonials([...testimonials, testimonial]);
      setNewTestimonial({
        name: "",
        rating: 5,
        comment: "",
        date: new Date().toISOString().split('T')[0],
        isActive: true
      });
      toast({
        title: "Testimonial Added",
        description: "New testimonial has been added successfully.",
      });
    }
  };

  // Doctor handlers
  const handleAddDoctor = () => {
    if (newDoctor.name && newDoctor.specialization) {
      const doctor = {
        id: Math.max(...doctors.map(d => d.id)) + 1,
        ...newDoctor
      };
      setDoctors([...doctors, doctor]);
      setNewDoctor({
        name: "",
        specialization: "",
        experience: "",
        education: "",
        bio: "",
        isActive: true
      });
      toast({
        title: "Doctor Added",
        description: "New doctor has been added successfully.",
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

  // Similar handlers for testimonials and doctors
  const handleDeleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({
      title: "Testimonial Deleted",
      description: "Testimonial has been deleted successfully.",
    });
  };

  const handleDeleteDoctor = (id: number) => {
    setDoctors(doctors.filter(d => d.id !== d));
    toast({
      title: "Doctor Deleted",
      description: "Doctor has been deleted successfully.",
    });
  };

  const updateAppointmentStatus = (id: number, status: string) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    ));
    toast({
      title: "Status Updated",
      description: `Appointment status updated to ${status}.`,
    });
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
                    onClick={() => setActiveTab("appointments")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "appointments" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Appointments
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
                    onClick={() => setActiveTab("testimonials")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "testimonials" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => setActiveTab("doctors")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeTab === "doctors" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Doctors
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                      <div className="text-2xl font-bold">{appointments.length}</div>
                      <p className="text-xs text-muted-foreground">
                        Total requests
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{testimonials.length}</div>
                      <p className="text-xs text-muted-foreground">
                        Patient reviews
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Doctors</CardTitle>
                      <UserCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{doctors.length}</div>
                      <p className="text-xs text-muted-foreground">
                        Active doctors
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
                      {appointments.slice(0, 3).map((appointment, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm">New appointment request from {appointment.firstName} {appointment.lastName}</p>
                            <p className="text-xs text-gray-500">{new Date(appointment.submittedAt).toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm">Service "Teeth Whitening" updated</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "appointments" && (
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
                                  onClick={() => updateAppointmentStatus(appointment.id, "Confirmed")}
                                  size="sm"
                                  variant="outline"
                                >
                                  Confirm
                                </Button>
                                <Button
                                  onClick={() => updateAppointmentStatus(appointment.id, "Cancelled")}
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

            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Add New Testimonial
                      <Plus className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Patient Name"
                          value={newTestimonial.name}
                          onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                        />
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          value={newTestimonial.rating}
                          onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
                        >
                          <option value={5}>5 Stars</option>
                          <option value={4}>4 Stars</option>
                          <option value={3}>3 Stars</option>
                          <option value={2}>2 Stars</option>
                          <option value={1}>1 Star</option>
                        </select>
                      </div>
                      <Textarea
                        placeholder="Testimonial text"
                        value={newTestimonial.comment}
                        onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
                      />
                      <Button onClick={handleAddTestimonial}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Testimonial
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Manage Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <div className="flex">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <Badge variant={testimonial.isActive ? "default" : "secondary"}>
                                  {testimonial.isActive ? "Active" : "Inactive"}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">"{testimonial.comment}"</p>
                              <p className="text-xs text-gray-500">{testimonial.date}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleDeleteTestimonial(testimonial.id)}
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
            )}

            {activeTab === "doctors" && (
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
                                onClick={() => handleDeleteDoctor(doctor.id)}
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
