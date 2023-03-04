import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug });
};

export default function PostSlug() {
    const { slug } = useLoaderData<typeof loader>();
    
    return (
      <main className="mx-auto max-w-4xl">
        
      </main>
    );
  }