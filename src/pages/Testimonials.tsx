
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Load testimonials from localStorage (simulating data from admin)
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('adminTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      // Default testimonials if none exist
      setTestimonials([
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
    }
  }, []);

  const activeTestimonials = testimonials.filter(t => t.isActive);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients and discover why Smile Dental 
            is the trusted choice for dental care in our community.
          </p>
        </div>

        {activeTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mb-2" />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No testimonials available at the moment.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white py-12 px-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Patients?</h2>
            <p className="text-xl mb-8">Experience the quality care that our patients rave about.</p>
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

export default Testimonials;
