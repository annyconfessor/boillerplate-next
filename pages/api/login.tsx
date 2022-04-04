import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  const { email } = request.body

  return response.json({ message: `Hello ${email}` })
}
