import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const Faqs = () => {
  return (
    <div>
      Faqs
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Faqs;
