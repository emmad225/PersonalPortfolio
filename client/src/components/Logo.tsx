import { Link } from "wouter";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <a className={`text-2xl font-display font-bold ${className}`}>
        <span className="text-primary">Jane</span>
        <span className="text-[#ff7675]">Doe</span>
      </a>
    </Link>
  );
};

export default Logo;
