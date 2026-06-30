interface MarkdownContentProps {
  children: unknown;
}

export default function MarkdownContent({ children }: MarkdownContentProps) {
  return <div class="md-content">{children}</div>;
}
