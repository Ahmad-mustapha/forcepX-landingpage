import { useState } from 'react'

const navItems = ['Infrastructure', 'Audit Logs', 'Protocol']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-[14px] py-3 text-slate-100 fixed top-0 w-full backdrop-blur-2xl z-30">
      <div className="content-max-width flex items-center justify-between px-8 md:px-16">
        <a href="#" className="inline-flex items-center gap-1 font-semibold text-white">
          <span className="h-6 w-6 flex items-center justify-center rounded-[4px] bg-white text-base font-semibold"></span>
          <span>FORCEPX</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-white/90 text-slate-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden rounded-full border border-white bg-white/5 px-5 py-2 text-[14px] text-white transition hover:bg-white/10 md:inline-flex"
        >
          Log In
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col justify-between w-7 h-5 md:hidden z-60"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${open ? 'rotate-45 translate-y-[10px]' : ''}`} />
          <span className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[2px] w-full bg-white transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`fixed inset-0 h-screen z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)} />

      <div className={`text-[#18181B] fixed top-0 right-0 z-40 h-screen w-full max-w-xs bg-[#181818] p-6 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col absolute right-6 justify-between w-7 h-5 md:hidden z-60"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block h-[2px] w-full bg-black transition-transform duration-300 ${open ? 'rotate-45 translate-y-[10px]' : ''}`} />
          <span className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[2px] w-full bg-black transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button> */}

        <nav className="flex flex-col items-start gap-5 mt-16 text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="text-base transition"
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full border border-white bg-white/5 px-5 py-2 text-[14px] text-white transition hover:bg-white/10"
          >
            Log In
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
