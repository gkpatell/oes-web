import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="container mx-auto py-8 text-center">
      <Link
        href="https://news.rice.edu"
        className="text-blue-600 underline text-2xl font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        news
      </Link>
    </div>
  );
}
