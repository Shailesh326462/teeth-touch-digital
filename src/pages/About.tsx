
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Heart, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Smith",
      role: "Lead Dentist & Practice Owner",
      education: "DDS, Harvard School of Dental Medicine",
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Procedures", "Restorative Dentistry"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Dr. Smith is passionate about providing gentle, comprehensive dental care. She stays current with the latest techniques and technology to ensure the best outcomes for her patients."
    },
    {
      name: "Dr. Michael Johnson",
      role: "Orthodontist",
      education: "DDS, MSD in Orthodontics, UCLA",
      experience: "12+ years",
      specialties: ["Traditional Braces", "Clear Aligners", "Adult Orthodontics"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Dr. Johnson specializes in creating beautiful, straight smiles for patients of all ages using the latest orthodontic techniques and technology."
    },
    {
      name: "Lisa Rodriguez",
      role: "Dental Hygienist",
      education: "RDH, Community College of Denver",
      experience: "10+ years",
      specialties: ["Preventive Care", "Patient Education", "Periodontal Therapy"],
      image: "https://images.unsplash.com/photo-1594824942123-cf4878d42baa?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Lisa is dedicated to helping patients maintain optimal oral health through personalized preventive care and education."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, empathy, and respect, ensuring a comfortable experience."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest standards of sterilization and safety protocols for your protection."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from treatment outcomes to customer service."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We welcome patients of all ages and treat each family member with personalized care."
    }
  ];

  const achievements = [
    "Top Dentist Award 2023",
    "5-Star Patient Satisfaction Rating",
    "ADA Member in Good Standing",
    "Continuing Education Leaders",
    "Community Service Excellence",
    "Advanced Technology Certification"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500">About Us</Badge>
              <h1 className="text-5xl font-bold mb-6">Your Trusted Dental Partner</h1>
              <p className="text-xl text-blue-100 mb-8">
                For over 15 years, Smile Dental has been committed to providing exceptional dental care 
                in a warm, welcoming environment. Our experienced team combines advanced technology with 
                personalized attention to help you achieve your best smile.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/appointments">
                  Schedule Your Visit
                </Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Modern dental office interior" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Smile Dental was founded in 2009 with a simple mission: to provide outstanding dental care 
              that makes a difference in our patients' lives. What started as a small practice has grown 
              into a comprehensive dental clinic, but our core values remain the same.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that everyone deserves access to quality dental care, and we're committed to 
              making that a reality through our patient-centered approach, advanced technology, and 
              flexible payment options. Our team takes pride in building lasting relationships with 
              our patients and their families.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced professionals are dedicated to your oral health and comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Education:</strong> {member.education}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-blue-100">
              We're proud of the recognition we've received for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-blue-700 p-4 rounded-lg">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">State-of-the-Art Technology</h2>
              <p className="text-lg text-gray-600 mb-6">
                We invest in the latest dental technology to provide more accurate diagnoses, 
                comfortable treatments, and better outcomes for our patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Digital X-Rays with 90% Less Radiation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Intraoral Cameras for Better Visualization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Laser Dentistry for Gentle Treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>CAD/CAM Same-Day Crowns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>3D Imaging for Precise Treatment Planning</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Modern dental technology" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience the Smile Dental Difference</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied patients who trust us with their dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/appointments">
                Schedule Your First Visit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
