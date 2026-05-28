const Solution = () => {
  const problems = [
    {
      number: "01",
      title: "Patient-Controlled Access",
      description:
        "Grant or revoke provider access in real time. Permissions are cryptographically enforced — not policy promises.",
    },
    {
      number: "02",
      title: "PTamper-Evident Records",
      description:
        "Every entry is hashed and signed. Any unauthorized modification invalidates the record instantly.",
    },
    {
      number: "03",
      title: "Real-Time Verified Data",
      description:
        "Clinical results verify against issuer signatures at the point of read. No trust in intermediaries required.",
    },
    {
      number: "04",
      title: "Immutable Audit Trails",
      description:
        "A permanent chain of custody for who accessed what data, when, and under what authority.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] text-[#18181B]">
      <div className="content-max-width px-6 py-16 sm:px-10 lg:px-16 lg:py-[82px]">
        <p className="mb-5 text-[10px] font-jetbrains uppercase tracking-[1.2px] text-[#71717A]">
          The Solution
        </p>

        <h2 className="max-w-[470px] font-serif text-[36px] md:text-[44px] italic leading-[1.08] text-[#18181B] sm:text-[56px] lg:text-[64px]">
          Four primitives. <br />
          One verifiable <br />
          system.
        </h2>

        <div className="mt-14 grid border border-[#E4E4E7] bg-[#FAFAFA] md:grid-cols-4 lg:mt-[74px]">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className={`min-h-[186px] px-8 py-8 sm:px-10 ${
                index > 0
                  ? "border-t border-[#E4E4E7] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <p className="mb-9 font-serif text-[11px] text-[#71717A]">
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
  );
};

export default Solution;
