export function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-[#446084] px-4 py-2.5 text-sm font-bold uppercase text-white"
      style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h2 className="whitespace-nowrap text-base font-bold uppercase text-primary">
        {children}
      </h2>
      <span className="h-px w-full bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}
