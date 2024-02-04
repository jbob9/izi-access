import { useState } from "react"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/router"

const MemberShipContract = () => {
  const [accept, setAccept] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    if(accept) {
      try {
        setLoading(true)
        const response = await fetch('/api/sanity/update-user', {
          method: 'POST',
          body: JSON.stringify({ accept: true }),
        })
        if(response.ok) {
          window.open('https://www.zeffy.com/en-CA/embed/ticketing/cc3cccd9-ab4e-4eb9-ae05-d930d6a5bef7')
          router.push('/')
        }
      } catch (e) {
        setLoading(false)
      }
      setLoading(false)
    }
  }

  return (
    <div className="">
      <article className="prose lg:prose-xl h-screen overflow-y-scroll">
        <h2>Terms and conditions</h2>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit enim excepturi id error maxime necessitatibus laudantium, quae voluptates quaerat, nulla officiis eaque ipsam alias labore hic odit quisquam dignissimos? Ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cupiditate quia possimus repellat hic vel illo consequuntur. Suscipit itaque voluptas iste dolorem saepe debitis! Dolor quia reprehenderit esse eum eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi libero tempora, vel reprehenderit cupiditate debitis quae obcaecati officia nostrum nemo consequatur sit, cumque est quasi, nesciunt ullam. Voluptatibus, natus.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum minus facilis, incidunt iure veritatis possimus magnam illum odit ex quos cumque ea molestiae? Corporis amet alias obcaecati impedit vel, quibusdam aperiam deleniti ut magnam? Corporis, nemo sit, placeat doloribus, itaque illo quos iste quaerat hic similique totam. Itaque quaerat quae iste saepe ad? Inventore quam est vel, quis magni consectetur necessitatibus quod magnam alias quia dignissimos placeat molestiae officia eos cum itaque ullam provident perferendis. Eligendi nisi expedita laboriosam sunt quibusdam ipsam autem quod quisquam fuga ea omnis quia facilis beatae quos, perspiciatis cum iure velit veniam debitis! Repudiandae possimus quod enim repellendus doloribus eligendi ex incidunt deleniti vero mollitia sint blanditiis, fugiat, est, atque totam ratione? At sint aspernatur fugit repudiandae a consequuntur accusantium dignissimos debitis error itaqu doloribus obcaecati quis facere nulla! Alias enim tenetur voluptatum commodi dolorem labore non ducimus esse.
        </p>
      </article>
      <div className="items-top flex space-x-2 pb-6 py-10">
        <Checkbox id="terms1" checked={accept} onCheckedChange={(v) => setAccept(v.valueOf() as boolean)} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <div className="flex justify-end pb-4 pr-3">
        <Button className="rounded-2xl" disabled={!accept || loading} onClick={handleSubmit}>
          {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />: null}
          Become a member
        </Button>
      </div>

    </div>
  )
}

export default MemberShipContract