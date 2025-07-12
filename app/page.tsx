"use client"

import type React from "react"

import { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "Web Development",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I will get back to you within 24 hours.")
      setIsSubmitting(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "Web Development",
        message: "",
      })
    }, 1000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">VanillaGorilla</div>
            <ul className="nav-links">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("portfolio")
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="text-gradient">Micheal Chapin</h1>
          <p>Web Developer & Social Media Manager</p>
          <p style={{ fontSize: "1.1rem", color: "#667eea", marginBottom: "40px" }}>
            @VanillaGorilla • vanillamoon.xyz
          </p>
          <p>
            Crafting digital experiences that captivate and convert. From stunning websites to viral social media
            campaigns, I bring your brand to life in the digital world.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("contact")}>
              Get Started
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection("portfolio")}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>About VanillaGorilla</h2>
            <p style={{ fontSize: "1.2rem", color: "#b8c6db", maxWidth: "800px", margin: "0 auto 50px" }}>
              With over 5 years of experience in web development and social media management, I have helped countless
              businesses establish their digital presence and achieve their online goals.
            </p>
          </div>

          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "#667eea" }}>My Story</h3>
              <p style={{ marginBottom: "20px", color: "#b8c6db" }}>
                My approach combines technical expertise with creative vision to deliver results that exceed
                expectations. From startups to established brands, I have worked with diverse clients across various
                industries.
              </p>
              <p style={{ marginBottom: "30px", color: "#b8c6db" }}>
                I focus on creating authentic connections between brands and their audiences through innovative digital
                solutions and strategic social media campaigns.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["React", "Next.js", "Node.js", "Social Media", "Content Strategy", "SEO"].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(102, 126, 234, 0.2)",
                      color: "#667eea",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      border: "1px solid rgba(102, 126, 234, 0.3)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="grid" style={{ gap: "20px" }}>
                <div className="card">
                  <h4 style={{ color: "#667eea", marginBottom: "10px" }}>🏆 Certified Professional</h4>
                  <p style={{ color: "#b8c6db" }}>Google Analytics, Facebook Blueprint, and more</p>
                </div>
                <div className="card">
                  <h4 style={{ color: "#667eea", marginBottom: "10px" }}>👥 Client-Focused</h4>
                  <p style={{ color: "#b8c6db" }}>Building long-term partnerships through exceptional service</p>
                </div>
                <div className="card">
                  <h4 style={{ color: "#667eea", marginBottom: "10px" }}>⚡ Results-Driven</h4>
                  <p style={{ color: "#b8c6db" }}>Measurable outcomes that drive business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Services</h2>
            <p style={{ fontSize: "1.2rem", color: "#b8c6db", maxWidth: "600px", margin: "0 auto" }}>
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 style={{ marginBottom: "15px" }}>Web Development</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• Responsive Design</li>
                <li>• E-commerce Solutions</li>
                <li>• Performance Optimization</li>
                <li>• SEO Implementation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 style={{ marginBottom: "15px" }}>Social Media Management</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Strategic social media campaigns that build brand awareness and drive engagement across all platforms.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• Content Strategy</li>
                <li>• Community Management</li>
                <li>• Paid Advertising</li>
                <li>• Analytics & Reporting</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 style={{ marginBottom: "15px" }}>Brand Design</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Complete brand identity solutions including logos, color schemes, and visual guidelines.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• Logo Design</li>
                <li>• Brand Guidelines</li>
                <li>• Marketing Materials</li>
                <li>• UI/UX Design</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3 style={{ marginBottom: "15px" }}>Digital Marketing</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Data-driven marketing strategies that increase visibility and drive conversions.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• SEO Optimization</li>
                <li>• PPC Campaigns</li>
                <li>• Email Marketing</li>
                <li>• Conversion Optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3 style={{ marginBottom: "15px" }}>Consulting</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Strategic guidance to help you navigate the digital landscape and achieve your business goals.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• Digital Strategy</li>
                <li>• Technology Consulting</li>
                <li>• Growth Planning</li>
                <li>• Team Training</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3 style={{ marginBottom: "15px" }}>Maintenance & Support</h3>
              <p style={{ color: "#b8c6db", marginBottom: "20px" }}>
                Ongoing support and maintenance to keep your digital assets running smoothly.
              </p>
              <ul style={{ textAlign: "left", color: "#b8c6db", fontSize: "14px" }}>
                <li>• Website Updates</li>
                <li>• Security Monitoring</li>
                <li>• Performance Optimization</li>
                <li>• 24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Featured Work</h2>
            <p style={{ fontSize: "1.2rem", color: "#b8c6db", maxWidth: "600px", margin: "0 auto 50px" }}>
              A showcase of recent projects and successful campaigns
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div
                style={{
                  height: "200px",
                  background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "15px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                💻
              </div>
              <h3 style={{ marginBottom: "10px" }}>E-commerce Platform</h3>
              <p style={{ color: "#b8c6db", marginBottom: "15px" }}>
                Modern online store with advanced features and seamless UX
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "rgba(102, 126, 234, 0.2)",
                    color: "#667eea",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    background: "rgba(102, 126, 234, 0.2)",
                    color: "#667eea",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Node.js
                </span>
              </div>
            </div>

            <div className="card">
              <div
                style={{
                  height: "200px",
                  background: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "15px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                📈
              </div>
              <h3 style={{ marginBottom: "10px" }}>Social Media Campaign</h3>
              <p style={{ color: "#b8c6db", marginBottom: "15px" }}>
                Viral campaign that increased brand awareness by 300%
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "rgba(245, 87, 108, 0.2)",
                    color: "#f5576c",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Instagram
                </span>
                <span
                  style={{
                    background: "rgba(245, 87, 108, 0.2)",
                    color: "#f5576c",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  TikTok
                </span>
              </div>
            </div>

            <div className="card">
              <div
                style={{
                  height: "200px",
                  background: "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "15px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}
              >
                🎨
              </div>
              <h3 style={{ marginBottom: "10px" }}>Brand Redesign</h3>
              <p style={{ color: "#b8c6db", marginBottom: "15px" }}>Complete brand overhaul for a tech startup</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "rgba(79, 172, 254, 0.2)",
                    color: "#4facfe",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Design
                </span>
                <span
                  style={{
                    background: "rgba(79, 172, 254, 0.2)",
                    color: "#4facfe",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "12px",
                  }}
                >
                  Branding
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
        <div className="container">
          <div className="text-center">
            <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Let's Work Together</h2>
            <p style={{ fontSize: "1.2rem", color: "#b8c6db", maxWidth: "600px", margin: "0 auto 50px" }}>
              Ready to take your digital presence to the next level? Let's discuss your project.
            </p>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleInputChange}>
                  <option>Web Development</option>
                  <option>Social Media Management</option>
                  <option>Brand Design</option>
                  <option>Digital Marketing</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: "100%" }}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div style={{ color: "#4ade80", textAlign: "center", marginTop: "20px" }}>{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ marginBottom: "30px" }}>
            <h3 className="text-gradient" style={{ fontSize: "2rem", marginBottom: "10px" }}>
              VanillaGorilla
            </h3>
            <p>Micheal Chapin • Web Developer & Social Media Manager</p>
          </div>

          <div className="social-links">
            <a href="https://twitter.com/vanillagorilla" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              𝕏
            </a>
            <a href="https://instagram.com/vanillagorilla" target="_blank" rel="noopener noreferrer" title="Instagram">
              📷
            </a>
            <a href="https://tiktok.com/@vanillagorilla" target="_blank" rel="noopener noreferrer" title="TikTok">
              🎵
            </a>
            <a href="https://facebook.com/vanillagorilla" target="_blank" rel="noopener noreferrer" title="Facebook">
              📘
            </a>
            <a href="https://linkedin.com/in/vanillagorilla" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              💼
            </a>
            <a href="https://fiverr.com/vanillagorilla" target="_blank" rel="noopener noreferrer" title="Fiverr">
              💚
            </a>
            <a
              href="https://shopify.com/partners/vanillagorilla"
              target="_blank"
              rel="noopener noreferrer"
              title="Shopify"
            >
              🛍️
            </a>
          </div>

          <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <p>&copy; 2024 VanillaGorilla. All rights reserved.</p>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>📧 hello@vanillamoon.xyz | 🌐 vanillamoon.xyz</p>
          </div>
        </div>
      </footer>
    </>
  )
}
