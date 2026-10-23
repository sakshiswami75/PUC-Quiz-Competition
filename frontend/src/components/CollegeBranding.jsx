export default function CollegeBranding() {
  return (
    <div className="flex min-w-0 items-center justify-center gap-1 sm:gap-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F5F5F5] p-1 sm:h-16 sm:w-16 sm:p-1.5">
        <img
          src="/klelogo.png"
          alt="KLE Society logo"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0 text-center">
        <div className="truncate text-[11px] font-bold leading-tight tracking-wide text-[#FDBA74] sm:text-2xl">
          KLE BCA COLLEGE, NIPANI
        </div>
        <div className="mt-0.5 whitespace-nowrap text-[9px] leading-tight text-[#D4D4D4] sm:mt-1 sm:text-sm">
          (Approved By AICTE, New Delhi)
        </div>
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#F5F5F5] p-1 sm:h-16 sm:w-16 sm:p-1.5">
        <img
          src="/klebcalogo.png"
          alt="KLE Society's G. I. Bagewadi BCA College, Nipani logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
