export function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[42px] overflow-hidden">
      <div
        className="absolute -left-[10px] -right-[30px] top-0 h-[52px]"
        style={{
          backgroundImage: "url(/images/bg_titledm.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "50% 0%",
        }}
      />
      <span className="relative flex h-full items-center pl-[5px] text-base font-semibold uppercase tracking-wide text-white">
        {children}
      </span>
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
