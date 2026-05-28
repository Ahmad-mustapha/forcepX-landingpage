const Architecture = () => {
  return (
    <section className="overflow-hidden bg-[] text-[#18181B]">
      <div className="content-max-width flex min-h-[436px] flex-col gap-12 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-[390px] lg:-mt-2">
          <h2 className="max-w-[360px] font-serif text-[30px] italic leading-[1.03] text-[#18181B] sm:text-[32px]">
            The architecture of trust.
          </h2>

          <p className="mt-6 max-w-[400px] text-[13px] leading-[1.6] text-[#71717A]">
            Build on a cryptographically verifiable medical ledger designed for
            institutions that take integrity seriously.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="/access"
            className="inline-flex items-center justify-center rounded-[6px] bg-black px-8 py-3 text-[14px] text-white"
          >
            Request Early Access
          </a>
          <span className="text-[10px]">AVAILABLE TO INSTITUTIONS Q4 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
