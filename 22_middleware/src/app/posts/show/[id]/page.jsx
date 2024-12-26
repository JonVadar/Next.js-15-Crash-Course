import PostCard from "@/components/PostCard";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function Show({ params }) {
  const { id } = await params;

  const postsCollection = await getCollection("posts");
  const post =
    id.length === 24
      ? await postsCollection?.findOne({
          _id: ObjectId.createFromHexString(id),
        })
      : null;

  return (
    <div className="container w-1/2">
      {post ? <PostCard post={post} /> : <p>Failed to fetch the data</p>}
    </div>
  );
}
