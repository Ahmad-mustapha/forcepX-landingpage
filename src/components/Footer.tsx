const footerItems = ['terms', 'Privacy Protocol', 'Legal']

const Footer = () => {
  return (
    <div className="flex items-center flex-wrap justify-between text-[14px] py-10 text-slate-100 px-8 md:px-16 content-max-width border-t-1 border-[#E4E4E7]">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start">
          <a href="#" className="inline-flex items-center gap-1 font-semibold text-[#18181B]">
            <span className=" h-6 w-6 items-center justify-center rounded-[4px] bg-[#18181B] text-base font-semibold">
            </span>
            <span>FORCEPX</span>
          </a>
        </div>

        <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center">
          <nav className="items-center gap-10 flex">
            {footerItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition uppercase  text-[10px] text-[#71717B]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <span
            className="rounded-full border-1 border-white bg-white/5 px-5 py-2 text-[10px] text-[#71717B] transition hover:bg-white/10"
          >
            © 2026 FORCEPX CORE INFRASTRUCTURE
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
