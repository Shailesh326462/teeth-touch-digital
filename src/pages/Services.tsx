
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      category: "General Dentistry",
      services: [
        {
          name: "Dental Cleaning & Exam",
          description: "Professional cleaning and comprehensive oral examination",
          price: "From $120",
          duration: "60 min",
          rating: 4.9,
          features: ["Plaque & Tartar Removal", "Oral Cancer Screening", "X-rays", "Fluoride Treatment"],
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
          name: "Fillings",
          description: "Tooth-colored composite fillings for cavities",
          price: "From $180",
          duration: "45 min",
          rating: 4.8,
          features: ["Tooth-Colored Material", "Mercury-Free", "Long-Lasting", "Natural Appearance"],
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
          name: "Root Canal Therapy",
          description: "Save infected teeth with gentle root canal treatment",
          price: "From $850",
          duration: "90 min",
          rating: 4.7,
          features: ["Pain Relief", "Tooth Preservation", "Advanced Technology", "Comfortable Procedure"],
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300"
        }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      services: [
        {
          name: "Teeth Whitening",
          description: "Professional teeth whitening for a brighter smile",
          price: "From $450",
          duration: "75 min",
          rating: 4.9,
          features: ["Up to 8 Shades Whiter", "Safe & Effective", "Immediate Results", "Long-Lasting"],
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
          name: "Porcelain Veneers",
          description: "Transform your smile with custom porcelain veneers",
          price: "From $1,200",
          duration: "2 visits",
          rating: 5.0,
          features: ["Natural Appearance", "Stain Resistant", "Durable", "Custom Made"],
          image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=400&h=300"
        }
      ]
    },
    {
      category: "Orthodontics",
      services: [
        {
          name: "Clear Aligners",
          description: "Straighten teeth discreetly with clear aligners",
          price: "From $3,500",
          duration: "12-18 months",
          rating: 4.8,
          features: ["Nearly Invisible", "Removable", "Comfortable", "Effective"],
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300"
        },
        {
          name: "Traditional Braces",
          description: "Comprehensive orthodontic treatment with metal braces",
          price: "From $4,200",
          duration: "18-24 months",
          rating: 4.7,
          features: ["Most Effective", "Durable", "Affordable", "Proven Results"],
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400&h=300"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500">Our Services</Badge>
          <h1 className="text-5xl font-bold mb-4">Comprehensive Dental Care</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From preventive care to advanced treatments, we offer a complete range of dental services 
            to help you achieve and maintain optimal oral health.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.category}</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{service.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-600">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{service.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to="/appointments">
                          Book This Service
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Insurance & Payment Options</h2>
            <p className="text-lg text-gray-600">We make dental care affordable and accessible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Insurance Accepted</CardTitle>
                <CardDescription>We work with most major insurance providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Delta Dental</li>
                  <li>Cigna</li>
                  <li>Aetna</li>
                  <li>MetLife</li>
                  <li>And many more!</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Flexible Payment Plans</CardTitle>
                <CardDescription>0% interest financing available</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>CareCredit</li>
                  <li>LendingClub</li>
                  <li>In-house payment plans</li>
                  <li>Monthly payment options</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>New Patient Special</CardTitle>
                <CardDescription>Limited time offer for new patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$99</div>
                <p className="text-sm text-gray-600">
                  Includes exam, cleaning, and X-rays (regularly $280)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your dental needs and find the perfect treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/appointments">
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">
                Ask Questions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
