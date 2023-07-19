import { HiOutlinePencilAlt } from "react-icons/hi";
import DefaultCodeButton from "./DefaultCodeButton";
import CustomizableButton from "../CustomizableButton";
interface EditCodeButtonProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

export default function EditCodeButton({ setIsEditing, isEditing }: EditCodeButtonProps) {
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <CustomizableButton onClick={handleEdit} text={'edit code'} color={'yellow'} class={'code'} icon={HiOutlinePencilAlt} />
  );
}