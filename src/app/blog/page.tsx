import { client } from '../../../sanity/lib/client';
import { Box, Container, Typography } from '@mui/material';
import BlogGrid from '@/app/components/BlogGrid';

export default async function BlogPage() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      subtitle,
      "slug": slug.current,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }
  `, {}, { next: { revalidate: 0 } });

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
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
              color: 'black',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
            }}
          >
            All Posts
          </Typography>
        </Box>
        <BlogGrid posts={posts} />
      </Container>
    </Box>
  );
} 