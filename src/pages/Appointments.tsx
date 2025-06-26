
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";

const Appointments = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: "",
    reasonForVisit: "",
    isNewPatient: false,
    hasInsurance: false,
    insuranceProvider: "",
    emergencyContact: "",
    medicalConditions: "",
    medications: "",
    specialRequests: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment form submitted:", formData);
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      preferredDate: "",
      preferredTime: "",
      serviceType: "",
      reasonForVisit: "",
      isNewPatient: false,
      hasInsurance: false,
      insuranceProvider: "",
      emergencyContact: "",
      medicalConditions: "",
      medications: "",
      specialRequests: ""
    });
  };

  const serviceTypes = [
    "General Cleaning & Exam",
    "Cosmetic Consultation",
    "Orthodontic Consultation",
    "Emergency Visit",
    "Teeth Whitening",
    "Fillings",
    "Root Canal",
    "Crown/Bridge",
    "Dental Implants",
    "Periodontal Treatment",
    "Oral Surgery",
    "Other"
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500">Book Appointment</Badge>
          <h1 className="text-5xl font-bold mb-4">Schedule Your Visit</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to take the next step towards a healthier, more beautiful smile? 
            Schedule your appointment today and experience exceptional dental care.
          </p>
        </div>
      </section>

      {/* Appointment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to schedule your appointment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <CardTitle>Fill Out Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete our comprehensive appointment request form with your information and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <CardTitle>We'll Contact You</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our scheduling coordinator will call you within 24 hours to confirm your appointment time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <CardTitle>Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Arrive 15 minutes early for your appointment and enjoy exceptional dental care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Your Appointment</h2>
              <p className="text-lg text-gray-600">
                Please fill out the form below and we'll contact you to confirm your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Emergency Contact
                      </label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Emergency contact name and phone"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isNewPatient"
                      checked={formData.isNewPatient}
                      onCheckedChange={(checked) => handleCheckboxChange('isNewPatient', checked as boolean)}
                    />
                    <label htmlFor="isNewPatient" className="text-sm font-medium text-gray-700">
                      I am a new patient
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Appointment Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('preferredTime', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Service *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('serviceType', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="reasonForVisit" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit *
                    </label>
                    <Textarea
                      id="reasonForVisit"
                      name="reasonForVisit"
                      required
                      value={formData.reasonForVisit}
                      onChange={handleInputChange}
                      placeholder="Please describe your dental concerns or what you'd like to discuss..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Insurance Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasInsurance"
                      checked={formData.hasInsurance}
                      onCheckedChange={(checked) => handleCheckboxChange('hasInsurance', checked as boolean)}
                    />
                    <label htmlFor="hasInsurance" className="text-sm font-medium text-gray-700">
                      I have dental insurance
                    </label>
                  </div>

                  {formData.hasInsurance && (
                    <div>
                      <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-2">
                        Insurance Provider
                      </label>
                      <Input
                        id="insuranceProvider"
                        name="insuranceProvider"
                        type="text"
                        value={formData.insuranceProvider}
                        onChange={handleInputChange}
                        placeholder="e.g., Delta Dental, Cigna, Aetna"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Medical History */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Medical History</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-2">
                      Medical Conditions
                    </label>
                    <Textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleInputChange}
                      placeholder="Please list any medical conditions, allergies, or health concerns..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <Textarea
                      id="medications"
                      name="medications"
                      value={formData.medications}
                      onChange={handleInputChange}
                      placeholder="Please list all medications, supplements, and vitamins you are currently taking..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Accommodations
                    </label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any special needs, accessibility requirements, or other requests..."
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button type="submit" size="lg" className="px-12">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Appointment
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600">Preparing for your visit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Before Your Visit</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Arrive 15 minutes early</li>
                  <li>• Bring your insurance card and ID</li>
                  <li>• Complete health history forms</li>
                  <li>• List current medications</li>
                  <li>• Bring previous dental records</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>During Your Visit</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Comprehensive oral examination</li>
                  <li>• Digital X-rays if needed</li>
                  <li>• Discussion of treatment options</li>
                  <li>• Professional cleaning (if scheduled)</li>
                  <li>• Personalized oral care instructions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>After Your Visit</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Schedule follow-up appointments</li>
                  <li>• Receive treatment plan summary</li>
                  <li>• Insurance claims processing</li>
                  <li>• Post-care instructions</li>
                  <li>• 24/7 emergency contact available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointments;
