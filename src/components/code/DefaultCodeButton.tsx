import { IconType } from "react-icons";
import { HiOutlineClipboard } from "react-icons/hi";

interface DefaultCodeButtonProps {
    text?: string;
    onClick?: () => void;
    color: string;
    icon: IconType;
}

export default function DefaultCodeButton (props: DefaultCodeButtonProps) {
    return (
        <button
          className={`bg-${props.color}-500 hover:bg-${props.color}-600
          w-full space-x-1 py-4 rounded 
          flex place-content-center
          text-center sm:text-xl lg:text-3xl xl:text-4xl text-white font-semibold`}
          onClick={props.onClick}
        >
          <props.icon className='mt-1 lg:mt-0 xl:mt-0'/>
          <span className='inline-block'>{props.text} </span>
        </button>
    );
}