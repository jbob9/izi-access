// Create an API route `pages/api/user.js`
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

// Javascript Object Signing and Encryption (JOSE)
// https://www.npmjs.com/package/jose
import { jwtVerify } from 'jose';

// Get secret
const secret = new Uint8Array(
  Buffer.from(process.env.JWT_SECRET_KEY as string, 'base64'),
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = getCookie('token', { req, res }) as string;

  // Verify the JWT signature
  let verifiedToken;
  try {
    verifiedToken = await jwtVerify(token, secret);
  } catch {
    res.status(401).json({ isAuthenticated: false });
  }

  // Return the User object if the token is valid
  res.status(200).json({
    isAuthenticated: true,
    user: verifiedToken?.payload.user,
  });
};
