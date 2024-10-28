import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface BlogPostLayoutProps {
  children: ReactNode;
  title: string;
  date: string;
  image?: string;
  description?: string;
}

export default function BlogPostLayout({
  children,
  title,
  date,
  image,
  description,
}: BlogPostLayoutProps) {
  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
          {description && <p className="mt-2 text-muted-foreground">{description}</p>}
        </CardHeader>
        {image && (
          <CardContent>
            <div className="relative w-full h-64 md:h-80">
              <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </CardContent>
        )}
      </Card>

      <Separator className="my-6" />

      {/* Main Content Area with Typography Styling */}
      <article className="prose prose-invert lg:prose-lg prose-headings:font-semibold prose-headings:text-primary prose-a:text-primary hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:italic">
        {children}
      </article>
    </div>
  );
}