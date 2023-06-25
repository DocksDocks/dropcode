import { ICode } from '@/interfaces'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id")
  console.log(id)
  const data = await fetch(`${process.env.API_URL}/code/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (res.ok) return res.json()
    return false
  })
  return NextResponse.json(data as ICode)
}

export async function POST(request: Request) {
  const dataSent = await request.json()
  const data = await fetch(`${process.env.API_URL}/code`, {
    method: 'POST',
    body: JSON.stringify(dataSent),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => { return res.json() })
  return NextResponse.json(await data as ICode)
}