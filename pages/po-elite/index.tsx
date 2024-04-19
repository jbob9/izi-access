import PoEliteAbout from "@/components/po-elite/about";
import PoEliteActivities from "@/components/po-elite/activities";
import PoEliteFaqs from "@/components/po-elite/faqs";
import PoEliteHeader from "@/components/po-elite/header";
import PoEliteSponsors from "@/components/po-elite/sponsors";

const PoElite = () => {
  return (
    <div className="pt-20 px-1.5 md:px-6">
      <PoEliteHeader/>

      <div className="pt-16">
        <PoEliteSponsors/>
      </div>

      <div>
        <PoEliteActivities/>
      </div>

      <div className="pt-8">
        <PoEliteAbout/>
      </div>

      <div>
        <PoEliteFaqs/>
      </div>
    </div>
  )
}

export default PoElite