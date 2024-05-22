import { NextApiRequest, NextApiResponse } from 'next';

// Add this line to make the file a module
export {};

// Your existing handler code with added type annotations
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }

  try {
    await res.revalidate('/ssg');
    await res.revalidate('/isr');
    return res.json({ revalidated: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return res.status(500).json({ message: 'Error revalidating', error: errorMessage });
  }
}
