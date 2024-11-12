import { fetchBySlug, fetchPageBlocks, getMarkdownFromBlocks } from '@/lib/notion';
import { Box, Container, Typography, Button, Avatar } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './notion.css';
import { formatBlogPosts } from '@/lib/blogUtils';

// TODO Add syntax highlighting to code blocks and add Tags to posts
export const revalidate = 0;

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const blocks = await fetchPageBlocks(post.id);
  const content = await getMarkdownFromBlocks(blocks);
  const [formattedPost] = await formatBlogPosts([post]);

  const title = (post.properties.Title as { type: 'title', title: Array<{ plain_text: string }> }).title[0].plain_text;
  const publishedAt = (post.properties.Published as { type: 'date', date: { start: string } }).date.start;
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Container maxWidth="lg" sx={{ py: 15, backgroundColor: 'white' }}>
      <Box sx={{ mb: 6, pr: 5, pl: 5 }}>
        <Typography variant="h2" sx={{ mb: 4, color: 'black' }}>
          {title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Avatar
            src={formattedPost.author.image.url}
            alt={formattedPost.author.name}
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ color: 'black', fontWeight: 'bold' }}>
              {formattedPost.author.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {formattedDate}
            </Typography>
          </Box>
        </Box>

        <div
          className="notion-content"
          dangerouslySetInnerHTML={{ __html: content || '' }}
          style={{ color: 'black' }}
        />
      </Box>
      <Link href="/blog" passHref>
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 4, color: 'black' }}>
          Back to Blog
        </Button>
      </Link>
    </Container>
  );
}
