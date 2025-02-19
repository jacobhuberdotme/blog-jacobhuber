import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Jacob Huber - Resume",
    description: "Discover Jacob Huber's experience in software engineering, API development, and data management.",
    image: "/me.jpeg",
  });
}

export default function ResumePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jacob Huber",
    "url": "https://jacobhuber.me/resume",
    "image": "https://jacobhuber.me/me.jpeg",
    "jobTitle": "Software Engineer, API Consultant",
    "description": "Software engineer specializing in API development, data management, and workflow automation.",
    "sameAs": [
      "https://github.com/jacobhuber",
      "https://twitter.com/jacobhuber",
      "https://www.linkedin.com/in/jacobhuber"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Symplr"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Columbia College"
    },
    "knowsAbout": [
      "Software Engineering",
      "API Development",
      "Web Development",
      "Blockchain",
      "Artificial Intelligence"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "description": "Develops and maintains software solutions with a focus on API integrations and data processing.",
      "industry": "Technology",
      "skills": ["C#", "TypeScript", "Next.js", "API Development", "SQL"]
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-4xl font-bold mb-6">Jacob Huber&apos;s Resume</h1>

      {/* Experience Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardDescription>Technical expertise and industry experience</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>

            {/* symplr - Software Engineer */}
            <AccordionItem value="symplr">
              <AccordionTrigger>Software Engineer, symplr (Jan 2024 - Present)</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Develops custom data import/export solutions for provider and payer applications.</li>
                  <li>Manages multiple concurrent projects independently, ensuring timely delivery.</li>
                  <li>Collaborates cross-functionally with Product, Support, and DevOps teams.</li>
                  <li>Consults on API best practices to improve integration efficiency.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* symplr - Tech Support */}
            <AccordionItem value="techSupportSymplr">
              <AccordionTrigger>Technical Support Specialist, symplr (Oct 2020 - Feb 2024)</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Resolved complex API and application issues for the payer platform.</li>
                  <li>Worked closely with product teams to debug and document system behavior.</li>
                  <li>Collaborated on software implementations and troubleshooting efforts.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cerner */}
            <AccordionItem value="cerner">
              <AccordionTrigger>Technical Solutions Analyst, Cerner (Feb 2019 - Mar 2020)</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Supported healthcare applications by troubleshooting frontend issues.</li>
                  <li>Provided technical guidance for system deployments and maintenance.</li>
                  <li>Maintained comprehensive documentation for issue resolution.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Chipotle - Management */}
            <AccordionItem value="chipotle">
              <AccordionTrigger>General Manager, Chipotle (Jun 2012 - Aug 2017)</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Led restaurant operations, achieving top sales rankings in the region.</li>
                  <li>Managed P&L, budgeting, and cost control for optimal profitability.</li>
                  <li>Oversaw hiring, training, and leadership development initiatives.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      {/* Education Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>Academic background and relevant coursework</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>

            {/* Columbia College - MIS */}
            <AccordionItem value="mis">
              <AccordionTrigger>Management Information Systems, Columbia College (2017 - 2018)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">Relevant Coursework:</p>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Principles of Management</li>
                  <li>Business Communication</li>
                  <li>Agile Software Development</li>
                  <li>Database Introduction</li>
                  <li>Web Programming</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Columbia College - Associate of Arts */}
            <AccordionItem value="aa">
              <AccordionTrigger>Associate of Arts, Columbia College (2012 - 2014)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Completed foundational coursework in business and technology.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}