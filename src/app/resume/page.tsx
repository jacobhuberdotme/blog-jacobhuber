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
          <CardDescription>My professional journey</CardDescription>
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
              <p className="text-sm mb-2">• Operate with a high degree of self-sufficiency, managing multiple concurrent projects with minimal guidance beyond prioritization from leadership.</p>
              <p className="text-sm mb-2">• Provide expert API consulting for the payer application, helping clients understand and effectively implement API documentation to meet their needs.</p>
              <p className="text-sm mb-2">• Design and develop custom data import and export solutions for provider and payer applications, ensuring seamless integration and functionality.</p>
              <p className="text-sm mb-2">•	Collaborate cross-functionally with internal teams—including Product, Support, DevOps, Sales, and Services—to deliver tailored solutions that meet client requirements.</p>
              <p className="text-sm mb-2">•	Work directly with clients and internal stakeholders to gather requirements, provide updates, and ensure projects are completed on time and to satisfaction.</p>
              <p className="text-sm mb-2">•	Skilled in written communication via emails and Teams chat while leveraging virtual calls when necessary for effective client and team collaboration.</p>
              <p className="text-sm">• Consistently meet deadlines and deliver high-quality results, balancing client satisfaction and operational efficiency.</p>
            </AccordionContent>
          </AccordionItem>
	
            {/* Technical Support Specialist at symplr */}
            <AccordionItem value="techSupportSymplr">
              <AccordionTrigger>Technical Support Specialist, symplr (Oct 2020 - Feb 2024)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Resolved complex issues in a team-oriented environment, focusing on client satisfaction.
                </p>
                <p className="text-sm mb-2">•	Provided dedicated support for the payer application, ensuring client satisfaction through efficient troubleshooting and issue resolution.</p>
                <p className="text-sm mb-2">•	Collaborated with the Product team to clarify application functionality, document bugs or defects, and facilitate debugging and resolution processes.</p>
                <p className="text-sm mb-2">•	Partnered with consultants during payer application implementations to deliver immediate support and address critical client needs.</p>
                <p className="text-sm mb-2">•	Operated independently while remaining readily available to assist colleagues and clients, fostering a collaborative and team-oriented environment.</p>
                <p className="text-sm">• Proactively sought help when needed and maintained detailed documentation to streamline knowledge transfer and enhance team productivity.</p>
            </AccordionContent>
            </AccordionItem>

            {/* Cerner Experience */}
            <AccordionItem value="cerner">
              <AccordionTrigger>Technical Solutions Analyst, Cerner (Feb 2019 - Mar 2020)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Specialized in frontend application support and issue resolution.
                </p>
                <p className="text-sm mb-2">•	Delivered technical support for healthcare applications, focusing on efficient troubleshooting and resolution of client-reported issues.</p>
                <p className="text-sm mb-2">•	Partnered with Product teams to clarify application functionality, identify and document defects, and assist in resolving technical challenges.</p>
                <p className="text-sm mb-2">•	Worked alongside implementation consultants to provide immediate support for critical application needs during deployments.</p>
                <p className="text-sm mb-2">•	Maintained a strong sense of autonomy while collaborating with colleagues and teams to ensure client success.</p>
                <p className="text-sm">• Created and maintained detailed documentation of investigations, facilitating effective knowledge transfer and ongoing process improvement.</p>
            </AccordionContent>
            </AccordionItem>

            {/* Chipotle Experience */}
            <AccordionItem value="chipotle">
              <AccordionTrigger>General Manager, Chipotle (Jun 2012 - Aug 2017)</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mb-4">
                  Transitioned from Crew Member to General Manager, overseeing team and operations.
                </p>
                <p className="text-sm mb-2">•	Led all aspects of restaurant operations, managing a high-performing team and consistently achieving top sales rankings in the region.</p>
                <p className="text-sm mb-2">•	Oversaw profit and loss (P&L) management, including budgeting, cost control, and financial reporting, ensuring profitability and operational efficiency.</p>
                <p className="text-sm mb-2">•	Directed hiring, training, and staff development efforts, building a cohesive and motivated team while promoting from within to foster growth.</p>
                <p className="text-sm mb-2">•	Maintained strict adherence to food safety and quality standards, achieving consistently high scores on health inspections and maintaining compliance with all regulatory requirements.</p>
                <p className="text-sm mb-2">•	Implemented scheduling and labor management strategies to optimize productivity while supporting team work-life balance.</p>
                <p className="text-sm mb-2">•	Ensured exceptional customer experiences by upholding Chipotle&apos;s standards for food quality, cleanliness, and service excellence.</p>
                <p className="text-sm">•	Maintained a strong sense of autonomy while collaborating with colleagues and teams to ensure client success.</p>
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