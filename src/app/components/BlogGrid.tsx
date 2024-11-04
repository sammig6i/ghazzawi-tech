import Image from 'next/image';
import { Box, Typography, Avatar } from '@mui/material';
import { urlFor } from '../../../sanity/lib/image';
import Link from 'next/link';

interface BlogGridProps {
  posts: {
    title: string;
    subtitle: string;
    slug: string;
    mainImage: any;
    publishedAt: string;
    body: any[];
    author: {
      name: string;
      image: any;
    };
    categories: {
      title: string;
    }[];
  }[];
}

function calculateReadingTime(body: string | any[]): number {
  const WORDS_PER_MINUTE = 200;

  // If body is a string (markdown), count words directly
  if (typeof body === 'string') {
    const wordCount = body.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  }

  // If body is an array (legacy portable text), use the existing logic
  if (Array.isArray(body)) {
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

  // Default fallback
  return 1;
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 4,
        gridTemplateColumns: '1fr',
        paddingBottom: 6
      }}
    >
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }} key={post.slug}>
          <Box
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              height: '100%',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }
            }}>
              <Box sx={{ position: 'relative', height: '300px' }}>
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </Box>
              <Box sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    mb: 2,
                    fontSize: '1.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    mb: 3,
                    fontSize: '1.1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.6,
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
                        mb: 0.5,
                      }}
                    >
                      {post.author.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontSize: '1rem'
                      }}
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
          </Box>
        </Link>
      ))}
    </Box>
  );
}