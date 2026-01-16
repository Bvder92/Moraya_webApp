const Stats = ({ stats }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center animate-slide-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-5xl md:text-6xl font-elegant font-bold text-terracotta mb-3">
            {stat.value}
          </div>
          <div className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">
            {stat.label}
          </div>
          <div className="text-gray-500">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats
