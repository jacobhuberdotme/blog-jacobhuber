import { generatePageMetadata } from '@/utils/metadata';

export const metadata = generatePageMetadata({
  title: 'My Resume - Jacob Huber',
  description: 'Check out my professional resume.',
  image: '/',
});

export default function ResumePage() {
  return (
    <main>
      <h1>My Resume</h1>
      <p>This is where my resume will be displayed.</p>
    </main>
  );
}