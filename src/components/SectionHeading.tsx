export function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-[#446084] px-4 py-[9px] text-[13px] font-bold uppercase tracking-wide text-white"
      style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%)" }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex justify-center">
      <h2
        className="w-[295px] max-w-full pr-[100px] text-right text-base font-bold uppercase tracking-wide text-primary"
        style={{
          backgroundImage: "url(/images/bg_title.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 100%",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
