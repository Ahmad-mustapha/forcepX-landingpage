
const Problem = () => {
  const problems = [
    {
      number: 'I.',
      title: 'Records live in silos',
      description:
        'Patient history is scattered across hospitals, labs, and clinics with no shared source of truth.',
    },
    {
      number: 'II.',
      title: "Patients don't own their data",
      description:
        'Institutions decide who can read, share, or revoke access - the patient is rarely in the loop.',
    },
    {
      number: 'III.',
      title: 'Integrity is unverifiable',
      description:
        'There is no cryptographic way to prove a medical record has not been altered after the fact.',
    },
  ]

  return (
    <section className="bg-[#FAFAFA] text-[#18181B]">
      <div className="content-max-width px-6 py-16 sm:px-10 lg:px-16 lg:py-[82px]">
        <p className="mb-5 text-[10px] font-jetbrains uppercase tracking-[1.2px] text-[#71717A]">
          The Problem
        </p>

        <h2 className="max-w-[470px] font-serif text-[36px] md:text-[44px] italic leading-[1.08] text-[#18181B] sm:text-[56px] lg:text-[64px]">
          Healthcare data
          <br />
          is fragmented,
          <br />
          opaque, and
          <br />
          easy to alter.
        </h2>

        <div className="mt-14 grid border border-[#E4E4E7] bg-[#FAFAFA] md:grid-cols-3 lg:mt-[74px]">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className={`min-h-[186px] px-8 py-4 md:py-8 sm:px-10 ${
                index > 0 ? 'border-t border-[#E4E4E7] md:border-l md:border-t-0' : ''
              }`}
            >
              <p className="mb-9 font-serif text-[11px] text-[#71717A] font-jetbrains">
                {problem.number}
              </p>
              <h3 className="text-[16px] font-normal text-[#18181B]">
                {problem.title}
              </h3>
              <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#71717A]">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
