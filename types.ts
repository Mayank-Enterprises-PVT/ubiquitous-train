
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Urban';
  description: string;
  location: string;
  image: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  amenities: string[];
}

export interface FloorPlan {
  flatNo: string;
  unit: string;
  sbua: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
