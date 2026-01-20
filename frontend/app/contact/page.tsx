"use client";

import type React from "react";
import Videoanimation from "../../components/ui/videoanimation.jsx";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState,useEffect } from "react";
import axios from "axios";

export default function ContactPage() {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];
  const [submitted, setSubmitted] = useState(false);

  //enquiry form logic
  const [formdata, setformdata] = useState<Record<string, string>>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handlechange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    const shallowcopy = { ...formdata };
    shallowcopy[name] = value;
    setformdata(shallowcopy);
  };

  const handlesubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, mobile, subject, message } = formdata;
    if (!name || !email || !message || !subject || !mobile) {
      console.log("Kindly fill up the credentials");
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/enquiry/post",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const { success, error, message } = response.data;
      if (success) {
        console.log("Enquiry posted successfully");
        setformdata({
          name: "",
          email: "",
          message: "",
          mobile: "",
          subject: "",
        });
      }
      if (error) {
        console.log("Error occured while posting data=", error);
      }
    } catch (err) {
      console.log("Error with enquiry form api...", err);
    }
  };


  // Contact Information Data
  const [contactdata,setcontactData]=useState({});
  const getdata=async ()=>{
    try{
      const response = await axios.get(
        "http://localhost:5000/api/collegeinfo/getinfo",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const { success, error, data } = response.data;
      
      if (success) {
        setcontactData(data);
        
      }
    }
    catch(err){
      console.log("Error fetching contact data",err);

    }
  }



  useEffect(()=>{
    getdata();
    
  },[])

  useEffect(() => {
  console.log("Updated contact data:", contactdata);
}, [contactdata]);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: contactdata['phone'],
      subtext: "Mon-Fri, "+ contactdata['officeHours']+" IST",
    },
    {
      icon: Mail,
      label: "Email",
      value: contactdata['email'],
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "IEM College Campus",
      subtext: contactdata['address'],
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: contactdata['officeHours'],
      subtext: "Monday to Friday",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Have questions about our programs? We'd love to hear from you.
              Reach out to us through any channel, and we'll get back to you
              shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-accent mb-4" />
                  <p className="text-foreground/60 text-sm mb-2">
                    {info.label}
                  </p>
                  <p className="font-semibold text-foreground mb-1">
                    {info.value}
                  </p>
                  <p className="text-foreground/60 text-xs">{info.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-slide-in-up">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Send us a Message
              </h2>

              <form onSubmit={handlesubmission} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={handlechange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formdata.email}
                      onChange={handlechange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      name="mobile"
                      value={formdata.mobile}
                      onChange={handlechange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formdata.subject}
                      onChange={handlechange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Subject Type</option>
                      <option value="Admission Query">Admission Query</option>
                      <option value="Program Details">Program Details</option>
                      <option value="Placement Information">
                        Placement Information
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formdata.message}
                    onChange={handlechange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100/20 border border-green-500/30 rounded-lg animate-slide-in-up">
                    <p className="text-green-700">
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Map & Info */}
            <div
              className="animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="mb-6 h-80 bg-muted rounded-xl overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7368.411020177792!2d88.42840389250843!3d22.571415767969835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027514cd20d659%3A0x4b66eefc1cb3ed78!2sIEM%20Kolkata!5e0!3m2!1sen!2sin!4v1768185918335!5m2!1sen!2sin"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Visit Us</h3>
                  <p className="text-foreground/70 text-sm">
                   { contactInfo[2].subtext} 
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Quick Links
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        Academic Calendar
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        Fee Structure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        Scholarship Info
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        Student Portal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the best time to apply?",
                a: "Applications are accepted year-round, but for admission in July/August, we recommend applying by March.",
              },
              {
                q: "How can I schedule a campus visit?",
                a: "You can schedule a campus tour through our admissions portal or by contacting us via phone/email.",
              },
              {
                q: "Do you offer financial aid?",
                a: "Yes, we offer merit-based scholarships and educational loans in partnership with leading financial institutions.",
              },
              {
                q: "Can international students apply?",
                a: "Yes, international students are welcome. They should have a valid passport and GMAT score.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
