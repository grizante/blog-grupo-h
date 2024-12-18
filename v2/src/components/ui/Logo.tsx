import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <Link href="about">
          <Image src="/logo2.png" alt="logo" width={40} height={40} />
        </Link>
        <Link href="about" className="ml-2 text-xl">
          TECH NEWS
        </Link>
      </div>
    </>
  );
};
