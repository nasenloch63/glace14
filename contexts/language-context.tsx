"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.production": "Production",
    "nav.store": "Store",
    "nav.book": "Book",
    "nav.gallery": "Gallery",
    
    // Home Page
    "home.hero.title": "glace14",
    "home.hero.subtitle": "A 100m² creative space in central Paris, designed for professionals seeking a modular environment for photo, video, and audio production.",
    "home.hero.bookSession": "Book a Session",
    "home.hero.viewFloorPlan": "View Floor Plan",
    "home.hero.explore": "Explore",
    
    // Floor Plan
    "floorPlan.title": "Studio Floor Plan",
    "floorPlan.subtitle": "Explore our 100m² modular space",
    "floorPlan.description": "Our studio features three distinct areas designed for maximum flexibility",
    "floorPlan.expand": "View Full Floor Plan",
    "floorPlan.collapse": "Show Less",
    "floorPlan.cyclo": "Cyclorama 3-sided backdrop (4.5×4.2m)",
    "floorPlan.cycloHeight": "Height 2.5m",
    "floorPlan.mainStudio": "Main studio space (5.9×16.4m)",
    "floorPlan.productionRoom": "Sound-proof production room",
    "floorPlan.totalSpace": "Total space: 96.76m²",
    
    // Gallery
    "gallery.title": "Studio Gallery",
    "gallery.subtitle": "Explore our versatile studio spaces designed for photo, video, and audio production. Hover over images to discover the details of each area.",
    
    // Equipment & Services
    "equipment.title": "Professional Equipment & Services",
    "equipment.equipment": "Equipment",
    "equipment.equipmentDesc": "Our studio comes fully equipped with professional-grade tools for any production need. All equipment is maintained to the highest standards and available for use during your booking.",
    "equipment.services": "Services & Amenities",
    "equipment.servicesDesc": "Beyond our production spaces, we provide comprehensive support services and amenities to ensure your session runs smoothly and comfortably.",
    
    // Equipment List
    "equipment.item1": "1x Arri 1000w 8kg HMI Tungsten light",
    "equipment.item2": "2x Nanlite FS-300-C Bowens mount lights",
    "equipment.item3": "1x Nanlite FS-300-B Bowens mount light",
    "equipment.item4": "4x Nanlite Pavotube II 15C",
    "equipment.item5": "4x Neewer LP-60-C LED panels",
    "equipment.item6": "2x Godox flash SK400 & SK300 Bowens mount",
    "equipment.item7": "Professional stands, reflectors, and diffusers",
    "equipment.item8": "C stands, Manfrotto windup stands, tripods",
    "equipment.item9": "Colorated backdrop system",
    "equipment.item10": "Barn doors",
    "equipment.item11": "15 colors in stock",
    "equipment.item12": "Beauty dish with professional grid",
    
    // Services List
    "services.item1": "Espresso machine with fresh water",
    "services.item2": "Full refrigerator",
    "services.item3": "Professional makeup station",
    "services.item4": "Dedicated changing room",
    "services.item5": "4 racks with 30 hangers for wardrobe",
    "services.item6": "Catering available on demand",
    "services.item7": "Bose speaker system",
    "services.item8": "Tablet-controlled lighting interface",
    
    // Room 1
    "room1.title": "Room 1 — Main Production Space",
    "room1.description": "Our primary production space is fully equipped for photography and video production, offering exceptional versatility for any creative project. The 75m² studio features professional-grade equipment and can be quickly adapted to suit your specific needs, from commercial photography to music video production.",
    "room1.feature1": "75m² primary production space with professional-grade equipment",
    "room1.feature2": "Exceptional versatility for photography, video, and commercial projects",
    "room1.feature3": "Tablet-controlled professional lighting systems",
    "room1.feature4": "Adaptable for colorama, black screen, and green screen setups",
    
    // Cyclorama
    "cyclo.description": "Our dedicated 20m² cyclorama space features a professional 3-sided backdrop system, perfect for clean, seamless product photography, portraiture, and video production. The tablet-controlled lighting system allows for precise control and rapid setup changes, ensuring you get the perfect shot every time.",
    "cyclo.feature1": "20m² dedicated cyclorama space with 3-sided setup",
    "cyclo.feature2": "Tablet-controlled professional lighting systems",
    "cyclo.feature3": "Adaptable colorama configurations",
    "cyclo.feature4": "Black and chromakey green curtains (available on demand)",
    "cyclo.feature5": "Professional vinyl floor options",
    "cyclo.feature6": "Comfortable seating area for clients and creative team",
    
    // Room 2
    "room2.title": "Room 2 — Creative Studio & Production Space",
    "room2.description": "Our dedicated 25m² space is designed for focused work. Sound-proof and light-proof construction ensures complete control over your production environment, making it ideal for audio, podcast, live streaming recording and post production work.",
    "room2.feature1": "Sound-proof and light-proof room",
    "room2.feature2": "Two dedicated workstations",
    "room2.feature3": "Comfortable seating and resting area for clients and team",
    "room2.feature4": "Hangers and racks",
    
    // Booking CTA
    "cta.title": "Book the Studio",
    "cta.description": "Interested in using our space for your next project? Get in touch to discuss availability and rates.",
    "cta.button": "Book Now",
    "cta.brochure": "Download Studio Brochure",
    
    // Contact
    "contact.title": "Get in touch",
    "contact.description": "Whether you need a studio for your next project or want to collaborate on a production, we would love to hear from you.",
    "contact.phone": "Phone",
    "contact.phoneValue": "+33 6 48 13 38 31",
    "contact.email": "Email",
    "contact.emailValue": "simon@glace14.com",
    "contact.location": "Location",
    "contact.locationValue": "15 Avenue du Général Leclerc, 75014 Paris, FRANCE",
    "contact.instagram": "Instagram",
    
    // Booking Page
    "booking.pageTitle": "Book Your Session",
    "booking.pageSubtitle": "Reserve the glace14 studio for your creative project. Choose your preferred date, time, and session type, and we'll get back to you within 24 hours to confirm.",
    "booking.step1": "Select Session Type",
    "booking.step2": "Schedule Your Session",
    "booking.required": "Required",
    "booking.selectType": "Choose a session type",
    "booking.calendlyDesc": "Select your preferred date and time using the calendar above.",
    "booking.nextStep": "Next step:",
    "booking.confirmationMsg": "After scheduling through Calendly, you'll receive a confirmation email with all the details for your session.",
    
    // What to Expect
    "expect.title": "What to Expect",
    "expect.step1Title": "Submit Request",
    "expect.step1Desc": "Fill out the booking form with your preferred date, time, and session details.",
    "expect.step2Title": "Confirmation",
    "expect.step2Desc": "We'll review your request and confirm availability within 24 hours via email.",
    "expect.step3Title": "Your Session",
    "expect.step3Desc": "Arrive at the studio and focus on your creative work in our professional space.",
    
    // Need Help
    "help.title": "Need Help?",
    "help.description": "If you have questions or need to discuss a custom booking, feel free to reach out directly.",
    "help.emailUs": "Email Us",
    "help.instagram": "Message on Instagram",
    
    // Session Types
    "session.photoVideo": "Photo / Video Production (Room 1 & Changing Room)",
    "session.cyclo": "Room 1 (Cyclorama 3 Sides)",
    "session.room2": "Room 2 (Production Room)",
    "session.duration1": "2hrs to 24hrs",
    "session.duration2": "1hr to 24hrs",
    "session.price1": "60€ HT / hour",
    "session.price2": "50€ HT / hour",
    "session.price3": "10€ HT / hour",
    
    // Legal
    "legal.imprintTitle": "Imprint",
    "legal.privacyTitle": "Privacy Declaration",
    "legal.backHome": "Back to Home",
    
    // Footer
    "footer.rights": "© 2026 glace14. All rights reserved.",
    "footer.home": "Home",
    "footer.studio": "Studio",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Declaration",
  },
  fr: {
    // Navigation
    "nav.production": "Production",
    "nav.store": "Boutique",
    "nav.book": "Réserver",
    "nav.gallery": "Galerie",
    
    // Home Page
    "home.hero.title": "glace14",
    "home.hero.subtitle": "Un espace créatif de 100m² au cœur de Paris, conçu pour les professionnels à la recherche d'un environnement modulable pour la production photo, vidéo et audio.",
    "home.hero.bookSession": "Réserver une Session",
    "home.hero.viewFloorPlan": "Voir le Plan",
    "home.hero.explore": "Explorer",
    
    // Floor Plan
    "floorPlan.title": "Plan du Studio",
    "floorPlan.subtitle": "Découvrez notre espace modulable de 100m²",
    "floorPlan.description": "Notre studio comprend trois zones distinctes conçues pour une flexibilité maximale",
    "floorPlan.expand": "Voir le Plan Complet",
    "floorPlan.collapse": "Réduire",
    "floorPlan.cyclo": "Cyclorama 3 faces (4.5×4.2m)",
    "floorPlan.cycloHeight": "Hauteur 2.5m",
    "floorPlan.mainStudio": "Espace studio principal (5.9×16.4m)",
    "floorPlan.productionRoom": "Salle de production insonorisée",
    "floorPlan.totalSpace": "Surface totale : 96.76m²",
    
    // Gallery
    "gallery.title": "Galerie du Studio",
    "gallery.subtitle": "Découvrez nos espaces de studio polyvalents conçus pour la production photo, vidéo et audio. Survolez les images pour découvrir les détails de chaque zone.",
    
    // Equipment & Services
    "equipment.title": "Équipement & Services Professionnels",
    "equipment.equipment": "Équipement",
    "equipment.equipmentDesc": "Notre studio est entièrement équipé d'outils professionnels pour tous vos besoins de production. Tout l'équipement est maintenu aux normes les plus élevées et disponible pendant votre réservation.",
    "equipment.services": "Services & Commodités",
    "equipment.servicesDesc": "Au-delà de nos espaces de production, nous fournissons des services et commodités complets pour assurer le bon déroulement de votre session.",
    
    // Equipment List
    "equipment.item1": "1x Arri 1000w 8kg HMI lumière Tungstène",
    "equipment.item2": "2x Nanlite FS-300-C monture Bowens",
    "equipment.item3": "1x Nanlite FS-300-B monture Bowens",
    "equipment.item4": "4x Nanlite Pavotube II 15C",
    "equipment.item5": "4x Panneaux LED Neewer LP-60-C",
    "equipment.item6": "2x Flash Godox SK400 & SK300 monture Bowens",
    "equipment.item7": "Pieds professionnels, réflecteurs et diffuseurs",
    "equipment.item8": "Pieds C, pieds Manfrotto, trépieds",
    "equipment.item9": "Fond papier colorama (15 couleurs disponibles)",
    "equipment.item10": "Barn doors",
    "equipment.item11": "15 couleurs en stock",
    "equipment.item12": "Beauty dish avec grille professionnelle",
    
    // Services List
    "services.item1": "Machine à expresso avec eau fraîche",
    "services.item2": "Réfrigérateur complet",
    "services.item3": "Station de maquillage professionnelle",
    "services.item4": "Loge dédiée",
    "services.item5": "4 portants avec 30 cintres pour les vêtements",
    "services.item6": "Traiteur disponible sur demande",
    "services.item7": "Système audio Bose",
    "services.item8": "Interface d'éclairage contrôlée par tablette",
    
    // Room 1
    "room1.title": "Salle 1 — Espace de Production Principal",
    "room1.description": "Notre espace de production principal est entièrement équipé pour la photographie et la production vidéo, offrant une polyvalence pour tout projet créatif. Le studio de 75m² dispose d'équipements de qualité professionnelle et peut être rapidement adapté à vos besoins spécifiques, de la photographie commerciale à la production de clips musicaux.",
    "room1.feature1": "Espace de production principal de 75m² avec équipement professionnel",
    "room1.feature2": "Polyvalence pour la photo, la vidéo et les projets commerciaux",
    "room1.feature3": "Systèmes d'éclairage professionnels contrôlés par tablette",
    "room1.feature4": "Adaptable pour colorama, fond noir et fond vert",
    
    // Cyclorama
    "cyclo.description": "Notre espace cyclorama dédié de 20m² dispose d'un système de fond professionnel à 3 faces, parfait pour la photographie de produits impeccable, les portraits et la production vidéo. Le système d'éclairage contrôlé par tablette permet un contrôle précis et des changements de configuration rapides, garantissant la photo parfaite à chaque fois.",
    "cyclo.feature1": "Espace cyclorama dédié de 20m² avec configuration 3 faces",
    "cyclo.feature2": "Systèmes d'éclairage professionnels contrôlés par tablette",
    "cyclo.feature3": "Configurations de colorama adaptables",
    "cyclo.feature4": "Rideaux noir et vert chromakey (disponibles sur demande)",
    "cyclo.feature5": "Options de sol vinyle professionnel",
    "cyclo.feature6": "Espace de détente confortable pour les clients et l'équipe créative",
    
    // Room 2
    "room2.title": "Salle 2 — Studio Créatif & Espace de Production",
    "room2.description": "Notre espace dédié de 25 m² est conçu pour le travail nécessitant concentration et contrôle total.\nLa construction insonorisée et occultée garantit un environnement de production parfaitement maîtrisé, idéal pour enregistrement, podcast, streaming, post production.",
    "room2.feature1": "Salle insonorisée et occultée",
    "room2.feature2": "Deux postes de travail dédiés",
    "room2.feature3": "Station de montage avec suite logicielle professionnelle",
    "room2.feature4": "Espace détente clients & équipe",
    
    // Booking CTA
    "cta.title": "Réserver le Studio",
    "cta.description": "Réservez et payez instantanément avec notre calendrier en ligne. N'hésitez pas à nous contacter pour toute demandes particulières ou de devis spécifiques!",
    "cta.button": "Réserver",
    "cta.brochure": "Télécharger la Brochure",
    
    // Contact
    "contact.title": "Nous Contacter",
    "contact.description": "Que vous ayez besoin d'un studio pour votre prochain projet ou que vous souhaitiez collaborer sur une production, nous serions ravis d'échanger avec vous.",
    "contact.phone": "Téléphone",
    "contact.phoneValue": "+33 6 48 13 38 31",
    "contact.email": "Email",
    "contact.emailValue": "simon@glace14.com",
    "contact.location": "Adresse",
    "contact.locationValue": "15 Avenue du Général Leclerc, 75014 Paris, FRANCE",
    "contact.instagram": "Instagram",
    
    // Booking Page
    "booking.pageTitle": "Réservez Votre Session",
    "booking.pageSubtitle": "Réservez le studio glace14 pour votre projet créatif. Choisissez votre date, heure et type de session préférés, et nous vous recontacterons sous 24 heures pour confirmer.",
    "booking.step1": "Sélectionner le Type de Session",
    "booking.step2": "Planifier Votre Session",
    "booking.required": "Requis",
    "booking.selectType": "Choisir un type de session",
    "booking.calendlyDesc": "Sélectionnez votre date et heure préférées à l'aide du calendrier ci-dessus.",
    "booking.nextStep": "Prochaine étape :",
    "booking.confirmationMsg": "Après avoir planifié via Calendly, vous recevrez un email de confirmation avec tous les détails de votre session.",
    
    // What to Expect
    "expect.title": "Comment ça marche",
    "expect.step1Title": "Soumettre la Demande",
    "expect.step1Desc": "Remplissez le formulaire de réservation avec vos date, heure et détails de session préférés.",
    "expect.step2Title": "Confirmation",
    "expect.step2Desc": "Nous examinerons votre demande et confirmerons la disponibilité sous 24 heures par email.",
    "expect.step3Title": "Votre Session",
    "expect.step3Desc": "Arrivez au studio et concentrez-vous sur votre travail créatif dans notre espace professionnel.",
    
    // Need Help
    "help.title": "Besoin d'Aide ?",
    "help.description": "Si vous avez des questions ou souhaitez discuter d'une réservation personnalisée, n'hésitez pas à nous contacter directement.",
    "help.emailUs": "Nous Écrire",
    "help.instagram": "Message sur Instagram",
    
    // Session Types
    "session.photoVideo": "Production Photo / Vidéo (Salle 1 & Loge)",
    "session.cyclo": "Salle 1 (Cyclorama 3 Faces)",
    "session.room2": "Salle 2 (Salle de Production)",
    "session.duration1": "2h à 24h",
    "session.duration2": "1h à 24h",
    "session.price1": "60€ HT / heure",
    "session.price2": "50€ HT / heure",
    "session.price3": "10€ HT / heure",
    
    // Legal
    "legal.imprintTitle": "Mentions Légales",
    "legal.privacyTitle": "Déclaration de Confidentialité",
    "legal.backHome": "Retour à l'Accueil",
    
    // Footer
    "footer.rights": "© 2026 glace14. Tous droits réservés.",
    "footer.home": "Accueil",
    "footer.studio": "Studio",
    "footer.imprint": "Mentions Légales",
    "footer.privacy": "Déclaration de Confidentialité",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const stored = localStorage.getItem("glace14-language") as Language
    if (stored && (stored === "en" || stored === "fr")) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("glace14-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
