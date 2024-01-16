import type { NextApiRequest, NextApiResponse } from 'next';
import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID as string;

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // workos.userManagement
  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    // Specify that we'd like AuthKit to handle the authentication flow
    provider: 'authkit',

    // The callback endpoint that WorkOS will redirect to after a user authenticates
    redirectUri: 'http://localhost:3000/api/callback',
    clientId,
  });

  res.redirect(authorizationUrl);
};