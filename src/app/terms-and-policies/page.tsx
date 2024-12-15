import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsAndPoliciesPage() {
  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Terms and Policies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Please review these terms and policies before using this website.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* Terms of Use Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Terms of Use</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            By accessing this website, you agree to the terms outlined here. The content on this site is provided for informational purposes only and does not constitute professional advice.
          </p>
          <p className="text-sm text-muted-foreground">
            All content, including text and images, is the intellectual property of Jacob Huber Endeavors, LLC. Content may be shared with proper attribution but cannot be used for commercial purposes without explicit permission.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* Privacy Policy Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            This site may collect basic analytics data (e.g., page views) to enhance the user experience. No personally identifiable information is collected without your consent.
          </p>
          <p className="text-sm text-muted-foreground">
            If you subscribe to updates or leave a comment, your contact information will only be used for communication related to this site and will not be shared with third parties without your explicit consent.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* Disclaimer Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The information on this site reflects personal thoughts and is provided in good faith. While efforts are made to ensure accuracy, no warranties or guarantees are provided regarding the completeness, reliability, or applicability of the content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}