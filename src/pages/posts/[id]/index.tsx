import { GetServerSideProps } from "next";
import { createClient } from "@supabase/supabase-js";
import { Container, Title, Meta, Content } from "./styles";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
    created_at: string;
  };
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const { data: post, error } = await supabase
    .from("posts")
    .select("id, title, content, author, created_at")
    .eq("id", id)
    .single();

  if (error || !post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const PostPage = ({ post }: PostProps) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Meta>
        Por {post.author} em {new Date(post.created_at).toLocaleDateString()}
      </Meta>
      <Content>{post.content}</Content>
    </Container>
  );
};

export default PostPage;
