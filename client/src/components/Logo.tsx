import { Link } from "wouter";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`text-2xl font-display font-bold ${className}`}>
      <span className="text-primary">Jane</span>
      <span className="text-[#ff7675]">Doe</span>
    </Link>
  );
};

export default Logo;
