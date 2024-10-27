'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from '../../mdx-components';

interface MdxContentRendererProps {
  source: MDXRemoteSerializeResult;
}

// Render MDX content using custom components
export default function MdxContentRenderer({ source }: MdxContentRendererProps) {
  const components = useMDXComponents({});

  return <MDXRemote {...source} components={components} />;
}