"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles, CircleX } from "lucide-react"
import clsx from "clsx"
import ApplicationForm from "@/components/application/ApplicationForm"

export default function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0)
  const [particles, setParticles] = useState<
    { id: number; left: string; delay: number }[]
  >([])
  const [openForm, setOpenForm] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=90",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop&q=90",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=90",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      delay: Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])


  const [style, setstyle] = useState('hidden');
  const handleclick = () => {
    if (style === "block") {
      document.body.style.overflow = "auto";
      setstyle("hidden");
    }
    else {
      document.body.style.overflow = "hidden";
      setstyle("block")
    }
  }
  // csss related......
  const formfielddiv="h-10 flex flex-col ";
  const formlabel="font-bold text-blue-700 ";
  const formfield = "h-full w-full rounded-[4px] hover:border-blue-900/70 focus:border-blue-800/70 focus:shadow-[1px_1px_5px_rgba(30,64,175,0.3)] hover:shadow-[1px_1px_5px_rgba(30,64,175,0.3)] bg-accent/10 hover:border-[2px] focus:border-[2px] border-box py-1 my-1 px-3";
  const buttonanimation = "transition-all transition-100 active:scale-99 hover:scale-102 active:opacity-[0.9]";
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1500 ${
            idx === imageIndex
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-float-particles"
            style={{
              left: particle.left,
              bottom: "-10px",
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
      {/*form*/}
      <div className={clsx("w-screen h-screen top-0  fixed z-90 bg-black/50", style)}>
        <div id="homeenquiryform" className={clsx("flex flex-col justify-center items-end border-box py-5 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-[50vw] h-[90vh]  bg-zinc-50 transition-all duration-300 transform ease-out rounded-[10px] ", style === "block" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none")}>
          <button type="button" onClick={handleclick} className={clsx("w-auto ",buttonanimation)}>
            <CircleX size={40} className="text-accent" strokeWidth={2.5} />
          </button>
          <div className="w-full h-full flex flex-col justify-around">
            <div>
              <p className="text-[3rem] text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent/50 to-blue-900 leading-tight" >MBA Course Enquiry</p>
              <p className="text-[0.8rem] text-center font-bold">Having enquiry regarding our MBA course?? Feel free to ask us through our portal</p>
            </div>
            <form className="grid grid-cols-2 grid-rows-6 gap-9  w-full h-auto">
              <div className={clsx(formfielddiv)}>
                <label htmlFor="name" className={clsx(formlabel)}>Name</label>
                <input id="name" name="name" required placeholder="Enter Name e.g. xxx xx" className={clsx(formfield)} />
              </div>
              <div className={clsx(formfielddiv)}>
                <label htmlFor="name" className={clsx(formlabel)}>Email ID</label>
                <input id="email" name="email" required placeholder="Enter Email Id e.g. xxxx@gmail.com" className={clsx(formfield)} />
              </div>
              <div className={clsx(formfielddiv)}>
                <label htmlFor="name" className={clsx(formlabel)}>Contact Number</label>
                <input id="mobile" name="mobile" required placeholder="Enter Mobile Number e.g. xxxxxxxxxx" className={clsx(formfield)} />
              </div>
              <div className={clsx(formfielddiv)}>
                <label htmlFor="name" className={clsx(formlabel)}>Subject</label>
                <select id="enquiry" name="enquiry" required className={clsx(formfield)}>
                  <option value="">Subject Type</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>
              <div className={clsx(formfielddiv,"col-span-2 row-span-3 h-full resize-none ")}>
                <label htmlFor="name" className={clsx(formlabel)}>Message</label>
                <textarea id="message" name="message" required placeholder="State your Enquiry..." className={clsx(formfield, )}></textarea>
              </div>
              <button type="submit" className={clsx("col-span-2 text-white bg-gradient-to-b from-blue-800 to-blue-500 ", buttonanimation)}>Submit your query</button>
            </form>

          </div>
        </div>
      </div>
      {/*enquiry box*/}
      <div className="absolute z-3 bottom-10 right-10 w-60 h-auto rounded-bl-[20px] rounded-tr-[20px] bg-white/40 backdrop-blur-md border border-white/60 
            shadow-lg  p-6 animate-float p-1 border-box flex flex-col justify-between  gap-4" >
        <p className=" text-white drop-shadow-[3px_3px_4px_rgba(0,0,0,0.9)] text-center leading-tight">Want to know more About MBA program?</p>
        <button type="button" onClick={handleclick} className={clsx("py-1 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.3)] rounded-l-full rounded-r-full border border-[2px] bg-black/50 hover:bg-black/45 text-primary-foreground ", buttonanimation)}>
          Enquire Here
        </button>
      </div>
      <div className="absolute bottom-32 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float-slow" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-scale-pop">
            <span className="text-primary-foreground/90 text-sm font-semibold tracking-wide">
              Excellence in Education
            </span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground">
            Shape Your Future with <span className="text-secondary">IEM MBA</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto">
            Advance your career with world-class MBA programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {/* APPLY NOW */}
            <button
              onClick={() => setOpenForm(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-bold hover:scale-110 transition-all"
            >
              <div className="relative flex items-center justify-center gap-2">
                Apply Now
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>

            <button className="group px-8 py-4 bg-white/15 text-primary-foreground rounded-lg font-bold hover:bg-white/25 transition-all border-2 border-white/30">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* APPLICATION FORM MODAL */}
      {openForm && (
        <ApplicationForm onClose={() => setOpenForm(false)} />
      )}
    </section>
  )
}
