import React from 'react'
import { IoMdArrowBack } from "react-icons/io";


const Access = () => {
  const [email, setEmail] = React.useState("");
  const [userType, setUserType] = React.useState("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, userType });
  };

  return (
    <section className="overflow-hidden text-[#18181B] mb-16">
      <div className="flex sm:items-center justify-between text-[14px] py-10 text-slate-100 px-6 md:px-16 content-max-width border-t-1 border-[#E4E4E7] flex-col sm:flex-row gap-6 sm:gap-0">
      <a href="#" className="inline-flex items-center gap-1 font-semibold text-[#18181B]">
          <span className=" h-6 w-6 items-center justify-center rounded-[4px] bg-[#18181B] text-base font-semibold">
          </span>
          <span>FORCEPX</span>
        </a>
        <a
        href="/"
          className="text-[14px] text-[#71717B] flex items-center gap-1"
        >
          <IoMdArrowBack />
          Back
        </a>
    </div>
      <div className="content-max-width flex min-h-[436px] flex-col gap-12 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-[390px] lg:-mt-2">
          <p className="mb-4 text-[10px] font-jetbrains uppercase tracking-[0.3em] text-[#71717A]">
            Early Access
          </p>

          <h2 className="max-w-[360px] font-serif text-[30px] italic leading-[1.03] text-[#18181B] sm:text-[32px]">
            The architecture
of trust.
          </h2>

          <p className="mt-6 max-w-[400px] text-[13px] leading-[1.6] text-[#71717A]">
            Build on a cryptographically verifiable medical ledger
designed for institutions that take integrity seriously.
Request access for your team below.
          </p>
          <p className="text-[10px] font-jetbrains uppercase tracking-[1px] text-[#71717A] mt-6">Available to institutions — Q4 2026</p>
        </div>

        <div className="relative min-h-[310px] w-full max-w-[664px] lg:min-h-[316px] lg:shrink-0 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-[536px] border border-[#E4E4E7] rounded-[12px] p-8">
            {/* Email Input */}
            <div className="mb-8">
              <label className="block text-[11px] font-jetbrains uppercase tracking-[0.15em] text-[#18181B] mb-3">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourdomain.com"
                className="w-full border border-[#E4E4E7] rounded-[8px] px-4 py-3 text-[13px] text-[#18181B] placeholder-[#B4B4B8] focus:outline-none focus:border-[#18181B] transition"
              />
            </div>

            {/* User Type Selection */}
            <div className="mb-8 font-jetbrains">
              <label className="block text-[11px] font-jetbrains uppercase tracking-[0.15em] text-[#18181B] mb-3">
                I am a
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setUserType("user")}
                  className={`flex-1 border rounded-[8px] py-2 sm:py-3 px-4 text-[10px] font-jetbrains uppercase tracking-[1px] transition ${
                    userType === "user"
                      ? "border-[#18181B] bg-white text-[#18181B]"
                      : "border-[#E4E4E7] bg-white text-[#71717A] hover:border-[#18181B]"
                  }`}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("provider")}
                  className={`flex-1 border rounded-[8px] py-2 sm:py-3 px-4 text-[10px] font-jetbrains uppercase tracking-[1px] transition ${
                    userType === "provider"
                      ? "border-[#18181B] bg-white text-[#18181B]"
                      : "border-[#E4E4E7] bg-white text-[#71717A] hover:border-[#18181B]"
                  }`}
                >
                  Health Provider
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#000000] text-white rounded-[8px] py-3 px-4 text-[10px] font-jetbrains uppercase tracking-[1px] hover:bg-[#18181B] transition mb-4"
            >
              Request Early Access
            </button>

            {/* Disclaimer */}
            <p className="font-jetbrains text-[9px] text-[#B4B4B8] tracking-[1px] uppercase">
              By submitting you agree to be contacted about ForcepX availability
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Access
