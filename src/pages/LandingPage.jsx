import { useRef, useEffect, useState } from 'react'
import HeroVideo from '../components/HeroVideo'
import Section from '../components/Section'
import Stats from '../components/Stats'
import PropertyTypeCard from '../components/PropertyTypeCard'
import ServiceCard from '../components/ServiceCard'
import CTAForm from '../components/CTAForm'
import Footer from '../components/Footer'

// Assets imports
import heroVideo from '../../assets/videos/Marrakech.mp4'
import img1 from '../../assets/images/IMG.jpg'
import img2 from '../../assets/images/Riad Marrakech Aesthetic.jpg'
import img3 from '../../assets/images/Villa Maroc Luxe.avif'
import logoRbnb from '../../assets/images/rbnb.png'
import logoBooking from '../../assets/images/booking.png'

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({})
  const sectionRefs = useRef({})

  useEffect(() => {
    const observers = Object.keys(sectionRefs.current).map((key) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        },
        { threshold: 0.1 }
      )
    })

    Object.entries(sectionRefs.current).forEach(([key, ref], index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref)
      }
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCtaClick = () => {
    scrollToSection('contact')
  }

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData)
    alert('Merci pour votre demande ! Nous vous contacterons sous peu.')
  }

  const stats = [
    {
      value: '95%',
      label: 'Taux d\'occupation',
      description: 'Moyenne sur nos propriétés',
    },
    {
      value: '4.9/5',
      label: 'Note moyenne',
      description: 'Plus de 500 avis',
    },
    {
      value: '15+',
      label: 'Villes couvertes',
      description: 'À travers le Maroc',
    },
  ]

  const propertyTypes = [
    {
      icon: '🏢',
      title: 'Appartements',
      description: 'Gestion complète de vos appartements en centre-ville ou en résidence, avec des services sur mesure pour maximiser votre rentabilité.',
    },
    {
      icon: '🏛️',
      title: 'Riads',
      description: 'Expertise dans la gestion des riads traditionnels marocains, alliant authenticité et confort moderne pour une expérience inoubliable.',
    },
    {
      icon: '🏖️',
      title: 'Villas',
      description: 'Prestation haut de gamme pour vos villas avec piscine, jardins et espaces extérieurs, garantissant un entretien impeccable.',
    },
  ]

  const services = [
    {
      icon: '🔑',
      title: 'Gestion des clés',
      description: 'Système sécurisé de remise et récupération des clés pour un check-in/check-out fluide et sécurisé.',
    },
    {
      icon: '🧹',
      title: 'Entretien & Lingerie',
      description: 'Service de ménage professionnel après chaque départ, gestion complète du linge de maison avec qualité hôtelière.',
    },
    {
      icon: '🔧',
      title: 'Maintenance & Entretien',
      description: 'Entretien régulier et réactivité immédiate pour tous types d\'interventions, coordination avec prestataires de confiance.',
    },
    {
      icon: '📸',
      title: 'Photographie & Annonce',
      description: 'Photographie professionnelle et rédaction d\'annonces optimisées pour maximiser la visibilité et les réservations.',
    },
    {
      icon: '💰',
      title: 'Pricing dynamique',
      description: 'Optimisation tarifaire intelligente selon la saisonnalité, événements et concurrence pour maximiser les revenus.',
    },
    {
      icon: '💬',
      title: 'Relation voyageurs',
      description: 'Communication 24/7 avec les voyageurs, gestion des demandes, résolution des incidents et suivi post-séjour.',
    },
    {
      icon: '📊',
      title: 'Reporting propriétaire',
      description: 'Tableaux de bord détaillés avec performances, revenus, avis clients et recommandations d\'amélioration.',
    },
    {
      icon: '🎯',
      title: 'Coordination complète',
      description: 'Gestion de tous les prestataires, planning des interventions, contrôle qualité et optimisation des processus.',
    },
  ]

  return (
    <div className="min-h-screen bg-sable">
      {/* Hero Section */}
      <HeroVideo
        videoSrc={heroVideo}
        title="Gestion locative saisonnière et conciergerie Airbnb au Maroc"
        subtitle="Gestion complète et professionnelle de vos propriétés pour maximiser votre rentabilité et offrir une expérience exceptionnelle à vos voyageurs."
        ctaPrimary="Demander une estimation"
        ctaSecondary="Voir nos services"
        onCtaPrimaryClick={handleCtaClick}
        onCtaSecondaryClick={() => scrollToSection('services')}
      />

      {/* Stats Section (masquée pour le moment) */}
      {false && (
        <Section className="bg-white/50 backdrop-blur-sm" id="stats">
          <Stats stats={stats} />
        </Section>
      )}

      {/* Logos Partenaires Section */}
      <Section className="bg-white/50 backdrop-blur-sm" id="partners">
        <div className="max-w-4xl mx-auto py-4 sm:py-6 md:py-8 flex flex-col items-center gap-3 sm:gap-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center px-4">
            Présence sur les principales plateformes de réservation
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
            <img
              src={logoRbnb}
              alt="Logo Airbnb"
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
            <img
              src={logoBooking}
              alt="Logo Booking.com"
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Property Types Section */}
      <Section id="property-types">
        <div
          ref={(el) => (sectionRefs.current['property-types'] = el)}
          className={`transition-opacity duration-1000 ${isVisible['property-types'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-elegant font-bold text-center mb-3 sm:mb-4 text-gray-800 px-4">
            Types de propriétés
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            Nous gérons tous types de biens immobiliers avec expertise et attention aux détails
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {propertyTypes.map((type, index) => (
              <PropertyTypeCard
                key={index}
                icon={type.icon}
                title={type.title}
                description={type.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Image + Text Section (Alternating) */}
      <Section className="bg-white/30" id="about-1">
        <div
          ref={(el) => (sectionRefs.current['about-1'] = el)}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-opacity duration-1000 ${isVisible['about-1'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="order-2 md:order-1">
            <img
              src={img2}
              alt="Riad Marrakech"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold mb-4 sm:mb-6 text-gray-800">
              Excellence et Expertise
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Chez Moraya, nous mettons notre connaissance du marché de Marrakech et notre exigence du détail au service de votre bien. De l'optimisation de l'annonce à la gestion quotidienne, nous pilotons chaque étape avec méthode, réactivité et transparence pour maximiser vos performances, tout en préservant la qualité et l'image de votre propriété.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Nous assurons une prise en charge complète : coordination des check-in/check-out, ménage et lingerie impeccables, maintenance rapide, communication voyageurs 7j/7 et suivi rigoureux. Notre objectif est simple : offrir une expérience fluide, chaleureuse et haut de gamme, afin que chaque séjour devienne un souvenir marquant et que chaque voyageur reparte avec l'envie de revenir.
            </p>
          </div>
        </div>
      </Section>

      {/* Image + Text Section (Inverted) */}
      <Section id="about-2">
        <div
          ref={(el) => (sectionRefs.current['about-2'] = el)}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center transition-opacity duration-1000 ${isVisible['about-2'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold mb-4 sm:mb-6 text-gray-800">
              Une Approche Sur-Mesure
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Chez Moraya, nous misons sur l'adaptabilité : chaque bien est unique, donc notre accompagnement l'est aussi. Surface, emplacement, standing, capacité d'accueil, cible de voyageurs… nous analysons les spécificités de votre logement pour construire une offre réellement personnalisée et cohérente avec son potentiel.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Concrètement, nous ajustons chaque détail : stratégie tarifaire, présentation de l'annonce, organisation des séjours, standards de ménage et de linge, check-in/check-out, maintenance et attention portée aux voyageurs. Résultat : une gestion fluide, une qualité constante, et une expérience mémorable qui transforme votre bien en une adresse que l'on recommande et où l'on a envie de revenir.
            </p>
          </div>
          <div>
            <img
              src={img3}
              alt="Villa Maroc Luxe"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-white/50 backdrop-blur-sm" id="services">
        <div
          ref={(el) => (sectionRefs.current['services'] = el)}
          className={`transition-opacity duration-1000 ${isVisible['services'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-elegant font-bold text-center mb-3 sm:mb-4 text-gray-800 px-4">
            Nos Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            Une conciergerie complète pour une gestion optimale de votre propriété
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Another Image Section */}
      <Section className="bg-white/30" id="about-3">
        <div
          ref={(el) => (sectionRefs.current['about-3'] = el)}
          className={`transition-opacity duration-1000 ${isVisible['about-3'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto">
            <img
              src={img1}
              alt="Marrakech"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover mb-8"
            />
            <div className="text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold mb-4 sm:mb-6 text-gray-800">
                Votre Partenaire de Confiance
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Chez Moraya, la confiance se construit au quotidien : communication claire, réactivité et suivi rigoureux à chaque étape. Nous prenons en charge votre bien comme si c'était le nôtre, avec une gestion sérieuse, transparente et orientée résultats, pour vous garantir une tranquillité d'esprit totale et des voyageurs pleinement satisfaits.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact">
        <div
          ref={(el) => (sectionRefs.current['contact'] = el)}
          className={`transition-opacity duration-1000 ${isVisible['contact'] ? 'opacity-100' : 'opacity-0'}`}
        >
          <CTAForm
            title="Demandez votre estimation gratuite"
            subtitle="Gestion complète du logement Airbnb : de la gestion des clés à l'optimisation de votre annonce, nous prenons en charge tout pour maximiser votre rentabilité."
            onSubmit={handleFormSubmit}
          />
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
