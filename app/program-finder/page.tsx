import { ProgramFinderForm } from "@/components/forms/program-finder";

const containerClass = "mx-auto max-w-[1280px] px-6";

export default function ProgramFinderPage() {
  return (
    <section className={`${containerClass} py-16`}>
   
      
        <ProgramFinderForm />
      
    </section>
  );
}
