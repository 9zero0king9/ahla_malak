/**
 * Image Preloader Hook
 * بيحمّل الصور مسبقاً قبل عرضها
 */

export const useImagePreload = (imageUrls = []) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }
};

/**
 * Preload Multiple Images
 */
export const preloadImages = async (imageUrls = []) => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        })
    )
  );
};
