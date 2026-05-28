import Navbar from './Navbar'
import { FaArrowRight } from "react-icons/fa6";
import { TypingAnimation } from "@/components/ui/typing-animation"


const Hero = () => {
  return (
    <section className=" relative overflow-hidden text-white herobg">
      <Navbar />

      <div className="relative flex items-center p-8 md:p-16 w-full content-max-width mt-16 md:mt-6">
        {/* <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"> */}
          <div className="w-full lg:w-1/2">
            <span className="text-[14px] text-[#fafafa] uppercase font-jetbrains">
              Protocol V.01
            </span>
            <TypingAnimation className="block text-[48px] italic font-serif leading-none md:leading-[56px] xl:leading-[72px] text-white sm:text-[60px] lg:text-[72px] mt-6 md:mt-1">
              Decentralized Healthcare
              Starts With You
            </TypingAnimation>
            <p className="text-[18px] leading-8 text-slate-200">
              Secure, tamper-evident infrastructure for clinical data. ForcepX is the cryptographic substrate for patient-owned medical records and verifiable health audits.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center text-[14px] mt-8">
              <a
                href="/access"
                className="inline-flex items-center justify-center rounded-[6px] bg-black px-8 py-3 text-sm text-white"
              >
                Request Early Access
              </a>
              <a
                href="https://forcepx.gitbook.io/forcepx-docs"
                className="inline-flex items-center justify-center rounded-[6px] border border-white/20 bg-white/5 px-8 py-3 text-sm text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Read Whitepaper <FaArrowRight className='ml-1 mt-[1px]'/>
              </a> 
            </div>
          </div>

          <div className='w-[370px] text-[12px] border-1 rounded-[30px] border-[#C2C2C2] pt-6 hidden md:flex flex-col'>
           <div className='flex items-center justify-between w-full px-6'>
             <p className='rounded-full bg-[#F4EEEE33] p-2 px-4 mb-3'>Health Records</p>
              <p className=''>Hash</p>
           </div>
            <p className='flex flex flex-col space-y-2'>
              <span className='text-[#00DB04] px-6'>11:03:45 <br /> RECORD_UPDATE <br /> Lab-West synchronized blood pathology results <br /> [HASH_COMMITTED]</span>
              <span className='text-[#FF1500] px-6'>11:03:45 <br /> RECORD_UPDATE <br /> Lab-West synchronized blood pathology results <br /> [HASH_COMMITTED]</span>
              <span className='text-[#00DB04] px-6'>11:03:45 <br /> RECORD_UPDATE <br /> Lab-West synchronized blood pathology results <br /> [HASH_COMMITTED]</span>
              <span className='text-[#00DB04] px-6 pb-8 pt-6 rounded-[30px] bg-[#D9D9D933] backdrop-blur-xl'>11:03:45 <br /> RECORD_UPDATE <br /> Lab-West synchronized blood pathology results <br /> [HASH_COMMITTED]</span>
            </p>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default Hero
