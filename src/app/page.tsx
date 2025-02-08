import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header/Header";
import PostList from "@/components/PostList/PostList";

export default async function Home() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .limit(5)
    .order("created_at", { ascending: false });
  console.log("Posts:", posts);
  console.log("Erro:", error);

  if (error) {
    console.error("Erro ao buscar posts:", error);
    return <div>Erro ao carregar posts.</div>;
  }

  return (
    <div>
      <Header />
      <PostList posts={posts || []} />
    </div>
  );
}
