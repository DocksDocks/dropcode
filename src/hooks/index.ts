import { ICode } from "@/interfaces";

export async function postHandler(dataSent: ICode) {
    const data = await fetch(`/api/code`, {
        method: 'POST',
        body: JSON.stringify(dataSent),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
    return data as ICode
}

export async function getHandler(id: string) {
    const res = await fetch('/api/code?id=' + id, {
        method: 'GET',
    }).then(res => {
         return res.json()
    } );
    return res as ICode
}