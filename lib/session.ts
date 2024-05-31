import { getIronSession } from 'iron-session'
import db from './db'
import { cookies } from 'next/headers'

interface SesseionContent {
  id?: number
}

export default async function getSession() {
  return getIronSession<SesseionContent>(cookies(), {
    cookieName: 'delicious-carrot',
    password: process.env.COOKIE_PASSWORD!,
  })
}
