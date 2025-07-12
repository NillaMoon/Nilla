"use client"

import React, { useState } from "react";



import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Users,
  Award,
  Zap,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you within 24 hours.')
      setIsSubmitting(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectType: 'Web Development',
        message: ''
      })
    }, 1000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VanillaGorilla
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block hover:text-purple-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="block hover:text-purple-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block hover:text-purple-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-purple-400 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
                VG
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Micheal Chapin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">Web Developer & Social Media Manager</p>
            <p className="text-lg text-purple-400 mb-8">@VanillaGorilla • vanillamoon.xyz</p>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences that captivate and convert. From stunning websites to viral social media campaigns, 
            I bring your brand to life in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 bg-transparent"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">100K+</div>
              <div className="text-gray-300">Social Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About VanillaGorilla</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">My Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 5 years of experience in web development and social media management, I've helped countless 
                businesses establish their digital presence and achieve their online goals. My approach combines technical 
                expertise with creative vision to deliver results that exceed expectations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From startups to established brands, I've worked with diverse clients across various industries, 
                always focusing on creating authentic connections between brands and their audiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">React</Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">Next.js</Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">Node.js</Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">Social Media</Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">Content Strategy</Badge>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">SEO</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-semibold">Certified Professional</h4>
                  </div>
                  <p className="text-gray-300">Google Analytics, Facebook Blueprint, and more</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-pink-400 mr-3" />
                    <h4 className="text-xl font-semibold">Client-Focused</h4>
                  </div>
                  <p className="text-gray-300">Building long-term partnerships through exceptional service</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-semibold">Results-Driven</h4>
                  </div>
                  <p className="text-gray-300">Measurable outcomes that drive business growth</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Code2 className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Responsive Design</li>
                  <li>• E-commerce Solutions</li>
                  <li>• Performance Optimization</li>
                  <li>• SEO Implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Smartphone className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Social Media Management</h3>
                <p className="text-gray-300 mb-6">
                  Strategic social media campaigns that build brand awareness and drive engagement across all platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Content Strategy</li>
                  <li>• Community Management</li>
                  <li>• Paid Advertising</li>
                  <li>• Analytics & Reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Palette className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Brand Design</h3>
                <p className="text-gray-300 mb-6">
                  Complete brand identity solutions including logos, color schemes, and visual guidelines.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Logo Design</li>
                  <li>• Brand Guidelines</li>
                  <li>• Marketing Materials</li>
                  <li>• UI/UX Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/50 to-purple-900/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-gray-300 mb-6">
                  Data-driven marketing strategies that increase visibility and drive conversions.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• SEO Optimization</li>
                  <li>• PPC Campaigns</li>
                  <li>• Email Marketing</li>
                  <li>• Conversion Optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Consulting</h3>
                <p className="text-gray-300 mb-6">
                  Strategic guidance to help you navigate the digital landscape and achieve your business goals.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Digital Strategy</li>
                  <li>• Technology Consulting</li>
                  <li>• Growth Planning</li>
                  <li>• Team Training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
                <p className="text-gray-300 mb-6">
                  Ongoing support and maintenance to keep your digital assets running smoothly.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>• Website Updates</li>
                  <li>• Security Monitoring</li>
                  <li>• Performance Optimization</li>
                  <li>• 24/7 Support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of recent projects and successful campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">Modern online store with advanced features and seamless UX</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">React</Badge>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">Node.js</Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Media Campaign</h3>
                <p className="text-gray-300 mb-4">Viral campaign that increased brand awareness by 300%</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-pink-600/20 text-pink-300 border-pink-600/30">Instagram</Badge>
                    <Badge variant="secondary" className="bg-pink-600/20 text-pink-300 border-pink-600/30">TikTok</Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-pink-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Palette className="w-16 h-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Brand Redesign</h3>
                <p className="text-gray-300 mb-4">Complete brand overhaul for a tech startup</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">Design</Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">Branding</Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {"Don't just take my word for it"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  {"VanillaGorilla transformed our online presence completely. Our website traffic increased by 400% and our social media engagement is through the roof!"}
                </p>
                <div className="font-semibold text-purple-400">Sarah Johnson</div>
                <div className="text-sm text-gray-400">CEO, TechStart Inc.</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  {"Professional, creative, and results-driven. Micheal delivered exactly what we needed and more. Highly recommended!"}
                </p>
                <div className="font-semibold text-pink-400">Mike Rodriguez</div>
                <div className="text-sm text-gray-400">Marketing Director, GrowthCo</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  {"The best investment we made for our business. The ROI from our new website and social media strategy has been incredible."}
                </p>
                <div className="font-semibold text-blue-400">Lisa Chen</div>
                <div className="text-sm text-gray-400">Founder, Creative Studio</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{"Let's Work Together"}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {"Ready to take your digital presence to the next level? Let's discuss your project."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">hello@vanillamoon.xyz</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">Available upon request</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-300">Remote & On-site Available</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Response Time</h4>
                <p className="text-gray-300">I typically respond within 24 hours. For urgent inquiries, please mention it in your message.</p>
              </div>
            </div>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400" 
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400" 
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400" 
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-md text-white"
                    >
                      <option>Web Development</option>
                      <option>Social Media Management</option>
                      <option>Brand Design</option>
                      <option>Digital Marketing</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]" 
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitMessage && (
                    <div className="text-green-400 text-center mt-4">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              VanillaGorilla
            </div>
            <p className="text-gray-400 mb-6">Micheal Chapin • Web Developer & Social Media Manager</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://twitter.com/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://facebook.com/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://fiverr.com/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.004 15.588a.995.995 0 0 1-.995.995H1.99a.995.995 0 0 1-.995-.995V8.412c0-.55.446-.995.995-.995h20.019c.55 0 .995.446.995.995v7.176zm-8.754-4.861c0-1.035-.84-1.875-1.875-1.875s-1.875.84-1.875 1.875.84 1.875 1.875 1.875 1.875-.84 1.875-1.875zm-6.25 0c0-1.035-.84-1.875-1.875-1.875S4.25 9.692 4.25 10.727s.84 1.875 1.875 1.875 1.875-.84 1.875-1.875z"/>
                </svg>
              </a>
              <a href="https://shopify.com/partners/vanillagorilla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.337 2.368c-.332-.066-.896-.066-1.495 0-.598.066-1.329.265-2.06.464-.731.199-1.462.464-2.06.597-.598.133-1.063.199-1.329.265-.266.066-.398.133-.398.199 0 .066.066.133.199.199.133.066.332.133.598.199.266.066.598.133.996.199.398.066.863.133 1.329.199.465.066.863.133 1.196.199.332.066.531.133.598.199.066.066.066.133 0 .199-.066.066-.199.133-.398.199-.199.066-.465.133-.797.199-.332.066-.731.133-1.196.199-.465.066-.996.133-1.594.199-.598.066-1.262.133-1.993.199-.731.066-1.528.133-2.392.199-.863.066-1.793.133-2.789.199-.996.066-2.06.133-3.19.199-1.129.066-2.325.133-3.587.199-1.262.066-2.591.133-3.985.199-1.394.066-2.855.133-4.382.199-1.528.066-3.123.133-4.784.199-1.661.066-3.389.133-5.183.199-1.794.066-3.654.133-5.581.199-1.927.066-3.919.133-5.977.199-2.058.066-4.182.133-6.372.199-2.19.066-4.446.133-6.768.199-2.322.066-4.71.133-7.164.199-2.454.066-4.974.133-7.56.199-2.586.066-5.238.133-7.956.199-2.718.066-5.502.133-8.352.199-2.85.066-5.766.133-8.748.199-2.982.066-6.03.133-9.144.199-3.114.066-6.294.133-9.54.199-3.246.066-6.558.133-9.936.199-3.378.066-6.822.133-10.332.199-3.51.066-7.086.133-10.728.199-3.642.066-7.35.133-11.124.199-3.774.066-7.614.133-11.52.199-3.906.066-7.878.133-11.916.199-4.038.066-8.142.133-12.312.199-4.17.066-8.406.133-12.708.199-4.302.066-8.67.133-13.104.199-4.434.066-8.934.133-13.5.199-4.566.066-9.198.133-13.896.199-4.698.066-9.462.133-14.292.199-4.83.066-9.726.133-14.688.199-4.962.066-10.09.133-15.384.199-5.294.066-10.754.133-16.38.199-5.626.066-11.418.133-17.376.199-5.958.066-12.082.133-18.372.199-6.29.066-12.746.133-19.368.199-6.622.066-13.41.133-20.364.199-6.954.066-14.074.133-21.36.199-7.286.066-14.738.133-22.356.199-7.618.066-15.402.133-23.352.199-7.95.066-16.066.133-24.348.199-8.282.066-16.73.133-25.344.199-8.614.066-17.394.133-26.34.199-8.946.066-18.058.133-27.336.199-9.278.066-18.722.133-28.332.199-9.61.066-19.386.133-29.328.199-9.942.066-20.05.133-30.324.199-10.274.066-20.714.133-31.32.199-10.606.066-21.378.133-32.316.199-10.938.066-22.042.133-33.312.199-11.27.066-22.706.133-34.308.199-11.602.066-23.37.133-35.304.199-11.934.066-24.034.133-36.3.199-12.266.066-24.698.133-37.296.199-12.598.066-25.362.133-38.292.199-12.93.066-26.026.133-39.288.199-13.262.066-26.69.133-40.284.199-13.594.066-27.354.133-41.28.199-13.926.066-28.018.133-42.276.199-14.258.066-28.682.133-43.272.199-14.59.066-29.346.133-44.268.199-14.922.066-30.01.133-45.264.199-15.254.066-30.674.133-46.26.199-15.586.066-31.338.133-47.256.199-15.918.066-32.002.133-48.252.199-16.25.066-32.666.133-49.248.199-16.582.066-33.33.133-50.244.199-16.914.066-34.094.133-51.54.199-17.446.066-35.158.133-53.136.199-17.978.066-36.222.133-54.732.199-18.51.066-37.286.133-56.328.199-19.042.066-38.35.133-57.924.199-19.574.066-39.414.133-59.52.199-20.106.066-40.478.133-61.116.199-20.638.066-41.542.133-62.712.199-21.17.066-42.606.133-64.308.199-21.702.066-43.67.133-66.204.199-22.534.066-45.334.133-68.4.199-23.066.066-46.398.133-70.296.199-23.898.066-48.062.133-72.492.199-24.43.066-49.126.133-74.088.199-24.962.066-50.19.133-75.684.199-25.494.066-51.254.133-77.28.199-26.026.066-52.318.133-78.876.199-26.558.066-53.382.133-80.472.199-27.09.066-54.446.133-82.068.199-27.622.066-55.51.133-83.664.199-28.154.066-56.574.133-85.26.199-28.686.066-57.638.133-87.156.199-29.518.066-59.302.133-89.352.199-30.05.066-60.366.133-91.248.199-30.882.066-62.03.133-93.444.199-31.414.066-63.094.133-95.04.199-31.946.066-64.158.133-96.636.199-32.478.066-65.222.133-98.232.199-33.01.066-66.286.133-99.828.199-33.542.066-67.35.133-101.424.199-34.074.066-68.414.133-103.02.199-34.606.066-69.478.133-104.616.199-35.138.066-70.542.133-106.212.199-35.67.066-71.606.133-107.808.199-36.202.066-72.67.133-109.404.199-36.734.066-73.734.133-111.0.199-37.266.066-75.0.133-112.8.199-37.8.066-75.866.133-114.198.199-38.332.066-77.0.133-115.934.199-38.934.066-78.134.133-117.6.199-39.466.066-79.198.133-119.196.199-40.0.066-80.266.133-120.798.199-40.532.066-81.33.133-122.394.199-41.064.066-82.394.133-123.99.199-41.596.066-83.458.133-125.586.199-42.128.066-84.522.133-127.182.199-42.66.066-85.586.133-128.778.199-43.192.066-86.65.133-130.374.199-43.724.066-87.714.133-132.17.199-44.456.066-89.178.133-134.166.199-44.988.066-90.242.133-135.762.199-45.52.066-91.306.133-137.358.199-46.052.066-92.37.133-138.954.199-46.584.066-93.434.133-140.55.199-47.116.066-94.498.133-142.146.199-47.648.066-95.562.133-143.742.199-48.18.066-96.626.133-145.338.199-48.712.066-97.69.133-146.934.199-49.244.066-98.754.133-148.53.199-49.776.066-99.818.133-150.126.199-50.308.066-100.882.133-151.722.199-50.84.066-101.946.133-153.318.199-51.372.066-103.01.133-154.914.199-51.904.066-104.074.133-156.51.199-52.436.066-105.138.133-158.106.199-52.968.066-106.202.133-159.702.199-53.5.066-107.266.133-161.298.199-54.032.066-108.33.133-162.894.199-54.564.066-109.394.133-164.49.199-55.096.066-110.458.133-166.086.199-55.628.066-111.522.133-167.682.199-56.16.066-112.586.133-169.278.199-56.692.066-113.65.133-170.874.199-57.224.066-114.714.133-172.47.199-57.756.066-115.778.133-174.066.199-58.288.066-116.842.133-175.662.199-58.82.066-117.906.133-177.258.199-59.352.066-118.97.133-178.854.199-59.884.066-120.034.133-180.45.199-60.416.066-121.098.133-182.046.199-60.948.066-122.162.133-183.642.199-61.48.066-123.226.133-185.238\
