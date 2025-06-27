
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Settings } from "lucide-react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AppointmentsManager from "@/components/admin/AppointmentsManager";
import ServicesManager from "@/components/admin/ServicesManager";
import TestimonialsManager from "@/components/admin/TestimonialsManager";
import DoctorsManager from "@/components/admin/DoctorsManager";
import MessagesManager from "@/components/admin/MessagesManager";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
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
  const handleAddService = (newService) => {
    const service = {
      id: Math.max(...services.map(s => s.id)) + 1,
      ...newService
    };
    setServices([...services, service]);
    toast({
      title: "Service Added",
      description: "New service has been added successfully.",
    });
  };

  const handleEditService = (editedService) => {
    setServices(services.map(s => 
      s.id === editedService.id ? editedService : s
    ));
    toast({
      title: "Service Updated",
      description: "Service has been updated successfully.",
    });
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

  // Testimonial handlers
  const handleAddTestimonial = (newTestimonial) => {
    const testimonial = {
      id: Math.max(...testimonials.map(t => t.id)) + 1,
      ...newTestimonial
    };
    setTestimonials([...testimonials, testimonial]);
    toast({
      title: "Testimonial Added",
      description: "New testimonial has been added successfully.",
    });
  };

  const handleDeleteTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast({
      title: "Testimonial Deleted",
      description: "Testimonial has been deleted successfully.",
    });
  };

  // Doctor handlers
  const handleAddDoctor = (newDoctor) => {
    const doctor = {
      id: Math.max(...doctors.map(d => d.id)) + 1,
      ...newDoctor
    };
    setDoctors([...doctors, doctor]);
    toast({
      title: "Doctor Added",
      description: "New doctor has been added successfully.",
    });
  };

  const handleDeleteDoctor = (id: number) => {
    setDoctors(doctors.filter(d => d.id !== id));
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

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

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
            <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <AdminDashboard 
                services={services}
                appointments={appointments}
                testimonials={testimonials}
                doctors={doctors}
              />
            )}

            {activeTab === "appointments" && (
              <AppointmentsManager 
                appointments={appointments}
                onUpdateStatus={updateAppointmentStatus}
              />
            )}

            {activeTab === "services" && (
              <ServicesManager 
                services={services}
                onAdd={handleAddService}
                onEdit={handleEditService}
                onDelete={handleDeleteService}
                onToggleStatus={toggleServiceStatus}
              />
            )}

            {activeTab === "testimonials" && (
              <TestimonialsManager 
                testimonials={testimonials}
                onAdd={handleAddTestimonial}
                onDelete={handleDeleteTestimonial}
              />
            )}

            {activeTab === "doctors" && (
              <DoctorsManager 
                doctors={doctors}
                onAdd={handleAddDoctor}
                onDelete={handleDeleteDoctor}
              />
            )}

            {activeTab === "messages" && (
              <MessagesManager />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
