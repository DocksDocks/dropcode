import Link from "next/link";

interface AboutLinkProps {
    text: string;
    url: string;
}

export default function AboutLink({ text, url }: AboutLinkProps) {
    return (
        <div className="bg-blue-700 text-white text-center mb-4 text-3xl md:text-4xl rounded-md w-full py-3">
            <Link href={url} rel="noopener noreferrer" target="_blank">
                {text}
            </Link>
        </div>
    )
}