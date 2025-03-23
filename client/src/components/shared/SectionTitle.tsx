interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-4xl font-display font-bold text-neutral-800 mb-4">{title}</h2>
      <div className={`w-20 h-1 bg-[#ff7675] mb-6 ${align === "center" ? "mx-auto" : ""}`}></div>
      {subtitle && <p className={`${align === "center" ? "max-w-2xl mx-auto" : ""} text-neutral-600`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
