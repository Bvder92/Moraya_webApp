const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-8 md:gap-16 lg:gap-24 mb-6 sm:mb-8">
          {/* Identité */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-elegant font-bold text-white mb-4">
              Moraya
            </h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Gestion complète de vos propriétés Airbnb au Maroc avec excellence et professionnalisme.
            </p>
          </div>

          {/* Contact  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-white text-xs font-semibold" */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>conciergerie.moraya@gmail.com</li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i class="fa-brands fa-whatsapp text-green-500 text-lg"></i>
                <span><b>+33 6 20 81 51 30</b>   <b>+33 6 14 06 03 81</b></span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fa-brands fa-instagram text-pink-500 text-lg">
                </i>
                <span>@moraya.ma</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Moraya. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
