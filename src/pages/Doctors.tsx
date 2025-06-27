
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Doctors = () => {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Loading doctors...</div>
        </div>
        <Footer />
      </div>
    );
  }

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

        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600 text-white p-6 rounded-full">
                      <User className="h-12 w-12" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {doctor.specialization}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  {doctor.experience && (
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-sm">Experience</p>
                        <p className="text-gray-600 text-sm">{doctor.experience}</p>
                      </div>
                    </div>
                  )}
                  
                  {doctor.education && (
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-sm">Education</p>
                        <p className="text-gray-600 text-sm">{doctor.education}</p>
                      </div>
                    </div>
                  )}
                  
                  {doctor.bio && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{doctor.bio}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No doctors available at the moment.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white py-12 px-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Team?</h2>
            <p className="text-xl mb-8">Schedule your appointment today and experience professional dental care.</p>
            <a
              href="/appointments"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
