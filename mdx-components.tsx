// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

// This file allows you to provide custom React components to be used in MDX files.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize built-in components
    h1: ({ children }) => <h1 style={{ color: 'blue' }}>{children}</h1>,
    img: (props) => <Image {...(props as ImageProps)} />,
    ...components,
  };
}