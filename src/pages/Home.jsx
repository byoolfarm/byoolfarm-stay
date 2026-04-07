import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import RoomCard from '../components/RoomCard'
import TestimonialSlider from '../components/TestimonialSlider'
import GalleryGrid from '../components/GalleryGrid'
import { rooms } from '../data/rooms'
import { homeGalleryImages, foodItems } from '../data/gallery'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* ── WELCOME TO / ABOUT ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <p className="eyebrow mb-2">WELCOME TO</p>
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Byool Farmstay</h2>
            <Divider />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4 font-body text-body text-base leading-[30px] leading-relaxed font-light">
            <p>Experience the magic of Byool Farm in Dharamshala! Our cozy cottage, crafted from earth bags, blends modern comforts with rustic charm for a truly unique stay. Explore our dairy, farm, and pottery studio, or join us for hands-on activities like planting, harvesting, and milking. Feel the thrill of adventure in the nearby Himalayan foothills with trekking and temple visits. Savour delicious farm-to-table cuisine, brimming with the flavours of Himachal Pradesh.</p>
            <p>Our BnB offers three bedrooms with attached bathrooms, each with dual air conditioning for a perfect mix of local charm and luxury. Whether you crave peace and quiet or outdoor excitement, Byool Farmstay promises an unforgettable getaway in nature's embrace.</p>
          </div>

        </div>
      </section>

      {/* ── ENJOY A LUXURY EXPERIENCE ── */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">ENJOY A LUXURY EXPERIENCE</h2>
            <Divider />
            <p className="font-body text-body text-base leading-[30px] font-light max-w-lg mx-auto mb-8">
              Book now the most awesome offer, and secure your summer vacations on time.
            </p>
            {/* <Link to="/rooms" className="btn-dark">VIEW OUR ROOMS</Link> */}
          </div>
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} showBookButton={false}/>
          ))}
        </div>
      </section>

      {/* ── FOOD / BYOOL CAFE ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">The Dining Room</h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodItems.slice(0,3).map((c) => (
              <Link to="/dining" key={c.id}
                    className="block bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="overflow-hidden h-64">
                  <img src={c.image} alt={c.title}
                       className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${c.id==1?"object-[center_85%]":""}`}
                       onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-dark text-[18px] font-semibold uppercase mb-3">{c.title}</h3>
                  <div className="h-px w-8 bg-gold mb-3"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/dining" className="btn-dark">VIEW MORE</Link>
          </div>
        </div>
      </section>

      {/* ── OUR GALLERY ── */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Our Gallery</h2>
            <Divider />
          </div>
          <GalleryGrid images={homeGalleryImages}/>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSlider />
    </div>
  )
}
