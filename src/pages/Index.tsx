
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400&h=300",
      features: ["Regular Cleanings", "Fillings", "Root Canals", "Extractions"]
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeover"]
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with traditional braces or clear aligners.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Adult Orthodontics"]
    }
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Clock, number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-500 text-white">Award-Winning Dental Care</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Perfect <span className="text-blue-300">Smile</span> Starts Here
              </h1>
              <p className="text-xl text-blue-100">
                Experience exceptional dental care in a comfortable, modern environment. 
                Our expert team is committed to helping you achieve optimal oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/appointments">
                    Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Modern dental office" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to advanced procedures, we offer a full range of dental services 
              to keep your smile healthy and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Dr. Smith in dental office" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <Badge>About Us</Badge>
              <h2 className="text-4xl font-bold text-gray-800">
                Meet Dr. Sarah Smith
              </h2>
              <p className="text-lg text-gray-600">
                With over 15 years of experience in dentistry, Dr. Smith is committed to providing 
                personalized, gentle care for patients of all ages. She graduated from Harvard School 
                of Dental Medicine and continues to stay current with the latest dental technologies and techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Harvard School of Dental Medicine Graduate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>American Dental Association Member</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Continuing Education in Latest Techniques</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your consultation today and take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointments">
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
