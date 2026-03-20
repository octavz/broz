import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  readonly content: string;
  readonly invert?: boolean;
  readonly className?: string;
}

export default function MarkdownRenderer({ content, invert = false, className }: MarkdownRendererProps) {
  const baseClassName =
    'prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-a:no-underline hover:prose-a:underline'

  const defaultColors = 'prose-strong:text-primary-700 prose-a:text-primary-600'
  const invertedColors =
    'prose-invert prose-headings:text-white prose-p:text-white/90 prose-li:text-white/85 prose-strong:text-white prose-a:text-primary-200'

  return (
    <div className={[baseClassName, invert ? invertedColors : defaultColors, className].filter(Boolean).join(' ')}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}
