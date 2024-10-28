import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import { Alert } from "@/components/ui/alert";
// import { useState } from "react";

export default function TermsAndPoliciesPage() {
  // const [accepted, setAccepted] = useState(false);

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
            Please read the following terms and policies carefully before using this website.
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
            By accessing and using this website, you agree to be bound by these terms. The content on this site is for informational purposes only and should not be used as a substitute for professional advice.
          </p>
          <p className="text-sm text-muted-foreground">
            All content, including text and images, is the intellectual property of Jacob Huber Endeavors, LLC. You may share the content but must provide attribution and cannot use it for commercial purposes without permission.
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
            This site may collect basic analytics data, such as page views, to improve the content and user experience. No personally identifiable information is collected without your consent.
          </p>
          <p className="text-sm text-muted-foreground">
            If you choose to subscribe to updates or leave a comment, your email will only be used for communication regarding this website and will not be shared with third parties.
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
            The information provided on this site is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
        </CardContent>
      </Card>

      {/* <Separator className="my-6" />

      <Alert className="mb-6" variant="info">
        <p className="text-sm">
          By continuing to use this site, you acknowledge that you have read and agree to these terms and policies.
        </p>
      </Alert>

      <Button 
        onClick={() => setAccepted(true)} 
        className="w-full"
        disabled={accepted}
      >
        {accepted ? "Acknowledged" : "Acknowledge Terms"}
      </Button> */}
    </div>
  );
}