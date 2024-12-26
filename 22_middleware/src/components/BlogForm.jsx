"use client";

import { useActionState } from "react";

export default function BlogForm({ handler, post }) {
  const [state, action, isPending] = useActionState(handler, undefined);

  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="postId" defaultValue={post?._id} />
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={state?.title || post?.title}
        />
        {state?.errors?.title && <p className="error">{state.errors.title}</p>}
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          rows="6"
          defaultValue={state?.content || post?.content}
        ></textarea>
        {state?.errors?.content && (
          <p className="error">{state.errors.content}</p>
        )}
      </div>

      <button disabled={isPending} className="btn-primary">
        {isPending ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
