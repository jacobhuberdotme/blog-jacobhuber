import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CallToAction() {
  return (
    <Card className="mx-auto max-w-md text-center">
      <CardHeader>
        <CardTitle>Let&apos;s Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed mb-6">
          Interested in reaching out? Whether you&apos;d like to collaborate, discuss ideas, or just say hello, here&apos;s how you can connect with me:
        </p>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-4">
          {/* Email Button */}
          <Button asChild variant="outline">
            <a href="mailto:hello@jacobhuber.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          {/* Twitter Button */}
          <Button asChild variant="outline">
            <a href="https://twitter.com/jacobhuberdotme" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="mr-2 h-4 w-4" /> Follow Me on X
            </a>
          </Button>
          {/* Blog Link */}
          <Button asChild>
            <Link href="/blog">
              Visit My Blog
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}