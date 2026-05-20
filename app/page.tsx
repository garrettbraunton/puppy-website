import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function PuppyLitterWebsite() {
  const puppies = [
    {
      name: "Hank Williams",
      gender: "Male",
      color: "Cream",
      tail: "Standard",
      price: "$2,500",
      available: false,
      image:
        "/puppies/hank3.JPG",
      description: "At 5 weeks he is a bit more timid out of the bunch, but is curious and building confidence. He will open up with you once he feels comfortable!",
    },
    {
      name: "Benny the Jet",
      gender: "Male",
      color: "Tuxedo",
      tail: "Standard",
      price: "$2,500",
      available: true,
      image:
        "/puppies/benny5.JPG",
      description: "At 5 weeks he is rambunctious, energetic, and fearless. He is a little ball of energy and has a strong sense of adventure!",
    },
    {
      name: "Bruno Mars",
      gender: "Male",
      color: "Tan-Pointed",
      tail: "Standard",
      price: "$2,500",
      available: true,
      image:
        "/puppies/bruno3.JPG",
      description: "At 5 weeks he is super sweet and playful. Loves to be held and play with his siblings!",
    },
    {
      name: "Betty Davis",
      gender: "Female",
      color: "Tricolor",
      tail: "Stub",
      price: "$2,700",
      available: true,
      image:
        "/puppies/betty11.JPG",
      description: "At 5 weeks old Betty loves to be held and cuddle. She is playful and energetic but loves to find a nice corner to pass out in laying on her back!",
    },
        {
      name: "Maple Sue",
      gender: "Female",
      color: "Cream",
      tail: "Standard",
      price: "$2,700",
      available: false,
      image:
        "/puppies/maple3.JPG",
      description: "At 5 weeks old Maple loves to pounce on her siblings and give kisses to whoever is holding her. She is extremely lovey and the smallest of the bunch.",
    },
  ];

  return (
    <div
  className={`${inter.className} min-h-screen scroll-smooth bg-stone-50 text-stone-800`}
    >
{/* Hero Section */}
<section 
id = "top"
className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-stone-50 to-emerald-50 px-6 py-20 text-center">
  
  {/* soft glow background shapes */}
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 opacity-20 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100 opacity-20 blur-3xl" />

  {/* Brand Title */}
  <h1 className="relative text-5xl font-semibold tracking-tight text-stone-900 md:text-6xl">
    Willie-Wilson Doodles
  </h1>

  {/* Subtext */}
  <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
    Schedule a time to meet our perfect little Multi-Gen Doodle puppies now!
  </p>

  {/* Location */}
  <p className="relative mt-6 text-sm tracking-wide text-stone-500">
    📍 Castle Rock, Colorado
  </p>
</section>

{/* Navigation */}
<div className="relative mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3 text-sm">
  
  <a
    href="#puppies"
    className="rounded-full bg-white/70 px-4 py-2 text-stone-700 shadow-sm backdrop-blur transition hover:bg-white"
  >
    Meet the Litter
  </a>

  <a
    href="#expect"
    className="rounded-full bg-white/70 px-4 py-2 text-stone-700 shadow-sm backdrop-blur transition hover:bg-white"
  >
    What to Expect
  </a>

  <a
    href="#gallery"
    className="rounded-full bg-white/70 px-4 py-2 text-stone-700 shadow-sm backdrop-blur transition hover:bg-white"
  >
    Puppy Gallery
  </a>

  <a
    href="#parents"
    className="rounded-full bg-white/70 px-4 py-2 text-stone-700 shadow-sm backdrop-blur transition hover:bg-white"
  >
    Parent Info
  </a>

  <a
    href="#contact"
    className="rounded-full bg-emerald-600 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-700"
  >
    Adoption Info
  </a>
</div>

{/* About Section */}
<section className="mx-auto max-w-3xl px-6 -mt-8">
  <div className="rounded-3xl border border-stone-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur">
    
    <p className="text-sm tracking-wide text-stone-500 uppercase">
      Litter Details
    </p>

    <div className="mt-4 space-y-2 text-stone-700">
      <p>
        <span className="font-semibold">Breed:</span> Aussie Goldendoodle
      </p>
      <p>
        <span className="font-semibold">Born:</span> April 12th, 2026
      </p>
      <p>
        <span className="font-semibold">Available:</span> 5 puppies
      </p>
    </div>
  </div>
</section>

      {/* Puppies Grid */}
      <section 
      id="puppies"
      className="mx-auto max-w-6xl px-6 py-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">The Pups!</h2>

            <p className="mt-2 text-stone-600">
              Gender • Color • Tail Length
            </p>
          </div>

          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
            {puppies.filter((p) => p.available).length} Available
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {puppies.map((puppy) => (
            <div
              key={puppy.name}
              className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="h-72 w-full object-cover"
                />

                <div
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm font-medium ${
                    puppy.available
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-800 text-white"
                  }`}
                >
                  {puppy.available ? "Available" : "Reserved"}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{puppy.name}</h3>

                    <p className="text-stone-500">
                      {puppy.gender} • {puppy.color} • {puppy.tail}
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-800">
                    {puppy.price}
                  </div>
                </div>

                <p className="mt-4 text-stone-600">
                  {puppy.description}
                </p>

{puppy.available && (
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScY9PmcgQUFYZjLYf-cmjU8R7obi2S6iwSR-I6x2VhG61y5dQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 block w-full rounded-2xl bg-stone-900 px-4 py-3 text-center text-white transition hover:bg-stone-700"
  >
    Apply for {puppy.name}
  </a>
)}
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
<div className="mt-16 rounded-3xl bg-white p-8 shadow-md">
  <h3 className="text-3xl font-bold">What’s Included</h3>

  <p className="mt-2 text-stone-600">
    Every puppy goes home with a complete starter care package to ensure a smooth transition into their new family.
  </p>

  <ul className="mt-6 grid gap-4 md:grid-cols-2">
    {[
      "Vet check",
      "First vaccinations",
      "Deworming",
      "Starter food bag",
      "Blanket with Mom’s scent",
      "Early socialization"
    ].map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 rounded-2xl bg-stone-50 p-4"
      >
        <span className="text-emerald-600 text-lg">✓</span>
        <span className="text-stone-700">{item}</span>
      </li>
    ))}
  </ul>
</div>
      </section>

{/* What to Expect Section */}
<section 
id="expect"
className="mx-auto max-w-6xl px-6 py-16">
  <div className="text-center">
    <h2 className="text-4xl font-bold">What to Expect</h2>

    <p className="mt-3 text-stone-600">
      A general overview of what these puppies will likely grow into as adults.
    </p>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {/* Size */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">⚖️</div>
      <h3 className="mt-4 text-xl font-semibold">Expected Size</h3>
      <p className="mt-3 text-stone-600">
        Puppies are expected to reach approximately <span className="font-semibold">55–75 lbs</span> fully grown.
      </p>
    </div>

    {/* Coat Type */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">🧸</div>
      <h3 className="mt-4 text-xl font-semibold">Coat Type</h3>
      <p className="mt-3 text-stone-600">
        Expect <span className="font-semibold">thick, healthy, and wavy to curly coats</span> with a soft doodle texture.
      </p>
    </div>

    {/* Allergy Info */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">✨</div>
      <h3 className="mt-4 text-xl font-semibold">Allergy Friendly</h3>
      <p className="mt-3 text-stone-600">
        These doodle mixes are roughly 62.5% Poodle, 12.5% Golden Retriever, and 25% Australian Shepherd making them highly likely to be <span className="font-semibold">hypoallergenic</span> and typically low-medium shedding.
      </p>
    </div>
{/* Grooming */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">✂️</div>
      <h3 className="mt-4 text-xl font-semibold">Grooming Needs</h3>
      <p className="mt-3 text-stone-600">
        Expect <span className="font-semibold">regular brushing (3–5x per week)</span>{" "}
        and grooming every 6–8 weeks to keep coats healthy and mat-free.
      </p>
    </div>

    {/* Energy Level */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">⚡</div>
      <h3 className="mt-4 text-xl font-semibold">Energy Level</h3>
      <p className="mt-3 text-stone-600">
        Moderately high energy — they enjoy playtime, walks, and family activity
        but also love relaxing at home.
      </p>
    </div>

    {/* Trainability */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">🎓</div>
      <h3 className="mt-4 text-xl font-semibold">Trainability</h3>
      <p className="mt-3 text-stone-600">
        Highly intelligent and eager to please, making them{" "}
        <span className="font-semibold">very trainable and quick learners</span>.
      </p>
    </div>

    {/* Exercise Needs */}
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm md:col-span-3">
      <div className="text-4xl">🏃</div>
      <h3 className="mt-4 text-xl font-semibold">Exercise Needs</h3>
      <p className="mt-3 text-stone-600">
        These dogs will need <span className="font-semibold">daily exercise</span> such as walks,
        playtime, or backyard activity. Ideally, 45–90 minutes of activity per day
        for a happy and balanced pup.
      </p>
    </div>
  </div>
</section>

      {/* Gallery */}
      <section 
      id="gallery"
      className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold">Puppy Gallery</h2>

          <p className="mt-3 text-stone-600">
            I mean... just look at em!

          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <img
            src="/puppies/bruno1.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/bruno2.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/maplec.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/maple4.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/maple16.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/betty3.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/betty16.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/betty18.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/benny9.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/benny1.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/benny15.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/hank13.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/hank8.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

          <img
            src="/puppies/hank11.JPG"
            className="h-72 w-full rounded-3xl object-cover"
            alt="Gallery"
          />

        </div>
      </section>

{/* Parent Dogs Section */}
<section 
id="parents"
className="mx-auto max-w-6xl px-6 py-16">
  <div className="mb-10 text-center">
    <h2 className="text-4xl font-bold">About the Parents</h2>

    <p className="mt-3 text-stone-600">
      Our puppies come from well-loved, well-cared for, and healthy parents
      with excellent temperaments and veterinary records.
    </p>
  </div>

  {/* Mom Card */}
  <div className="flex justify-center">
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg lg:flex lg:max-w-5xl">
      
      {/* Image */}
      <div className="lg:w-1/2">
        <img
          src="/puppies/willow5.jpg"
          alt="Mother Dog"
          className="h-full w-full object-cover lg:h-[500px]"
        />
      </div>

      {/* Content */}
      <div className="p-8 lg:flex lg:w-1/2 lg:flex-col lg:justify-center">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold">Willow</h3>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Mom
          </div>
        </div>

        <p className="mt-4 text-stone-600">
          Willow is a very intelligent 2 year old Aussiedoodle with a sweet
          temperament. She loves being outside, going on walks/runs, and
          morning cuddles. She has been such a good mom to her sweet puppies.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-sm text-stone-500">Breed</p>
            <p className="font-semibold">Aussiedoodle</p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-sm text-stone-500">Weight</p>
            <p className="font-semibold">40 lbs</p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-sm text-stone-500">Coat</p>
            <p className="font-semibold">Black and White</p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="font-semibold">
              No known health history or complications
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Dad Info (Separate Minimal Section) */}
  <div className="mt-12 flex justify-center">
    <div className="w-full max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm">
      <h3 className="text-2xl font-bold">Sire Information</h3>

      <p className="mt-4 text-stone-600">
        Wilder is a Brown Goldendoodle with a friendly, playful temperament
        and is very social. He enjoys people and has a calm,
        well-balanced nature that complements Willows temperament well. 
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-stone-100 p-4">
          <p className="text-sm text-stone-500">Breed</p>
          <p className="font-semibold">Goldendoodle</p>
        </div>

        <div className="rounded-2xl bg-stone-100 p-4">
          <p className="text-sm text-stone-500">Weight</p>
          <p className="font-semibold">80 lbs</p>
        </div>

        <div className="rounded-2xl bg-stone-100 p-4">
            <p className="text-sm text-stone-500">Coat</p>
            <p className="font-semibold">Brown</p>
          </div>

          <div className="rounded-2xl bg-stone-100 p-4">
            <p className="font-semibold">
              No known health history or complications
            </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact */}
<section 
id="contact"
className="bg-stone-900 px-6 py-20 text-white">
  <div className="mx-auto max-w-4xl text-center">
    
    <h2 className="text-4xl font-bold">Interested in Adopting a Puppy?</h2>

    <p className="mt-4 text-lg text-stone-300">
      Please fill out an application and we will reach out to you!
    </p>

    {/* INFO SECTION (CLEAR + SCANNABLE) */}
    <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
      
      <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
        <p className="text-sm text-stone-400">Adoption Timeline</p>
        <p className="mt-2 font-semibold">Week 5–6: Puppy selection</p>
        <p className="mt-2 font-semibold">Week 7: Visits & final reservations (June 1st)</p>  
        <p className="mt-2 font-semibold">Week 8: Go-home day + vet records (June 7th)</p>
        <p className="mt-2 font-semibold">Adopters may schedule a visit with the seller starting May 26th after submitting an application.</p>
      </div>

      <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
        <p className="text-sm text-stone-400">How Adoption Works</p>
        <p className="mt-2 font-semibold"> 1. Submit application</p>
        <p className="mt-2 font-semibold"> 2. We review & respond with approval</p>
        <p className="mt-2 font-semibold"> 3. Reserve your puppy with deposit</p>
      </div>

      <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
        <p className="text-sm text-stone-400">Deposit (Cash or Zelle)</p>
        <p className="mt-2 font-semibold">A non-refundable $500 reservation deposit is required to secure a puppy. This amount will be applied as a credit toward the total adoption fee.</p>
      </div>
    </div>

{/* Application Button */}
<div className="mt-12">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScY9PmcgQUFYZjLYf-cmjU8R7obi2S6iwSR-I6x2VhG61y5dQ/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-3xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700"
  >
    Apply for Adoption Here!
  </a>
</div>

    </div>
    </section>

{/* Back To Top */}
<a
  href="#top"
  className="fixed bottom-6 right-6 rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white shadow-xl transition hover:bg-stone-700"
>
  ↑ Top
</a>

    </div>
  );
}