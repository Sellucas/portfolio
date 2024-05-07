import Link from "next/link";

export const GetInTouch = () => {
  return (
    <Link
      href={"mailto:lucassellmachado@gmail.com"}
      className="right-56 top-24 hover:right-52 hover:top-20 hover:drop-shadow-lg hover:bg-blue-600 bg-blue-700 w-52 h-52 rounded-full absolute text-2xl font-bold flex items-center justify-center cursor-pointer ease-in-out duration-300"
    >
      Entre em <br /> Contato
    </Link>
  );
};
