import PersonalInfo from "../components/PersonalInfo";
import ProfileSection from "../components/ProfileSection";

export default function Page() {
  return (
    <div className="w-full p-4">
      <ProfileSection prof={true}/>
      <PersonalInfo title="Education"/>
      <section className='w-full mt-8'>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Stack</h2>
          <a
            href="#"
            className="font-medium text-sm sm:text-base hover:scale-105 flex items-center transition-transform"
          >
            Full Stack <span className="ml-2">→</span>
          </a>
        </div>
        <div className="relative overflow-hidden w-full py-2 mt-4">
          <p>
          I specialize in creating websites that not only look great but also provide a top-notch user 
          experience. My journey in web design began with a fascination for the ever-evolving world of 
          technology and design. Over the years, I've honed my skills to transform complex concepts into 
          visually appealing, user-friendly websites.
          </p>
        </div>
      </section>
      <PersonalInfo title="Experience"/>
    </div>
  )
}
