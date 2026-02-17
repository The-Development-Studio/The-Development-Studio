export function OpportunitiesPage() {
  const positions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'On-site',
      type: 'Full-time'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <h1 className="text-5xl font-bold text-black mb-6">Career Opportunities</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
          Join our team of talented professionals and help us create exceptional digital experiences. 
          We're always looking for passionate individuals who want to make an impact.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#FF6600] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Department:</span> {position.department}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Location:</span> {position.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <span className="font-medium">Type:</span> {position.type}
                    </span>
                  </div>
                </div>
                <a 
                  href="mailto:hr@devstudioco.com"
                  className="bg-[#FF6600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF7722] transition-colors whitespace-nowrap inline-block"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always interested in meeting talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <a 
            href="mailto:hr@devstudioco.com"
            className="bg-[#FF6600] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#FF7722] transition-colors inline-block"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}
