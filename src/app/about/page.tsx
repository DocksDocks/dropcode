import AboutLink from "@/components/about/AboutLink";
import { listAbout } from "@/constants";

export default function About() {
  return (
    <div className="h-full flex flex-col items-center justify-center content-center place-self-center mx-auto mt-24 p-6 w-1/2">
      {listAbout.map((item, index) => (
        <AboutLink key={index} text={item.text} url={item.url} />
      ))}
    </div>
  )
}