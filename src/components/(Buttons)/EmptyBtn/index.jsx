import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EmptyBtn({ path, text, customClass, customLink }) {
  return (
    <Link href={`/${path}`} className={customLink}>
      <button
        className={`rounded-full border border-black bg-transparent text-center py-[10px] px-[30px] w-fit flex justify-center items-center gap-x-[10px]  border-gradient  ${customClass}}`}
      >
        <span>{text}</span>
        <Image
          src="/images/arrow-right.svg"
          width={20}
          height={20}
          alt="arrow-right"
        />
      </button>
    </Link>
  );
}
