import { useState } from 'react'

const CTAForm = ({ title, subtitle, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'appartement',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Web3Forms - Simple form submission service
    // Get your access key from https://web3forms.com (free, no account needed)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

    // Prepare form data for Web3Forms
    const formPayload = {
      access_key: accessKey,
      subject: 'Nouvelle demande d\'estimation - Moraya',
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      property_type: formData.propertyType,
      message: `Nouvelle demande d'estimation reçue :

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de bien: ${formData.propertyType}`,
    }

    try {
      // Send form data to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      const result = await response.json()

      if (result.success) {
        // Also call the onSubmit callback if provided (before resetting form)
        if (onSubmit) {
          onSubmit(formData)
        }
        
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: 'appartement',
        })
      } else {
        throw new Error(result.message || 'Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      setSubmitStatus('error')
      // Fallback: still call onSubmit
      if (onSubmit) {
        onSubmit(formData)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-terracotta/90 to-ocre/90 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-elegant font-bold mb-3 sm:mb-4 text-center">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center opacity-95">
          {subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="+212 6XX XXX XXX"
              />
            </div>
            
            <div>
              <label htmlFor="propertyType" className="block mb-2 font-semibold">
                Type de bien
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="appartement">Appartement</option>
                <option value="riad">Riad</option>
                <option value="villa">Villa</option>
              </select>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-500/90 text-white p-4 rounded-lg text-center">
              ✓ Merci pour votre demande ! Nous vous contacterons sous peu.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-500/90 text-white p-4 rounded-lg text-center">
              ✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-terracotta font-bold py-4 px-8 rounded-lg hover:bg-beige transition-all duration-300 transform hover:scale-105 shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Demander une estimation'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CTAForm
