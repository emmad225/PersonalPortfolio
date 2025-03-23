interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-display font-bold text-neutral-800 mb-4">{title}</h1>
      <div className="w-20 h-1 bg-[#ff7675] mx-auto mb-6"></div>
      {subtitle && <p className="max-w-2xl mx-auto text-neutral-600">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
