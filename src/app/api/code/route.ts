import { NextResponse } from 'next/server'
 
import { PrismaClient } from "@prisma/client";

export interface ICode {
    id: string
    code: string
    language: string
    expirationDate: Date
}


export const prisma = new PrismaClient();

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}


export async function checkExistCodeId(id: string) {
    const idExists = await prisma.code.findUnique({ where: { id } })
    if (idExists) return true
    return false
}

export async function findCodeId(id: string) {
    const code = await prisma.code.findUnique({ where: { id } })
    return code
}

export async function insertCodeId(data: ICode) {
    const newCode = await prisma.code.create({ data })
    return newCode
}

export async function deleteWhereExpiredCodeId(){
    const code = await prisma.code.deleteMany({ where: { expirationDate: { lte: new Date() } } })
    return code
}