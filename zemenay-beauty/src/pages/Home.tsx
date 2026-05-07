import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 font-body-md text-body-md flex flex-col">
      <header className="shadow-[0px_4px_16px_rgba(0,0,0,0.06)] bg-surface sticky top-0 z-40">
        <div className="flex justify-between items-center px-margin h-14 w-full">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary fill">spa</span>
            <span className="font-headline-md text-headline-md text-primary tracking-tight">Zemenay</span>
          </div>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant font-label-lg text-label-lg hover:opacity-80 transition-opacity active:scale-95 flex items-center gap-1">
              EN <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>
            <button className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 relative">
              <span className="material-symbols-outlined fill">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary-container rounded-full border border-surface"></span>
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto w-full max-w-screen-sm mx-auto">
        <section className="px-margin pt-lg pb-md">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
            </div>
            <input className="w-full h-14 pl-[48px] pr-md bg-surface-container rounded-xl border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant transition-all outline-none" placeholder="Search services, salons, or professionals..." type="text" />
            <button className="absolute inset-y-0 right-0 pr-md flex items-center">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors">tune</span>
            </button>
          </div>
        </section>
        
        <section className="px-margin py-md">
          <h1 className="font-display-lg text-display-lg text-on-background">Hello, Beautiful!</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Ready for your next glow up?</p>
        </section>
        
        <section className="px-margin py-md">
          <div className="grid grid-cols-4 gap-sm">
            <button className="col-span-1 aspect-square bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-sm active:scale-95 transition-transform hover:bg-primary-fixed/30 border border-transparent hover:border-primary-fixed">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-fixed fill">content_cut</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface">Hair</span>
            </button>
            <button className="col-span-1 aspect-square bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-sm active:scale-95 transition-transform hover:bg-primary-fixed/30 border border-transparent hover:border-primary-fixed">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-fixed fill">face_retouching_natural</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface">Makeup</span>
            </button>
            <button className="col-span-1 aspect-square bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-sm active:scale-95 transition-transform hover:bg-primary-fixed/30 border border-transparent hover:border-primary-fixed">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant fill">pan_tool</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface">Nails</span>
            </button>
            <button 
              onClick={() => navigate('/checkout')}
              className="col-span-2 row-start-2 h-[88px] bg-primary-container rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-between px-md active:scale-95 transition-transform overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-primary z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-start gap-1">
                <span className="font-headline-sm text-headline-sm text-on-primary">Bridal</span>
                <span className="font-label-md text-label-md text-primary-fixed-dim">Packages</span>
              </div>
              <span className="material-symbols-outlined text-on-primary text-[40px] relative z-10 opacity-50 -mr-2 fill">favorite</span>
            </button>
            <button className="col-span-2 row-start-2 h-[88px] bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] flex items-center px-md gap-md active:scale-95 transition-transform border border-transparent hover:border-outline-variant">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-tertiary-fixed fill">face</span>
              </div>
              <span className="font-label-lg text-label-lg text-on-surface text-left">Men's<br />Grooming</span>
            </button>
          </div>
        </section>

        <section className="px-margin py-md">
          <div className="bg-gradient-to-br from-surface to-surface-container-low rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-outline-variant/30 p-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/50 rounded-full blur-2xl"></div>
            <div className="flex items-start gap-md relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-on-primary text-[28px]">auto_awesome</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">AI Beauty Assistant</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-md">Ask our AI for a style recommendation or to find the perfect service for your occasion.</p>
                <div className="relative w-full">
                  <input className="w-full h-12 pl-md pr-[48px] bg-surface rounded-full border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant shadow-inner outline-none transition-all" placeholder="e.g., I need a look for a wedding..." type="text" />
                  <button className="absolute inset-y-0 right-1 my-auto w-10 h-10 flex items-center justify-center bg-primary-container rounded-full text-on-primary hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-md">
          <div className="flex justify-between items-end px-margin mb-md">
            <h2 className="font-headline-md text-headline-md text-on-background">Featured Artists</h2>
            <button className="font-label-lg text-label-lg text-primary-container hover:text-primary transition-colors">See All</button>
          </div>
          <div className="flex overflow-x-auto gap-md px-margin pb-md snap-x hide-scrollbar">
            <div 
              onClick={() => navigate('/profile')}
              className="snap-start shrink-0 w-[240px] bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] overflow-hidden relative border border-transparent hover:border-outline-variant transition-colors group cursor-pointer">
              <div className="absolute top-sm left-sm z-10 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px] fill">star</span>
                Featured
              </div>
              <div className="h-[160px] w-full bg-surface-variant relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-tertiary-fixed to-surface-variant opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Selamawit T.</h3>
                  <div className="flex items-center text-secondary-container">
                    <span className="material-symbols-outlined text-[16px] fill">star</span>
                    <span className="font-label-md text-label-md text-on-surface ml-1">4.9</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Master Makeup Artist</p>
              </div>
            </div>
            <div className="snap-start shrink-0 w-[240px] bg-surface rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] overflow-hidden relative border border-transparent hover:border-outline-variant transition-colors group cursor-pointer">
              <div className="absolute top-sm left-sm z-10 bg-secondary-container text-on-secondary-container font-label-md text-label-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[14px] fill">star</span>
                Featured
              </div>
              <div className="h-[160px] w-full bg-surface-variant relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-tertiary-fixed to-surface-variant opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Nardos Hair</h3>
                  <div className="flex items-center text-secondary-container">
                    <span className="material-symbols-outlined text-[16px] fill">star</span>
                    <span className="font-label-md text-label-md text-on-surface ml-1">5.0</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Bridal Hair Specialist</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin py-md">
          <h2 className="font-headline-md text-headline-md text-on-background mb-md">Nearby Professionals</h2>
          <div className="flex flex-col gap-md">
            <div className="bg-surface rounded-xl p-md flex gap-md items-center shadow-[0px_4px_16px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-transform cursor-pointer border border-transparent hover:border-outline-variant">
              <div className="w-[80px] h-[80px] rounded-lg bg-surface-variant shrink-0 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-tertiary-fixed to-surface-variant opacity-50"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Lula Nail Studio</h3>
                  <span className="font-label-md text-label-md text-on-surface-variant shrink-0 ml-2">$$</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate mb-1">Nails • Pedicure</p>
                <div className="flex items-center gap-md text-on-surface-variant">
                  <div className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    2.1 km
                  </div>
                  <div className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[14px] text-secondary-container fill">star</span>
                    <span className="text-on-surface">4.8</span>
                    <span className="text-on-surface-variant opacity-70">(124)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-md flex gap-md items-center shadow-[0px_4px_16px_rgba(0,0,0,0.06)] active:scale-[0.98] transition-transform cursor-pointer border border-transparent hover:border-outline-variant">
              <div className="w-[80px] h-[80px] rounded-lg bg-surface-variant shrink-0 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-tertiary-fixed to-surface-variant opacity-50"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Oasis Spa & Salon</h3>
                  <span className="font-label-md text-label-md text-on-surface-variant shrink-0 ml-2">$$$</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate mb-1">Massage • Facial • Hair</p>
                <div className="flex items-center gap-md text-on-surface-variant">
                  <div className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    3.5 km
                  </div>
                  <div className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[14px] text-secondary-container fill">star</span>
                    <span className="text-on-surface">4.9</span>
                    <span className="text-on-surface-variant opacity-70">(340)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-lg h-[56px] border border-primary-container text-primary-container font-label-lg text-label-lg rounded-xl flex items-center justify-center hover:bg-primary-fixed/20 active:bg-primary-fixed/40 transition-colors">
            View All Nearby
          </button>
        </section>
      </main>

      <nav className="bg-surface shadow-[0px_-4px_16px_rgba(0,0,0,0.06)] fixed bottom-0 w-full z-50 flex justify-around items-center px-2 py-3 lg:hidden rounded-t-xl">
        <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-90 transition-all duration-200">
          <span className="material-symbols-outlined fill">home</span>
          <span className="font-label-md text-label-md mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 rounded-full px-4 py-1 active:scale-90 transition-all duration-200">
          <span className="material-symbols-outlined">search</span>
          <span className="font-label-md text-label-md mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 rounded-full px-4 py-1 active:scale-90 transition-all duration-200">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="font-label-md text-label-md mt-1">Bookings</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 rounded-full px-4 py-1 active:scale-90 transition-all duration-200">
          <span className="material-symbols-outlined">chat</span>
          <span className="font-label-md text-label-md mt-1">Chat</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 rounded-full px-4 py-1 active:scale-90 transition-all duration-200">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-md text-label-md mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
