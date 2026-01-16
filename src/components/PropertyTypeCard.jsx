const PropertyTypeCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-beige/50 to-sable/50 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-ocre/20 text-center">
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-terracotta">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-elegant font-bold mb-3 sm:mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default PropertyTypeCard
