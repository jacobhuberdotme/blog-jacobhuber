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
            Please read the following terms and policies carefully before using this website or subscribing to our services.
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
            If you choose to subscribe to updates, leave a comment, or use services provided by this site, your email and/or phone number will only be used for communication related to this website and its services and will not be shared with third parties without your explicit consent.
          </p>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* SMS Notifications Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">SMS Notifications and Consent</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            By subscribing to SMS notifications, you explicitly consent to receive text messages related to the services offered on this site, including Ethereum price alerts or similar updates. Standard message and data rates may apply.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Your phone number will not be shared with third parties and will only be used for the purpose of sending you SMS notifications. You can opt-out of receiving text messages at any time by replying &quot;STOP&quot; to any text message received from us.
          </p>
          <p className="text-sm text-muted-foreground">
            If you have any questions regarding SMS notifications or your data, please contact us at <a href="mailto:contact@jacobhuber.me" className="underline">contact@jacobhuber.me</a>.
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
    </div>
  );
}