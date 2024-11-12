import { BlogPost } from '@/lib/blogUtils';
import { Box, Typography, Avatar } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPreviewProps {
  posts: BlogPost[];
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
              <Box sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}>
                <Box sx={{ position: 'relative', height: '200px' }}>
                  <Image
                    src={post.mainImage.url}
                    alt={post.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    mb: 1
                  }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" sx={{
                    color: 'rgba(0, 0, 0, 0.6)',
                    mb: 3
                  }}>
                    {post.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{ width: 40, height: 40, mr: 2 }}
                      src={post.author.image.url}
                      alt={post.author.name}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'black' }}>
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
