
import { SiteContent } from './types';

export const DEFAULT_CONTENT: SiteContent = {
  home: {
    heroTitle: "נתיבי אצבע הגליל - החופש לנוע בראש שקט",
    heroSubtitle: "שירותי הסעות VIP, אוטובוסים, מיניבוסים ומוניות לכל רחבי הארץ. איכות, בטיחות ועמידה בזמנים הם המצפן שלנו.",
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920",
    service1Title: "אוטובוסים חדישים",
    service1Desc: "צי אוטובוסים מפואר לנסיעות קבוצתיות, טיולים ואירועים ברחבי הארץ.",
    service2Title: "מוניות ספיישל",
    service2Desc: "שירות מוניות מהיר וזמין 24/7 לכל יעד, בנסיעות פרטיות ונוחות.",
    service3Title: "הסעות עובדים",
    service3Desc: "פתרונות לוגיסטיים מותאמים אישית לחברות וארגונים, עם דגש על עמידה בלוחות זמנים.",
  },
  about: {
    title: "הסיפור שלנו",
    description: "חברת נתיבי אצבע הגליל הוקמה מתוך חזון לספק שירותי תחבורה מתקדמים, בטיחותיים ואדיבים לתושבי הצפון ולמבקרים בו. אנו מתמחים במתן פתרונות הסעה כוללים, החל ממוניות ועד לאוטובוסים גדולים, תוך שימוש בטכנולוגיות המתקדמות ביותר לניהול צי הרכב.",
    team: [
      { id: '1', name: "איציק מכלוף", role: "מנכ\"ל החברה", image: "https://picsum.photos/seed/itzik/400/500" },
      { id: '2', name: "מוטי מכלוף", role: "סמנכ\"ל החברה", image: "https://picsum.photos/seed/moti/400/500" },
      { id: '3', name: "קובי לוי", role: "מנהל תפעול כלים", image: "https://picsum.photos/seed/kobi/400/500" },
      { id: '4', name: "זוהר מכלוף", role: "מנהלת אדמיניסטרטיבית", image: "https://picsum.photos/seed/zohar/400/500" },
    ],
  },
  gallery: {
    images: [
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1520105072000-f44fc083e50b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1557223562-6c77ff1621de?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800",
    ]
  },
  contact: {
    email: "office@ne-hagalil.com",
    phone: "053-8282832",
    whatsapp: "053-8282832",
    address: "אצבע הגליל, ישראל",
    lat: 33.2073,
    lng: 35.5684
  },
  settings: {
    adminCode: "1234",
    backgroundMusicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    musicEnabled: true
  }
};
