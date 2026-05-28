
import downLog from '../assets/down.png'
import upLog from '../assets/up.png'

const Tamper = () => {
  return (
    <section className="overflow-hidden bg-[#F4F4F5] text-[#18181B]">
      <div className="content-max-width flex min-h-[436px] flex-col gap-12 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-[390px] lg:-mt-2">
          <p className="mb-4 text-[10px] font-jetbrains uppercase tracking-[1.2px] text-[#71717A]">
            Tamper-Evident Logs
          </p>

          <h2 className="max-w-[360px] font-serif text-[30px] md:text-[36px] italic leading-[1.03] text-[#18181B] sm:text-[32px]">
            Audit trails that cannot be erased.
          </h2>

          <p className="mt-6 max-w-[400px] text-[13px] leading-[1.6] text-[#71717A]">
            Every interaction with patient data is cryptographically signed and
            recorded. ForcepX provides a clear, verifiable chain of custody for
            every medical record in the system.
          </p>
        </div>

        <div className="relative min-h-[310px] w-full max-w-[664px] lg:min-h-[316px] lg:shrink-0">
          <img
            src={downLog}
            alt=""
            className="absolute right-0 top-[29px] z-0 w-[70%] min-w-[330px] max-w-[464px] rounded-[9px]"
          />
          <img
            src={upLog}
            alt="Live verifier audit log"
            className="absolute left-0 top-0 z-10 w-[70%] min-w-[330px] max-w-[464px] rounded-[9px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Tamper
