// src/app/resume/page.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Jacob Huber - Resume",
    description: "Explore Jacob Huber's professional experience, skills, and education.",
    image: "./me.jpeg",
  });
}

export default function ResumePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Jacob Huber&apos;s Resume</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardDescription>A summary of my professional experience.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {/* Symplr Experience */}
            <AccordionItem value="symplr">
              <AccordionTrigger>Software Engineer, symplr (Jan 2024 - Present)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mt-2 mb-4">C#, REST APIs, troubleshooting, and issue resolution.</p>
                <p className="text-sm mb-2">• Developed and maintained REST APIs to improve integration and functionality.</p>
                <p className="text-sm mb-2">• Collaborated with a team to deliver technical solutions and improve client satisfaction.</p>
                <p className="text-sm">• Provided functional and technical expertise to resolve client issues efficiently.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Support Specialist at symplr */}
            <AccordionItem value="techSupportSymplr">
              <AccordionTrigger>Technical Support Specialist, symplr (Oct 2020 - Feb 2024)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Worked in a team environment to provide functional and technical support to clients, utilizing troubleshooting skills and testing workflows.
                </p>
                <p className="text-sm">• Independently and collaboratively prioritized and resolved issues.</p>
                <p className="text-sm">• Created and maintained documentation and knowledge transfer materials.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Cerner Experience */}
            <AccordionItem value="cerner">
              <AccordionTrigger>Technical Solutions Analyst, Cerner Corporation (Feb 2019 - Mar 2020)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Provided technical expertise and issue resolution for front-end applications.
                </p>
                <p className="text-sm">• Conducted thorough investigations using troubleshooting tools and end-user shadowing.</p>
                <p className="text-sm">• Maintained documentation across the lifecycle of investigations.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Chipotle Experience */}
            <AccordionItem value="chipotle">
              <AccordionTrigger>General Manager, Chipotle Mexican Grill (Jun 2012 - Aug 2017)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Progressed from Crew Member to General Manager, overseeing restaurant operations, team development, and financial management.
                </p>
                <p className="text-sm">• Led day-to-day operations and fostered a teamwork-driven environment.</p>
                <p className="text-sm">• Managed restaurant budgets, sales, and employee schedules to ensure efficiency.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>My academic qualifications and relevant coursework.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {/* Management Information Systems */}
            <AccordionItem value="mis">
              <AccordionTrigger>Columbia College, Management Information Systems (2017 - 2018)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">Relevant Courses:</p>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Principles of Management</li>
                  <li>Business Communication</li>
                  <li>Agile Software Development</li>
                  <li>Introduction to Database</li>
                  <li>Web Programming</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Associate of Arts */}
            <AccordionItem value="aa">
              <AccordionTrigger>Columbia College, Associate of Arts (2012 - 2014)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Completed foundational coursework in various disciplines to earn an Associate of Arts degree.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}