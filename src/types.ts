export type Language = 'en' | 'id';

export interface ScheduleItem {
  id: string;
  time: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  location: {
    en: string;
    id: string;
  };
  category: 'all' | 'cycling' | 'family' | 'games' | 'food';
  featured?: boolean;
}

export interface BikeServiceSlot {
  time: string;
  available: boolean;
}

export interface BikeBooking {
  id: string;
  ownerName: string;
  phone: string;
  bikeType: string;
  serviceType: string;
  timeSlot: string;
  notes?: string;
}

export interface PicnicItem {
  id: string;
  name: {
    en: string;
    id: string;
  };
  category: 'essentials' | 'food' | 'fun' | 'care';
  icon: string;
  packed: boolean;
}

export interface CommunityNote {
  id: string;
  name: string;
  bringing: string;
  avatarColor: string;
  likes: number;
}
