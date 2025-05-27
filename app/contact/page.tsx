'use client';

import { useState } from 'react';
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you and answer any questions you may have.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-full mb-4 text-pink-700">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              <p className="text-gray-700">
                123 Education Lane<br />
                Learning City, ED 12345<br />
                United States
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-full mb-4 text-pink-700">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-700">
                info@st.bostonedtech.edu<br />
                admissions@st.bostonedtech.edu<br />
                support@st.bostonedtech.edu
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-full mb-4 text-pink-700">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-700">
                Main: +1 (123) 456-7890<br />
                Admissions: +1 (123) 456-7891<br />
                Support: +1 (123) 456-7892
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-100 rounded-full mb-4 text-pink-700">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-700">
                Monday - Friday:<br />
                8:00 AM - 4:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Heading 
                title="Send Us a Message" 
                description="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Message subject" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..." 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div>
              <Heading 
                title="Our Location" 
                description="Visit us at our campus or get directions below."
              />
              
              <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1651855294875!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St. Boston Edtech Location"
                ></iframe>
              </div>
              
              <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Schedule a Campus Tour</h3>
                <p className="text-gray-700 mb-4">
                  Want to see our campus in person? Schedule a guided tour with our admissions team to explore our facilities and learn more about our programs.
                </p>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Book a Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Heading 
            title="Frequently Asked Questions" 
            description="Find answers to commonly asked questions about St. Boston Edtech."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">What are the school hours?</h3>
                <p className="text-gray-700">
                  Regular school hours are from 8:00 AM to 3:00 PM, Monday through Friday. Additional activities and clubs usually run until 4:30 PM.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">How can I apply for admission?</h3>
                <p className="text-gray-700">
                  You can apply online through our website or visit our admissions office. The application process includes submitting academic records, recommendation letters, and an entrance assessment.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">Do you offer transportation services?</h3>
                <p className="text-gray-700">
                  Yes, we provide bus transportation services for students living within a 15-mile radius of the school. Additional fees apply for this service.
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-2">What extracurricular activities do you offer?</h3>
                <p className="text-gray-700">
                  We offer a wide range of activities including sports teams, music and arts programs, debate club, robotics, community service opportunities, and various academic clubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}