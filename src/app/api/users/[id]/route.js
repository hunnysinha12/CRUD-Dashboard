import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";

export async function PUT(request, { params }) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = params;
  const body = await request.json();

  const user = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(id) }, { $set: body });

  return Response.json(user);
}

export async function DELETE(request, { params }) {
  const client = await clientPromise;
  const db = client.db();
  const { id } = params;

  const user = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) });
  return Response.json(user);
}
