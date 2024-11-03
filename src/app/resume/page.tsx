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
          <CardDescription>My professional journey and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
          {/* Symplr Experience */}
          <AccordionItem value="symplr">
            <AccordionTrigger>Services Software Engineer, symplr (Jan 2024 - Present)</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm mt-2 mb-4">
                Specializes in custom data management applications focused on importing and exporting data.
              </p>
              <p className="text-sm mb-2">• Utilized APIs to support efficient import and export processes, improving data accessibility for clients.</p>
              <p className="text-sm mb-2">• Developed rapid data import and export solutions to address urgent client requirements effectively.</p>
              <p className="text-sm mb-2">• Provided API consulting to guide clients on best practices for data handling and integration.</p>
              <p className="text-sm">• Collaborated with cross-functional teams to deliver tailored solutions, enhancing client satisfaction and operational efficiency.</p>
            </AccordionContent>
          </AccordionItem>

            {/* Technical Support Specialist at symplr */}
            <AccordionItem value="techSupportSymplr">
              <AccordionTrigger>Technical Support Specialist, symplr (Oct 2020 - Feb 2024)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Resolved complex issues in a team-oriented environment, focusing on client satisfaction.
                </p>
                <p className="text-sm">• Troubleshot and prioritized issues independently and collaboratively.</p>
                <p className="text-sm">• Maintained documentation to facilitate knowledge transfer.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Cerner Experience */}
            <AccordionItem value="cerner">
              <AccordionTrigger>Technical Solutions Analyst, Cerner (Feb 2019 - Mar 2020)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Specialized in frontend application support and issue resolution.
                </p>
                <p className="text-sm">• Conducted detailed investigations using technical tools and client feedback.</p>
                <p className="text-sm">• Documented investigations to support efficient resolution tracking.</p>
              </AccordionContent>
            </AccordionItem>

            {/* Chipotle Experience */}
            <AccordionItem value="chipotle">
              <AccordionTrigger>General Manager, Chipotle (Jun 2012 - Aug 2017)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Transitioned from Crew Member to General Manager, overseeing team and operations.
                </p>
                <p className="text-sm">• Managed day-to-day operations with a focus on efficiency and team building.</p>
                <p className="text-sm">• Balanced budgets, schedules, and staff development initiatives.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>My academic background and relevant coursework</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {/* Management Information Systems */}
            <AccordionItem value="mis">
              <AccordionTrigger>Management Information Systems, Columbia College (2017 - 2018)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">Relevant Courses:</p>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                  <li>Principles of Management</li>
                  <li>Business Communication</li>
                  <li>Agile Software Development</li>
                  <li>Database Introduction</li>
                  <li>Web Programming</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Associate of Arts */}
            <AccordionItem value="aa">
              <AccordionTrigger>Associate of Arts, Columbia College (2012 - 2014)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Completed foundational coursework to earn an Associate of Arts degree.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}