import { DentalService, Doctor, Testimonial, TransformationItem, TechnologyItem } from '../types';
import leadDentistPortraitImg from '../assets/images/lead_dentist_portrait_1786066356683.jpg';
import luxuryClinicBgImg from '../assets/images/luxury_clinic_bg_1786066370326.jpg';

export const LEAD_DENTIST_IMG = leadDentistPortraitImg;
export const CLINIC_BG_IMG = luxuryClinicBgImg;

export const SERVICES_DATA: DentalService[] = [
  {
    id: 'cosmetic-veneers',
    title: 'Porcelain Veneers & Digital Smile Design',
    category: 'Cosmetic',
    shortDesc: 'Handcrafted ultra-thin ceramic veneers designed with AI smile simulation for flawless harmony.',
    description: 'Transform your smile with custom ultra-thin porcelain veneers crafted by master ceramicists. We use 3D digital smile design software so you can preview and approve your new smile before treatment even begins.',
    duration: '2 visits (7–10 days)',
    priceRange: '$1,200 – $2,400 per tooth',
    iconName: 'Sparkles',
    highlights: [
      'Stain-resistant high-grade IPS e.max® ceramic',
      'Minimal or zero tooth prep options',
      'Virtual 3D digital smile simulation before bonding',
      '10-year warranty & customized shade mapping'
    ],
    recommendedFor: 'Chipped, discolored, gapped, or uneven teeth seeking red-carpet perfection.',
    techUsed: '3D CAD/CAM Intraoral Scanner, Digital Smile Design AI',
    popular: true,
  },
  {
    id: 'invisalign-aligners',
    title: 'Invisalign® Clear Aligner Therapy',
    category: 'Cosmetic',
    shortDesc: 'Discreet, comfortable orthodontic alignment with custom SmartTrack™ clear aligners.',
    description: 'Straighten your teeth without wires or brackets using Invisalign®. Our certified Diamond Providers map your teeth movement in 3D, providing precise predictable results in up to 50% less time.',
    duration: '6 – 14 months',
    priceRange: '$3,800 – $6,500',
    iconName: 'Smile',
    highlights: [
      'Near-invisible SmartTrack® medical polymer',
      'iTero Element® 5D digital scan (no goopy impressions)',
      'Fewer office visits with remote progress tracking app',
      'Includes complimentary teeth whitening at completion'
    ],
    recommendedFor: 'Adults and teens wanting invisible tooth alignment with full dietary freedom.',
    techUsed: 'iTero Element 5D NIRI Imaging',
    popular: true,
  },
  {
    id: 'same-day-implants',
    title: 'Same-Day Dental Implants & All-on-4®',
    category: 'Implants',
    shortDesc: 'Permanent titanium/zirconia tooth replacement with immediate loading technology.',
    description: 'Regain full chewing power and natural beauty in a single day. Guided surgical placement ensures 99.8% precision with minimal recovery time.',
    duration: '1 day procedure',
    priceRange: '$2,900 – $4,500 per implant',
    iconName: 'ShieldCheck',
    highlights: [
      'Straumann® Swiss titanium & zirconia implants',
      '3D CBCT guided surgical placement',
      'Immediate provisional tooth attached same day',
      'Lifetime structural warranty on implant post'
    ],
    recommendedFor: 'Missing single or multiple teeth, or full arch restoration.',
    techUsed: '3D Cone Beam Computed Tomography (CBCT), Surgical Robotics',
    popular: true,
  },
  {
    id: 'laser-teeth-whitening',
    title: 'VIP Laser Teeth Whitening',
    category: 'Cosmetic',
    shortDesc: 'Brighten teeth up to 8 shades in 45 minutes with zero post-treatment sensitivity.',
    description: 'Our proprietary cold-laser technology combined with potassium nitrate desensitizing gel delivers brilliant red-carpet whiteness safely without enamel damage.',
    duration: '45 minutes',
    priceRange: '$550 – $850',
    iconName: 'Sun',
    highlights: [
      'Up to 8 shades lighter in 1 single session',
      'Desensitizing infrared light spectrum',
      'Custom takeaway maintenance tray included',
      'Enamel-safe peroxide matrix'
    ],
    recommendedFor: 'Deep coffee, wine, or tobacco stains before major events or photoshoots.',
    techUsed: 'Biolase Epic X Laser System',
  },
  {
    id: 'preventive-family',
    title: 'Spa Dental Hygiene & Airflow® Cleaning',
    category: 'Family Care',
    shortDesc: 'Gentle, pain-free air-polishing dental cleaning with warm water ultrasound.',
    description: 'Experience dental hygiene redefined. Guided Biofilm Therapy (GBT) replaces harsh scraping with warm air and micro-powder for a deeply refreshing, soothing polish.',
    duration: '50 minutes',
    priceRange: '$220 – $380',
    iconName: 'HeartPulse',
    highlights: [
      'EMS Guided Biofilm Therapy (GBT) technology',
      'Warm water ultrasonic scaler (zero sensitivity)',
      'Comprehensive oral cancer & airway screening',
      'Aromatherapy & noise-canceling headphones provided'
    ],
    recommendedFor: 'Routine 6-month checkups, sensitive gums, and comprehensive oral health.',
    techUsed: 'EMS AIRFLOW® Prophylaxis Master',
  },
  {
    id: '247-emergency-care',
    title: 'Immediate 24/7 Emergency Dental Care',
    category: 'Emergency Care',
    shortDesc: 'Rapid relief for severe toothaches, broken teeth, or lost crowns within 60 minutes.',
    description: 'Dental emergencies don’t wait for business hours. Our dedicated VIP emergency suite provides immediate sedation options and instant pain cessation.',
    duration: 'Immediate On-Demand',
    priceRange: 'Covered by Most Insurance',
    iconName: 'Zap',
    highlights: [
      'Guaranteed same-day emergency appointment',
      'Gentle sedation (Nitrous & IV Sedation available)',
      'Digital 3D diagnosis in under 5 minutes',
      'On-site emergency crown fabrication'
    ],
    recommendedFor: 'Severe tooth trauma, cracked teeth, lost fillings, intense pain or swelling.',
    techUsed: 'CEREC Same-Day Crown Mill, Digital X-Ray',
    popular: true,
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, D.D.S.',
    title: 'Lead Cosmetic & Restorative Dentist',
    qualification: 'UCLA School of Dentistry | AACD Fellow',
    experienceYears: 16,
    bio: 'Dr. Rostova is renowned as one of the top cosmetic dentists in the United States, specializing in natural-looking porcelain veneers and full-mouth smile reconstructions.',
    specialty: 'Aesthetic Dentistry & Digital Smile Design',
    image: LEAD_DENTIST_IMG,
    rating: 4.98,
    reviewCount: 840,
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    education: [
      'D.D.S. with Honors — UCLA School of Dentistry',
      'Fellowship in Cosmetic Dentistry — AACD',
      'Master Clinician in Implantology — gIDE Institute'
    ],
    quote: 'A captivating smile is not just about perfection; it is about harmony, confidence, and natural radiance.'
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, D.M.D.',
    title: 'Chief Prosthodontist & Implant Surgeon',
    qualification: 'Harvard School of Dental Medicine | ICOI Diplomat',
    experienceYears: 18,
    bio: 'Pioneer in same-day implant surgery and All-on-4® full arch restorations. Dr. Vance has published over 25 peer-reviewed papers on biomechanical implant osseointegration.',
    specialty: 'Dental Implants & Surgical Reconstructions',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    rating: 4.97,
    reviewCount: 620,
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    education: [
      'D.M.D. — Harvard School of Dental Medicine',
      'Prosthodontics Residency — Mayo Clinic',
      'Diplomate — International Congress of Oral Implantologists'
    ],
    quote: 'Precision engineering meets biological art. Restoring function allows my patients to live without boundaries.'
  },
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen, D.D.S.',
    title: 'Family & Pediatric Dental Director',
    qualification: 'Columbia University College of Dental Medicine',
    experienceYears: 12,
    bio: 'Dr. Chen brings a gentle, empathetic touch to family and preventive dentistry. She specializes in anxiety-free care and laser pediatric dentistry.',
    specialty: 'Preventive Care, Invisalign & Laser Therapy',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    rating: 4.99,
    reviewCount: 510,
    availableDays: ['Tue', 'Thu', 'Fri', 'Sat'],
    education: [
      'D.D.S. — Columbia University',
      'Pediatric & Laser Surgery Certification — WCLI',
      'Invisalign® Diamond Provider'
    ],
    quote: 'Gentle, preventive care built on trust creates a lifetime of healthy, stress-free smiles for the entire family.'
  }
];

export const TRANSFORMATIONS_DATA: TransformationItem[] = [
  {
    id: 'trans-1',
    title: 'Hollywood Smile Makeover',
    category: 'Porcelain Veneers',
    treatmentDays: '10 Days (2 Visits)',
    doctorName: 'Dr. Elena Rostova',
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    story: '10 hand-crafted IPS e.max porcelain veneers corrected severe tetracycline staining and micro-gaps for a breathtaking natural glow.'
  },
  {
    id: 'trans-2',
    title: 'Full Arch Same-Day Restoration',
    category: 'All-on-4 Implants',
    treatmentDays: '1 Day Procedure',
    doctorName: 'Dr. Marcus Vance',
    beforeImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    story: 'Replaced failing bridge work with 4 bio-compatible implants and immediate high-translucency zirconia teeth in 6 hours.'
  },
  {
    id: 'trans-3',
    title: 'Invisalign & Laser Whitening',
    category: 'Orthodontics & Whitening',
    treatmentDays: '7 Months',
    doctorName: 'Dr. Sarah Chen',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    story: 'Corrected deep overbite and severe crowding, followed by 1 session of VIP laser whitening for a vibrant radiant smile.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Victoria Sterling',
    treatment: 'Full Smile Makeover (Porcelain Veneers)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'SmileCare Dental is in a league of its own. From the serene, spa-like private suites to Dr. Rostova’s artistic perfectionism, my experience was seamless. My new veneers look completely natural and I receive compliments every single day!',
    verified: true,
    location: 'Beverly Hills, CA',
    doctorName: 'Dr. Elena Rostova',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    patientName: 'Jonathan Hayes',
    treatment: 'Same-Day Dental Implant',
    rating: 5,
    date: '1 month ago',
    comment: 'I was terrified of dental surgery until I met Dr. Vance. I walked in with a cracked front tooth and walked out 3 hours later with a permanent, pain-free replacement. The 3D guided technology they use is pure magic.',
    verified: true,
    location: 'New York, NY',
    doctorName: 'Dr. Marcus Vance',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    patientName: 'Claire & Family',
    treatment: 'Family Dental Care & Invisalign',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Our entire family switch to SmileCare and we will never look back. My teenagers actually look forward to their dental checkups now thanks to the calm atmosphere, noise-canceling headphones, and Dr. Chen’s incredibly gentle nature.',
    verified: true,
    location: 'Austin, TX',
    doctorName: 'Dr. Sarah Chen',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
  }
];

export const TECH_DATA: TechnologyItem[] = [
  {
    id: 'tech-cbct',
    title: '3D HD CBCT Scanner',
    subtitle: 'Micro-Dose Ultra High Resolution',
    description: 'Generates a 360° 3D anatomical map of your jawbone, nerve pathways, and tooth roots in 8 seconds with 90% less radiation than conventional X-rays.',
    benefits: ['Zero-mistake implant placement', 'Pain-free nerve mapping', 'Instant 3D volumetric diagnosis'],
    iconName: 'Box',
    badge: '3D Imaging'
  },
  {
    id: 'tech-scanner',
    title: 'iTero Element® 5D Scanner',
    subtitle: 'No More Messy Impressions',
    description: 'Captures 6,000 optical frames per second in high-definition color. Provides instant simulated outcome previews for aligners and crowns in under 60 seconds.',
    benefits: ['100% impression-free comfort', 'Near-infrared tooth decay detection', 'Real-time 3D smile visualization'],
    iconName: 'Scan',
    badge: 'Digital Scanning'
  },
  {
    id: 'tech-laser',
    title: 'Biolase Waterlase iPlus®',
    subtitle: 'Laser Dentistry — No Drills, No Shots',
    description: 'Combines laser energy and water atomization to perform gum sculpting and cavity preparation without heat, vibration, or painful drilling sound.',
    benefits: ['Often eliminates local anesthesia shots', 'Rapid 24-hour tissue healing', 'Painless laser gum reshaping'],
    iconName: 'Zap',
    badge: 'Laser Tech'
  },
  {
    id: 'tech-ai',
    title: 'AI Diagnostic Dental Intelligence',
    subtitle: 'Second-Opinion Computer Vision',
    description: 'Our proprietary neural network analyzes digital radiographs alongside our chief clinicians to detect early enamel demineralization before visible cavities form.',
    benefits: ['Early non-invasive intervention', 'Unbiased precision diagnosis', 'Transparent visual patient reports'],
    iconName: 'Cpu',
    badge: 'AI Vision'
  }
];
