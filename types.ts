import React from 'react';
import type { ImageKey } from './content/imageStore';

export interface Service {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  serviceId: string;
  process: string[];
}

export interface Differentiator {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  avatar: ImageKey;
  name: string;
  title: string;
  quote: string;
  rating: number;
  serviceId?: string;
}

export interface PortfolioItemDetails {
  title: string;
  subtitle: string;
  clientVision: string;
  ourSolution: string[];
  result: string;
  screenshots?: ImageKey[];
}

export interface PortfolioItem {
  image: ImageKey;
  category: string;
  title:string;
  description: string;
  tags: string[];
  serviceId?: string;
  details: PortfolioItemDetails;
}

export interface FormData {
  businessType: string;
  services: string[];
  addons: string[];
  selectedPackage?: string;
  industry: string;
  projectVision: string;
  name: string;
  email: string;
  phoneNumber: string;
}