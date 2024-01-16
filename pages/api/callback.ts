// Create an API route `pages/api/callback.js`
import type { NextApiRequest, NextApiResponse } from 'next';
import { WorkOS } from '@workos-inc/node';
import { setCookie } from 'cookies-next';

import { SignJWT } from 'jose';

// Get secret
const secret = new Uint8Array(
  Buffer.from(process.env.JWT_SECRET_KEY as string, 'base64'),
);

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID as string;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // The authorization code returned by AuthKit
  const code = req.query.code as string;

  const { user } = await workos.userManagement.authenticateWithCode({
    code,
    clientId,
  });

  const token = await new SignJWT({
    // Here you might lookup and retrieve user details from your database
    user,
  })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);

  setCookie('token', token, {
    req,
    res,
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  res.redirect('/');

  res.redirect('/');
  
};
