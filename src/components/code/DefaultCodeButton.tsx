import { IconType } from "react-icons";
import { HiOutlineClipboard } from "react-icons/hi";

interface DefaultCodeButtonProps {
    text?: string;
    onClick?: () => void;
    color: string;
    icon: IconType;
}

export default function DefaultCodeButton (props: DefaultCodeButtonProps) {
    let colorClass = '';
    if (props.color === 'blue') colorClass = `bg-blue-500 hover:bg-blue-600`
    if (props.color === 'emerald') colorClass = `bg-emerald-500 hover:bg-emerald-600`
    if (props.color === 'yellow') colorClass = `bg-yellow-500 hover:bg-yellow-600`
    return (
        <button
          className={`${colorClass}
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