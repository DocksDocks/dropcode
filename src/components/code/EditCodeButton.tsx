import Link from "next/link";
import { HiOutlinePencil } from "react-icons/hi";
interface EditCodeButtonProps {
  id: string;
  code: string;
  language: string;
}

export default function EditCodeButton({ id, code, language }: EditCodeButtonProps) {
  return (
    <div className="mb-2 justify-center">
      <Link className="bg-yellow-500 hover:bg-yellow-600 w-full
        flex items-center space-x-1 py-4 rounded 
        text-center justify-center content-center place-content-center
        text-4xl text-white font-semibold"
        href={{
          pathname: `/edit/${id}`,
          query: { code, language },
        }}>
        <HiOutlinePencil />
        <span className="inline-block">EDIT CODE</span>
      </Link>
    </div>
  );
}