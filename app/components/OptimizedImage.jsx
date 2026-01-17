import Image from 'next/image';

/**
 * Optimized Image Component
 * يحسّن تحميل الصور تلقائياً
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  ...props 
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={80}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E"
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 80vw,
             (max-width: 1536px) 70vw,
             1200px"
      {...props}
    />
  );
};

export default OptimizedImage;
