import { generatePageMetadata } from '@/utils/metadata';

export const metadata = generatePageMetadata({
  title: 'About Me - Jacob Huber',
  description: 'Learn more about Jacob Huber.',
  image: '',
});

export default function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <p>This page will have information about me.</p>
    </main>
  );
}