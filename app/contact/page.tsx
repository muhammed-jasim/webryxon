'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook 
} from 'lucide-react';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { ref, inView } = useAnimateOnScroll(0.2);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  function onSubmit(data: FormValues) {
    // In a real application, you would send this data to a server
    console.log(data);
    alert("Your message has been sent! We'll get back to you soon.");
    form.reset();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Ready to start your project? Get in touch with us today and let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section ref={ref} className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInLeft}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              rows={5}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand hover:bg-brand-dark">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <a 
                      href="mailto:hello@webryxon.com" 
                      className="text-muted-foreground hover:text-brand transition-colors"
                    >
                      hello@webryxon.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-brand transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <address className="text-muted-foreground not-italic">
                      123 Design Street<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, label: 'Facebook', href: '#' },
                    { icon: Twitter, label: 'Twitter', href: '#' },
                    { icon: Instagram, label: 'Instagram', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  ].map((social) => (
                    <Button 
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-brand/10 hover:text-brand hover:border-brand/30"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}