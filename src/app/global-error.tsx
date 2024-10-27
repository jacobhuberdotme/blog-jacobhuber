'use client';

import { useEffect, useState } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Log the error to an external service if necessary
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body style={styles.body}>
        <div style={styles.container}>
          <h1 style={styles.heading}>Oops! Something went wrong.</h1>
          <p style={styles.message}>
            {retryCount > 2
              ? "It seems the error is persisting. Please contact support."
              : "We're sorry for the inconvenience. An unexpected error has occurred."}
          </p>
          <button
            style={styles.button}
            onClick={() => {
              setRetryCount((count) => count + 1);
              reset();
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    textAlign: 'center' as const,
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1rem',
    color: '#666',
    margin: '5px 0',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};