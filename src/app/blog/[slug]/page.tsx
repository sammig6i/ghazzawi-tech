import { client } from '../../../../sanity/lib/client';
import { urlFor } from '../../../../sanity/lib/image';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function calculateReadingTime(body: any[]): number {
  const WORDS_PER_MINUTE = 200;
  const wordCount = body.reduce((count, block) => {
    if (block._type === 'block') {
      return count + (block.children?.reduce((acc: number, child: any) => {
        return acc + (child.text?.split(/\s+/).length || 0);
      }, 0) || 0);
    }
    return count;
  }, 0);
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <Box sx={{ my: 4, position: 'relative', height: '400px' }}>
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </Box>
      );
    },
  },
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      subtitle,
      mainImage,
      publishedAt,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title
      },
      body
    }
  `, { slug: params.slug }, { next: { revalidate: 0 } });

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 12, md: 16 } }}>
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              color: 'black',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 'bold',
              mb: 2,
              lineHeight: 1.2
            }}
          >
            {post.title}
          </Typography>

          {/* Subtitle */}
          {post.subtitle && (
            <Typography
              variant="h2"
              sx={{
                color: 'rgba(0, 0, 0, 0.7)',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 4,
                lineHeight: 1.4
              }}
            >
              {post.subtitle}
            </Typography>
          )}

          {/* Author Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
            {post.author.image && (
              <Box sx={{ mr: 2 }}>
                <Image
                  src={urlFor(post.author.image).width(60).height(60).url()}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
            )}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: '1.125rem'
                }}
              >
                {post.author.name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '1rem' }}
              >
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })} · {calculateReadingTime(post.body)} min read
              </Typography>
            </Box>
          </Box>

          {/* Blog Content */}
          <Box sx={{
            color: 'black',
            fontSize: '1.125rem',
            lineHeight: 1.8,
            '& p': { mb: 4 },
            '& h2': {
              fontSize: '1.75rem',
              fontWeight: 'bold',
              mt: 6,
              mb: 3
            },
            '& h3': {
              fontSize: '1.5rem',
              fontWeight: 'bold',
              mt: 5,
              mb: 3
            }
          }}>
            <PortableText value={post.body} components={components} />
          </Box>

          {/* Back Button */}
          <Box sx={{ mt: 8, mb: 4 }}>
            <Link href="/blog" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                Back to Blog
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
