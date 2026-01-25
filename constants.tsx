
import { 
  Users, 
  School, 
  BookOpen, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import React from 'react';
import { Notice, Teacher, GalleryItem, FeeStructure } from './types';

export const SCHOOL_NAME = "Samrat Chandra Gupta Maurya Academy";
export const SCHOOL_LOGO = "https://i.postimg.cc/m2LfsRKp/image-removebg-preview.png";
export const SCHOOL_ADDRESS = "Ahmadpur, Barabanki, Uttar Pradesh, India";
export const PRINCIPAL_NAME = "Mr. Vinay Maurya";

export const HIGHLIGHTS = [
  {
    title: "Dedicated Teachers",
    description: "Expert mentorship from Rohit sir, Karan sir, Neetu mam, and Nikhil sir.",
    icon: <Users className="w-8 h-8 text-blue-800" />
  },
  {
    title: "Clean Classrooms",
    description: "State-of-the-art facilities designed for an optimal learning environment.",
    icon: <School className="w-8 h-8 text-blue-800" />
  },
  {
    title: "Holistic Education",
    description: "A balanced curriculum focusing on academic and co-curricular growth.",
    icon: <BookOpen className="w-8 h-8 text-blue-800" />
  },
  {
    title: "Academic Excellence",
    description: "Consistently achieving top-tier results in district and state board exams.",
    icon: <Award className="w-8 h-8 text-blue-800" />
  }
];

export const FACULTY: Teacher[] = [
  {
    name: "Mr. Rohit",
    role: "Senior Teacher",
    subject: "Mathematics",
    qualification: "M.Sc, B.Ed",
    image: "https://picsum.photos/seed/rohit/400/400"
  },
  {
    name: "Mr. Karan",
    role: "Senior Teacher",
    subject: "Science",
    qualification: "M.Sc, B.Ed",
    image: "https://picsum.photos/seed/karan/400/400"
  },
  {
    name: "Ms. Neetu",
    role: "Department Head",
    subject: "English",
    qualification: "M.A, B.Ed",
    image: "https://picsum.photos/seed/neetu/400/400"
  },
  {
    name: "Mr. Nikhil",
    role: "Lead Faculty",
    subject: "Social Studies",
    qualification: "M.A, B.Ed",
    image: "https://picsum.photos/seed/nikhil/400/400"
  }
];

export const NOTICES: Notice[] = [
  {
    id: "1",
    title: "Final Examination Schedule 2024-25",
    date: "May 15, 2024",
    tag: "Urgent",
    description: "The schedule for the upcoming final exams has been uploaded. Please check the academics section."
  },
  {
    id: "2",
    title: "Summer Vacation Announcement",
    date: "May 20, 2024",
    tag: "Holiday",
    description: "The school will remain closed for summer break from June 1st to July 5th."
  },
  {
    id: "3",
    title: "Annual Sports Meet Registration",
    date: "May 10, 2024",
    tag: "Event",
    description: "Registrations for track and field events are now open for classes VI to VIII."
  }
];

export const GALLERY: GalleryItem[] = [
  { id: "g1", url: "https://picsum.photos/seed/edu1/800/600", title: "Annual Day 2023", category: "Event" },
  { id: "g2", url: "https://picsum.photos/seed/edu2/800/600", title: "Football Tournament", category: "Sports" },
  { id: "g3", url: "https://picsum.photos/seed/edu3/800/600", title: "Chemistry Lab", category: "Classroom" },
  { id: "g4", url: "https://picsum.photos/seed/edu4/800/600", title: "Yoga Session", category: "Sports" },
  { id: "g5", url: "https://picsum.photos/seed/edu5/800/600", title: "Cultural Fest", category: "Event" },
  { id: "g6", url: "https://picsum.photos/seed/edu6/800/600", title: "Creative Writing Workshop", category: "Classroom" },
];

export const FEES: FeeStructure[] = [
  { classRange: "Nursery - KG", monthlyFee: "₹800", admissionFee: "₹1500" },
  { classRange: "Class I - V", monthlyFee: "₹1200", admissionFee: "₹2000" },
  { classRange: "Class VI - VIII", monthlyFee: "₹1500", admissionFee: "₹2500" }
];
