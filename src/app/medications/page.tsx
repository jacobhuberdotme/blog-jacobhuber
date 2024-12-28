// src/app/medications/page.tsx

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/utils/metadata";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Approved Medications",
    description: "A reference guide for approved medications for common conditions.",
    image: "./medications.jpeg",
  });
}

export default function MedicationsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Approved Medications</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>General Medications</CardTitle>
          <CardDescription>Quick reference for common conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="allergies">
              <AccordionTrigger>Allergies</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Benadryl, Claritin, or any antihistamine</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="itching">
              <AccordionTrigger>Minor Itching</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Benadryl or Caladryl Lotion</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nausea">
              <AccordionTrigger>Nausea and Vomiting</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Unisom (as directed) and Vitamin B6 (50mg daily or 25mg three times daily)</p>
                <p className="text-sm">Dramamine, Emetrol, or Bonine</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="stomach-irritation">
              <AccordionTrigger>Stomach Irritation</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Pepcid or Tagamet</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hemorrhoids">
              <AccordionTrigger>Hemorrhoids</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Preparation H or Anusol (Call office if itching persists)</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sleep">
              <AccordionTrigger>Difficulty Sleeping</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Tylenol PM or Benadryl</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="flu">
              <AccordionTrigger>Flu</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Tamiflu</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sore-throat">
              <AccordionTrigger>Sore Throat</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Chloraseptic Spray or Cough Drops</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gas">
              <AccordionTrigger>Gas</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">GasX or Gaviscon</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Medications Approved During Pregnancy</CardTitle>
          <CardDescription>Guidelines for safe medication use</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="headache">
              <AccordionTrigger>Headache or Minor Discomfort</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Tylenol or Extra Strength Tylenol</p>
                <p className="text-sm">NO Aspirin or Ibuprofen (e.g., Advil, Motrin, Aleve)</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sinus">
              <AccordionTrigger>Sinusitis and Nasal Congestion</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Sudafed, Actifed (use cautiously), Tylenol Cold and Sinus, Claritin</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nasal">
              <AccordionTrigger>Nasal Congestion</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Mucinex, Neosynephrin, or Afrin (use for only 3 days)</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="constipation">
              <AccordionTrigger>Constipation</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Dialose, Colace, Fiber-Con, Miralax, Dialose Plus, or Senekot-S</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="indigestion">
              <AccordionTrigger>Indigestion</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Any antacid EXCEPT Alka Seltzer and Sodium Bicarbonate</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cough">
              <AccordionTrigger>Cough</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Robitussin, any type</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="diarrhea">
              <AccordionTrigger>Diarrhea</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">Imodium AD or Kaopectate</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}