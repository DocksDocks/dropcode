interface CustomizableButtonProps {
    text?: string;
    onClick?: () => void;
    color: string;
}

export default function CustomizableButton(props: CustomizableButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={`font-bold py-3 px-14 rounded btn btn-primary bg-${props.color}-500 hover:bg-${props.color}-600 text-white dark:bg-${props.color}-800 dark:hover:bg-${props.color}-900`}
        >
            {props.text}
        </button>
    )
}