
export interface Notice {
  id: string;
  title: string;
  date: string;
  tag: 'Urgent' | 'General' | 'Event' | 'Holiday';
  description: string;
}

export interface Teacher {
  name: string;
  role: string;
  qualification: string;
  image: string;
  subject: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Event' | 'Sports' | 'Classroom';
}

export interface FeeStructure {
  classRange: string;
  monthlyFee: string;
  admissionFee: string;
}
