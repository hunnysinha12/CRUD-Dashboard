import clientPromise from '@/lib/db';

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection('users').find({}).toArray();
  return Response.json(users);
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db();
  const body = await request.json();
  const user = await db.collection('users').insertOne(body);
  return Response.json(user);
}