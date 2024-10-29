import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-center my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3 text-gray-300">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium my-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg my-4 leading-relaxed text-gray-200">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside ml-6 my-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside ml-6 my-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 p-1 rounded text-sm text-purple-300">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-sm my-4">{children}</pre>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        className="my-6 object-cover rounded-lg"
        alt={props.alt || 'MDX image'}
      />
    ),
    ...components,
  };
}