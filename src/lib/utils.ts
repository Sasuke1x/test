/**
 * Get the correct asset path with basePath prefix for production
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/test' : ''
  return `${basePath}${path}`
}

