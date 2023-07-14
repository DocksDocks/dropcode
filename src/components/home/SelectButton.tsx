import { Dispatch, SetStateAction } from "react";
import { languageList } from "@/constants";

interface SelectButtonProps {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
}

export default function SelectButton({ language, setLanguage }: SelectButtonProps) {
    return (
        <div className="relative">
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mb-4 bg-white dark:bg-gray-900 pl-6 pr-8 py-2 rounded appearance-none focus:outline-none"
            >
                {languageList.map(({ value, text }) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center transform -translate-y-1/3">
                <svg
                    className="w-8 h-8 fill-white transform translate-y-1/4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 9.293a1 1 0 0 1 1.414 0L10 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                    />
                </svg>
            </div>
        </div>
    )
}