import PageBanner from '../components/PageBanner'
import GalleryGrid from '../components/GalleryGrid'
import { diningImages } from '../data/gallery'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Dining() {
  return (
    <div>
      <PageBanner title="The Dining Room"
        image="/assets/images/dining/din5.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'The Dining Room'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <p className="eyebrow mb-2">THE DINING ROOM PAGE</p>
            <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase leading-relaxed mb-4">A private sanctuary for slow meals and mountain flavours</h2>
            <Divider />
            <p className="font-body text-body text-base leading-[30px] md:text-lg leading-relaxed font-light">
              A private, serene sanctuary nestled within the Byool Farm premises. The Dining Room is a space designed for slow conversations, quiet meals, and the simple joy of breaking bread in the mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-dark text-[20px] md:text-[24px] font-semibold uppercase mb-3">Farm-to-Table Experience</h3>
              <div className="h-px w-8 bg-gold mb-4"/>
              <p className="font-body text-body text-base leading-[30px] font-light">
                A rotating seasonal menu celebrating local harvests. We source ingredients locally to bring the mountain's flavour to your plate.
              </p>
            </div>
            <div>
              <h3 className="font-display text-dark text-[20px] md:text-[24px] font-semibold uppercase mb-3">Private Events & Small Gatherings</h3>
              <div className="h-px w-8 bg-gold mb-4"/>
              <p className="font-body text-body text-base leading-[30px] font-light">
                An intimate destination for family celebrations, curated birthday meals, and post-wedding parties.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-display text-dark text-[20px] md:text-[24px] font-semibold uppercase mb-3">Community & Culture</h3>
              <div className="h-px w-8 bg-gold mb-4"/>
              <p className="font-body text-body text-base leading-[30px] font-light">
                Join us for live acoustic music sessions, culinary pop-ups, and rainy afternoons with board games.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border mt-8">
            <a href="https://wa.me/918626823139" target="_blank" rel="noopener noreferrer" className="btn-dark inline-block">
              WhatsApp to Inquire
            </a>
          </div>

        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase tracking-wide tracking-wide">The Dining Gallery</h2>
            <Divider />
          </div>
          <GalleryGrid images={diningImages}/>
        </div>
      </section>
    </div>
  )
}
