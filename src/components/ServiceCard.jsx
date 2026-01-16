const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-beige/50">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-terracotta">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-elegant font-bold mb-2 sm:mb-3 text-gray-800">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
