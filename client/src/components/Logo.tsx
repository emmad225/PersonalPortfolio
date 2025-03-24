import { Link } from "wouter";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`text-2xl font-display font-bold ${className}`}>
      <span className="text-[#6b7280]">Emma </span>
      <span className="text-[#6b7280]">Duffy</span>
    </Link>
  );
};

export default Logo;
