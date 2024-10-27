// app/dashboard/page.tsx
import type { ReactNode } from 'react';

interface DashboardProps {
  about: ReactNode;
  resume: ReactNode;
  blog: ReactNode;
}

export default function Dashboard({ about, resume, blog }: DashboardProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>
          <h2>About Me</h2>
          {about}
        </div>
        <div>
          <h2>Resume</h2>
          {resume}
        </div>
        <div>
          <h2>Blog</h2>
          {blog}
        </div>
      </div>
    </div>
  );
}