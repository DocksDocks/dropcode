import { HiOutlinePencilAlt } from "react-icons/hi";
import DefaultCodeButton from "./DefaultCodeButton";
interface EditCodeButtonProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

export default function EditCodeButton({ setIsEditing, isEditing }: EditCodeButtonProps) {
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <DefaultCodeButton color={'yellow'} text={'edit code'}
      icon={HiOutlinePencilAlt} onClick={handleEdit}/>
  );
}