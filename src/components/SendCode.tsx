"use client"

import { getHandler, postHandler } from "@/hooks";
import { ICode } from "@/interfaces";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "./Loading";
import SelectButton from "./home/SelectButton";
import CustomizableButton from "./sendcode/CustomizableButton";

interface SendCodeProps {
    code?: string;
    language?: string;
    id?: string;
    setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
    isEditing?: boolean;
}

export default function SendCode(props: SendCodeProps) {
    const [sendingCode, setSendingCode] = useState(false);
    const router = useRouter();
    const propscode = props.code;
    const [code, setCode] = useState(props.code ?? "");
    const [language, setLanguage] = useState(props.language ?? 'bash');
    const handleCancel = () => {
        if (props.setIsEditing) props.setIsEditing(false);
        return;
    }
    const handleGenerate = async () => {
        if (code === propscode) {
            handleCancel();
            return;
        }
        const id = nanoid();
        const url = `/code/${id}`;
        const expirationDate = new Date(Date.now() + (3600 * 1000 * 24));
        // Store the code and expiration date in the PostgreSQL database
        let insertedCode: ICode;
        const data: ICode = { id, code, language, expirationDate }
        setSendingCode(true);
        const idExists = await getHandler(id);
        if (idExists) { // Check if the nanoid already exists in the database
            // insertedCode = await handleGenerate();
        } else {
            insertedCode = await postHandler(data);
        }
        // Redirect to the generated URL
        router.push(url);
    };
    return (
        <main className="bg-base-200 dark:bg-base-800 h-full mt-12">
            {sendingCode && (<Loading />)}
            <div className={`flex flex-col items-center ${sendingCode ? "opacity-50" : ""}`}>
                <SelectButton language={language} setLanguage={setLanguage} />
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={10}
                    maxLength={5000} // Set the maximum character limit to 5000
                    className="w-1/2 h-3/4 mb-4 p-3 bg-white dark:bg-gray-900 text-black dark:text-white rounded"
                />
                <div className="flex space-x-2">
                    <CustomizableButton onClick={handleGenerate} text={'dropcode'} color={'blue'}/>
                    {props.isEditing && <CustomizableButton onClick={handleCancel} text={'cancel'} color={'red'}/>}
                </div>
            </div>
        </main>
    )
}