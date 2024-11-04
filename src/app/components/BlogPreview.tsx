import Image from 'next/image';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { urlFor } from '../../../sanity/lib/image';
import Link from 'next/link';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface SanityBlock {
  _type: 'block';
  children?: {
    text?: string;
    _type: string;
  }[];
}

interface BlogPreviewProps {
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    mainImage: SanityImage;
    publishedAt: string;
    body: SanityBlock[];
    author: {
      name: string;
      image: SanityImage;
    };
    categories: {
      title: string;
    }[];
  }[];
}

function calculateReadingTime(body: string | SanityBlock[]): number {
  const WORDS_PER_MINUTE = 200;

  if (typeof body === 'string') {
    const wordCount = body.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  }

  if (Array.isArray(body)) {
    const wordCount = body.reduce((count, block) => {
      if (block._type === 'block') {
        return count + (block.children?.reduce((acc: number, child) => {
          return acc + (child.text?.split(/\s+/).length || 0);
        }, 0) || 0);
      }
      return count;
    }, 0);
    return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  }

  return 1;
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 3
      }}>
        {posts.slice(0, 6).map((post) => (
          <Box key={post.slug}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: '200px' }}>
                  {post.mainImage && (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: 'black',
                      mb: 1,
                      fontSize: '1.25rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(0, 0, 0, 0.6)',
                      mb: 3,
                      fontSize: '1rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {post.author.image && (
                      <Avatar
                        sx={{ width: 60, height: 60, mr: 2 }}
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                      />
                    )}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'black',
                          fontSize: '1.125rem',
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
                        })} - {calculateReadingTime(post.body)} min read
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Link href="/blog" passHref>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: '0.75rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: '#001233',
              },
            }}
          >
            See More Posts
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
