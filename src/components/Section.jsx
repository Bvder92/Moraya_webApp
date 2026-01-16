const Section = ({ children, className = '', id = '' }) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}

export default Section
