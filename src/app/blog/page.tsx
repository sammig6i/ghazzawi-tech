import { Box, Container, Typography } from '@mui/material';
import BlogGrid from '@/app/components/BlogGrid';
import { fetchPages, REVALIDATE_TIME } from '@/lib/notion';
import { formatBlogPosts } from '@/lib/blogUtils';
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const revalidate = REVALIDATE_TIME;

export default async function BlogPage() {
  const posts = await fetchPages().then(response =>
    formatBlogPosts(response.results as PageObjectResponse[])
  );

  return (
    <Container maxWidth="lg" sx={{ py: 15, backgroundColor: 'white' }}>
      <Box sx={{ mb: 6 }}>
        <Box sx={{
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'black',
          borderRadius: '100px',
          padding: '4px 12px',
          marginBottom: '16px'
        }}>
          <Typography
            variant="overline"
            sx={{
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            BLOG
          </Typography>
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
            mb: 2,
            color: 'black'
          }}
        >
          Blog
        </Typography>
      </Box>

      <BlogGrid posts={posts} />
    </Container>
  );
}
