
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Clock } from "lucide-react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  // Load doctors from localStorage (simulating data from admin)
  useEffect(() => {
    const savedDoctors = localStorage.getItem('adminDoctors');
    if (savedDoctors) {
      setDoctors(JSON.parse(savedDoctors));
    } else {
      // Default doctors if none exist
      setDoctors([
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
    }
  }, []);

  const activeDoctors = doctors.filter(d => d.isActive);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced dental professionals are committed to providing you with 
            the highest quality care in a comfortable and welcoming environment.
          </p>
        </div>

        {activeDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {doctor.specialization}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{doctor.experience} of experience</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4 mt-0.5" />
                    <span>{doctor.education}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm text-gray-700">
                    <Award className="h-4 w-4 mt-0.5" />
                    <span>{doctor.bio}</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <a
                      href="/appointments"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                    >
                      Book Appointment
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No doctors information available at the moment.</p>
          </div>
        )}

        {/* Why Choose Our Doctors Section */}
        <div className="mt-16">
          <div className="bg-white py-12 px-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Why Choose Our Doctors?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Qualifications</h3>
                <p className="text-gray-600">All our doctors have advanced degrees from prestigious institutions.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Proven Experience</h3>
                <p className="text-gray-600">Years of experience in their respective specializations.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Dedicated Care</h3>
                <p className="text-gray-600">Committed to providing personalized, compassionate care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
