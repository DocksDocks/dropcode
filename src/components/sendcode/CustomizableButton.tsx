interface CustomizableButtonProps {
    text?: string;
    onClick?: () => void;
    color: string;
}

export default function CustomizableButton(props: CustomizableButtonProps) {
    let colorClass = '';
    if (props.color === 'blue') colorClass = `bg-blue-500 hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-900`
    if (props.color === 'red') colorClass = `bg-red-500 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-900`
    return (
        <button
            onClick={props.onClick}
            className={`font-bold py-3 px-14 rounded btn text-white
            btn-primary ${colorClass}`}
        >
            {props.text}
        </button>
    )
}