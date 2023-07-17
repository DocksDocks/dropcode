import Link from "next/link";
import { HiOutlinePencil, HiOutlinePencilAlt } from "react-icons/hi";
interface EditCodeButtonProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

export default function EditCodeButton({ setIsEditing, isEditing }: EditCodeButtonProps) {
  return (
      <button className="bg-yellow-500 hover:bg-yellow-600
        w-full space-x-1 py-4 rounded 
        flex place-content-center
        text-center sm:text-xl lg:text-3xl xl:text-4xl text-white font-semibold"
        onClick={() => {setIsEditing(true) }}>
        <HiOutlinePencilAlt className='mt-1 lg:mt-0 xl:mt-0'/>
        <span className="inline-block">EDIT CODE</span>
      </button>
  );
}