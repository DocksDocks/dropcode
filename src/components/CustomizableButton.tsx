import { IconType } from "react-icons";

interface CustomizableButtonProps {
    text?: string;
    onClick?: () => void;
    color: "blue" | "emerald" | "red" | "yellow";
    class: "home" | "code";
    icon?: IconType;
}

const buttonClass = {
    "home": 'font-bold py-3 px-14 rounded btn text-white btn-primary',
    "code": 'w-full space-x-1 py-4 rounded flex place-content-center text-center sm:text-xl lg:text-3xl xl:text-4xl text-white font-semibold',
}

const buttonColor = {
    "blue": 'bg-blue-500 hover:bg-blue-600',
    "emerald": 'bg-emerald-500 hover:bg-emerald-600',
    "yellow": 'bg-yellow-500 hover:bg-yellow-600',
    "red": 'bg-red-500 hover:bg-red-600',
};

export default function CustomizableButton(props: CustomizableButtonProps) {
    const className = `${buttonColor[props.color]} ${buttonClass[props.class]}`;
    return (
        <button
            onClick={props.onClick}
            className={className}>
            {props.icon && <props.icon className='mt-1 lg:mt-0 xl:mt-0' />}
            {props.text}
        </button>
    )
}