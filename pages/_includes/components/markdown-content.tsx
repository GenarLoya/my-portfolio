interface MarkdownContentProps {
  children: unknown;
}

export default function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <div class="text-zinc-300 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5 [&_ol]:mt-4 [&_ol]:space-y-2 [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-5 [&_li]:text-zinc-300 [&_strong]:text-white [&_strong]:font-semibold [&_code]:bg-zinc-800/60 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-zinc-200 [&_code]:font-mono [&_pre]:mt-4 [&_pre]:p-4 [&_pre]:bg-zinc-900 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:text-zinc-200 [&_pre]:border [&_pre]:border-zinc-800 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_a]:text-zinc-200 [&_a]:underline [&_a]:hover:text-white [&_blockquote]:border-l-2 [&_blockquote]:border-zinc-700 [&_blockquote]:pl-4 [&_blockquote]:text-zinc-400 [&_blockquote]:italic">
      {children}
    </div>
  );
}