"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Lightbulb, Calendar, Users, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'all', name: 'All Problems' },
  { id: 'Big Data Analytics', name: 'Big Data Analytics' },
  { id: 'Bioinformatics', name: 'Bioinformatics' },
  { id: 'Cloud Computing', name: 'Cloud' },
  { id: 'Internet_of_Things', name: 'IoT' },
];

const problems = [
  // IoT Problems (IOT-001 to IOT-010)
  {
    id: 'IOT-001',
    title: 'Cold Chain Monitoring for Vaccine Transport',
    description: 'Develop a unique solution for cold chain monitoring for vaccine transport. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-002',
    title: 'Smart Helmet for Industrial Worker Safety',
    description: 'Develop a unique solution for smart helmet for industrial worker safety. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-003',
    title: 'Predictive Maintenance for Manufacturing Machines',
    description: 'Develop a unique solution for predictive maintenance for manufacturing machines. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-004',
    title: 'Wildlife Tracking and Poaching Prevention',
    description: 'Develop a unique solution for wildlife tracking and poaching prevention. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-005',
    title: 'Cold Chain Monitoring for Vaccine Transport',
    description: 'Develop a unique solution for cold chain monitoring for vaccine transport. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-006',
    title: 'IoT-Based Smart Car Path Prediction System (Simulation)',
    description: 'Design and simulate an IoT-enabled smart car system that can predict and navigate its path in real-time using sensor data such as distance, speed, and obstacle detection, to enhance autonomous driving capabilities.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-007',
    title: 'IoT-Based Traffic Management System',
    description: 'Design and simulate an intelligent IoT-enabled traffic control system that uses real-time camera and sensor data to predict traffic congestion and dynamically control traffic lights to reduce waiting times and improve traffic flow.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-008',
    title: 'Energy Theft Detection and Load Balancing System',
    description: 'Simulate a smart grid system that uses IoT meters and AI algorithms to detect energy theft, monitor usage patterns, and dynamically balance load to optimize power distribution.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-009',
    title: 'IoT-Based Emergency Ambulance Route Optimizer',
    description: 'Design an IoT-enabled system that communicates with traffic signals and emergency services to provide ambulances with dynamic route optimization for faster emergency response times.',
    category: 'Internet_of_Things'
  },
  {
    id: 'IOT-010',
    title: 'AI-Powered Intruder Alert System with Facial Recognition',
    description: 'Create an IoT-enabled security system that uses facial recognition to identify unauthorized individuals and simulate alert mechanisms for enhanced security monitoring.',
    category: 'Internet_of_Things'
  },

  // Big Data Analytics Problems (BDA-001 to BDA-010)
  {
    id: 'BDA-001',
    title: 'Climate Change Impact Forecasting Using Multisource Datasets',
    description: 'Develop a BDA platform that combines satellite images, weather data, and historical climate patterns to simulate and forecast the impacts of climate change on various regions.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-002',
    title: 'Telecom Network Optimization Based on User Behavior',
    description: 'Design a system that analyzes call detail records (CDRs), internet usage logs, and geo-location data to optimize network resource allocation and improve service quality.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-003',
    title: 'Real-Time Stock Sentiment Analyzer',
    description: 'Build a system that scrapes recent tweets or news headlines about a company and performs sentiment analysis to predict short-term stock price movements.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-004',
    title: 'Product Recommendation System for Small Businesses',
    description: 'Using a small product-purchase dataset, implement collaborative filtering to suggest frequently bought-together items for enhanced customer shopping experience.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-005',
    title: 'School Dropout Detection System',
    description: 'Design a BDA dashboard that analyzes attendance, midterm scores, location, and socio-economic factors to identify at-risk students and recommend early intervention strategies.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-006',
    title: 'Road Accident Risk Heatmap',
    description: 'Create a heatmap using historical accident data, weather conditions, and traffic sensor logs to visualize accident-prone zones and suggest preventive measures.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-007',
    title: 'AgroScope: Smart Crop Recommendation via Satellite Insights',
    description: 'Design and develop a web-based application that utilizes geo-satellite data, environmental parameters, and soil conditions to visualize and recommend optimal crop selection for farmers.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-008',
    title: 'Urban Heat Island Visualizer',
    description: 'Use remote sensing data to identify urban zones with high heat absorption and provide greening recommendations to mitigate urban heat island effects.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-009',
    title: 'CityPulse: Real-Time Civic Issue Trend Analyzer',
    description: 'Scrape complaints from public portals (like Swachh Bharat app, Twitter, etc.) and visualize issue density across the city to help authorities prioritize responses.',
    category: 'Big Data Analytics'  },
  {
    id: 'BDA-010',
    title: 'AirSense: Urban Air Quality Predictor',
    description: 'Aggregate data from air quality sensors, satellite feeds, and traffic to predict AQI levels and suggest interventions for better air quality management.',
    category: 'Big Data Analytics'  },

  // Bioinformatics Problems (BIO-001 to BIO-010)
  {
    id: 'BIO-001',
    title: 'Genetic Mutation Analysis for Rare Diseases',
    description: 'Develop a unique solution for genetic mutation analysis for rare diseases. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-002',
    title: 'AI Model to Predict Virus Mutation Patterns',
    description: 'Develop a unique solution for AI model to predict virus mutation patterns. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-003',
    title: 'AI-Powered Microbiome Health Analysis Tool',
    description: 'Develop a unique solution for AI-powered microbiome health analysis tool. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-004',
    title: 'Cancer Biomarker Identification System',
    description: 'Develop a unique solution for cancer biomarker identification system. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-005',
    title: 'Tracking Antibiotic Resistance Genes in Bacteria',
    description: 'Develop a unique solution for tracking antibiotic resistance genes in bacteria. Use appropriate public APIs (e.g., Google APIs, open datasets), integrate cloud tools like Firebase, GCP, or sensor interfaces for impact-driven applications.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-006',
    title: 'Neurodegenerative Disease Detector',
    description: 'Develop a solution for early detection of neurodegenerative diseases using speech and handwriting pattern analysis.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-007',
    title: 'Diet Recommendation System',
    description: 'Create an AI-powered system for personalized nutrition recommendation based on gut microbiome data.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-008',
    title: 'Zoonotic Disease Detector',
    description: 'Create a web tool that identifies zoonotic disease risk based on genetic similarity and geographic proximity.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-009',
    title: 'CardioSense: ML-Powered Heart Attack Risk Prediction Using ECG and Genetic Data',
    description: 'Design a ML model to predict heart attack risk using ECG sensor data and genetic predisposition datasets.',
    category: 'Bioinformatics'
  },
  {
    id: 'BIO-010',
    title: 'SmartMask: AI-Powered Face Mask and Temperature Monitoring System',
    description: 'Design an AI-based system that integrates face mask detection with real-time temperature monitoring. The solution should utilize computer vision to ensure mask compliance and trigger alerts when elevated body temperatures are detected, supporting public health and safety in crowded or sensitive environments.',
    category: 'Bioinformatics'
  },

  // Cloud Computing Problems (CLO-001 to CLO-010)
  {
    id: 'CLO-001',
    title: 'Invoicely: Cloud-Based Invoice & Expense Tracker for Freelancers',
    description: 'Freelancers often struggle with managing invoices, recurring payments, and client tracking. Build a SaaS platform where users can create invoices, track expenses, and manage client relationships efficiently.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-002',
    title: 'SkillPod: Microlearning SaaS for Upskilling Teams',
    description: 'Companies need a simple, modular learning platform for internal training. Create a SaaS solution that lets managers assign bite-sized learning modules and track employee progress.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-003',
    title: 'ClinicCloud: Online Appointment + EMR Management for Clinics',
    description: 'Small clinics lack proper digital systems. Build a SaaS app where doctors can manage appointments, patient records, and prescriptions in a unified cloud-based platform.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-004',
    title: 'TeamBoard: Task & Team Management for Startups',
    description: 'Small teams need simple project tracking tools without bloated features. Build a Trello-like lightweight SaaS for teams to manage tasks, deadlines, and collaboration.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-005',
    title: 'Analytica: No-Code Data Analytics Platform for SMEs',
    description: 'Small businesses can\'t afford BI tools like Tableau. Build a SaaS tool where users can upload CSVs or connect to their database and generate insights without coding.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-006',
    title: 'WellNest: SaaS for Mental Health Coaches',
    description: 'Therapists and coaches need tools to track client wellness, mood, and session history. Build a SaaS product that manages client sessions, progress tracking, and wellness insights.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-007',
    title: 'ReviewRadar: Review Aggregation SaaS for Brands',
    description: 'Brands struggle to track their product reviews across Amazon, Flipkart, Google, etc. Build a SaaS tool that scrapes and centralizes reviews from multiple platforms for unified monitoring.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-008',
    title: 'ResumeGenie: AI-Powered Resume Builder',
    description: 'Job seekers often lack well-formatted resumes. Create a SaaS platform where users can input data and generate professional resumes with AI-powered content suggestions.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-009',
    title: 'CastCloud: SaaS for Hosting & Distributing Podcasts',
    description: 'Aspiring podcasters need a one-stop shop to upload, distribute, and analyze their episodes. Build a SaaS for podcast hosting and distribution with analytics dashboard.',
   category: 'Cloud Computing'  },
  {
    id: 'CLO-010',
    title: 'LegalEase: AI-Powered Contract Summarizer for Startups & Freelancers',
    description: 'Build a SaaS tool that uses AI to analyze and summarize legal documents in plain English, highlight risky clauses, and suggest edits for better contract management.',
   category: 'Cloud Computing'  }
];

export default function HackathonWebsite() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#F5F5DC] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 border-4 border-[#FF6B35] rounded-full animate-spin">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Code className="h-8 w-8 text-[#FF6B35]" />
                </div>
              </div>
              <div
                className="absolute inset-4 border-4 border-[#8B4513] rounded-full animate-spin"
                style={{ animationDirection: 'reverse', animationDuration: '2s' }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Lightbulb className="h-6 w-6 text-[#8B4513]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#8B4513]">
              <span className="text-[#FF6B35]">HACK</span>FEST 2025
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-[#8B4513] font-medium">Loading Innovation</span>
            </div>

            <div className="w-64 h-2 bg-white border-2 border-[#8B4513] rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-[#FF6B35] rounded-full animate-pulse"
                style={{
                  animation: 'loadingProgress 3s ease-in-out forwards',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="border-b-2 border-[#8B4513] bg-[#F5F5DC] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-[#8B4513]">HackFest 2025</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-[#8B4513] hover:text-[#FF6B35]">About</Link>
              <Link href="#schedule" className="text-[#8B4513] hover:text-[#FF6B35]">Schedule</Link>
              <Link href="#prizes" className="text-[#8B4513] hover:text-[#FF6B35]">Prizes</Link>
              <Link href="#CHIEF_PATRON" className="text-[#8B4513] hover:text-[#FF6B35]">Team</Link>
              <Link href="#general_rules" className="text-[#8B4513] hover:text-[#FF6B35]">Rules</Link>
              <Link href="/problem_statements" className="text-[#8B4513] hover:text-[#FF6B35]">Problem Statements</Link>
              <Link href="/help" className="text-[#8B4513] hover:text-[#FF6B35]">Help</Link>
              <Link href="/wait">
                <button className="sketchy-btn bg-[#FF6B35] text-white px-6 py-2 font-semibold">Register Now</button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <ProblemsPage />
    </div>
  );
}

function ProblemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F5F5DC]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#8B4513]">HackFest 2025 Problem Statements</h1>
        <p className="mt-4 text-xl text-[#8B4513]">Choose from these impactful challenges for your hackathon project</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap mb-8 h-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="mb-2 text-[#8B4513] data-[state=active]:text-white data-[state=active]:bg-[#FF6B35]"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems
                .filter((problem) => category.id === 'all' || problem.category === category.id)
                .map((problem) => (
                  <Card key={problem.id} className="h-full flex flex-col border-2 border-[#FF6B35] bg-white shadow-md">
                    <CardHeader>
                      <p className="text-sm text-gray-500">{problem.id}</p>
                      <CardTitle className="text-[#FF6B35]">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-[#8B4513]">{problem.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
