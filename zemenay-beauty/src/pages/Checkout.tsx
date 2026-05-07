import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md antialiased pb-32">
      <header className="flex justify-between items-center px-margin h-14 w-full bg-surface shadow-sm sticky top-0 z-40">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="text-on-surface hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center p-2 -ml-2 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-sm text-headline-sm text-on-surface">Checkout</h1>
        <div className="w-10"></div>
      </header>
      
      <main className="px-margin pt-lg space-y-xl max-w-2xl mx-auto">
        <section className="space-y-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Booking Summary</h2>
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-variant flex gap-md">
            <img 
              alt="Zemenay Logo" 
              className="w-16 h-16 rounded-lg object-cover bg-surface-variant" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGgjKC3Cr6ATBGSSsO7_QQw_031orF96miR8Sva1cacTSiz7fS8D_082Yt_6SCZ2H3dJaOFqmfdKnqnnF_0jrQcdOcgJqXd1VF4YJWi8weo6KhybQfnk6c_AcF0sQO3Fpts71qjLhziOGELew8KRItqzgOC3zhVlAPXJwL8oeAGsP0yHtdHgBeHaKDpWZqsCLYR29-XwUdykh1ToFulRCjX2AoLM1CuHuk8DJQFaGLD-V8A4xbXBBlQ1bPbc9mATktVz_IZfF_1F2A" 
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface">Bridal Hair & Makeup Package</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">with Sarah Belete</p>
                </div>
                <span className="font-label-lg text-label-lg text-primary text-right pl-2 shrink-0">2,500 <br/> ETB</span>
              </div>
              <div className="mt-md space-y-sm">
                <div className="flex items-center gap-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="font-body-sm text-body-sm">Sat, 24 Nov • 10:00 AM</span>
                </div>
                <div className="flex items-center gap-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">home_work</span>
                  <span className="font-body-sm text-body-sm">Home Service (Bole Area)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Promo Code</h2>
          <div className="flex gap-sm">
            <input className="flex-1 h-[56px] rounded-lg border border-surface-variant bg-surface-container-lowest px-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant transition-all" placeholder="Enter code" type="text" />
            <button className="h-[56px] px-lg rounded-lg border border-primary text-primary font-label-lg text-label-lg hover:bg-primary-fixed transition-colors">Apply</button>
          </div>
        </section>

        <section className="space-y-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Payment Method</h2>
          <div className="space-y-sm">
            <label className="flex items-center justify-between p-md rounded-xl border-2 border-primary bg-primary-fixed/20 cursor-pointer transition-colors relative overflow-hidden">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </div>
                <div>
                  <span className="block font-label-lg text-label-lg text-on-surface">Telebirr</span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">Pay via mobile money</span>
                </div>
              </div>
              <input defaultChecked className="text-primary focus:ring-primary w-5 h-5 border-outline accent-primary" name="payment_method" type="radio" />
            </label>

            <label className="flex items-center justify-between p-md rounded-xl border border-surface-variant bg-surface-container-lowest cursor-pointer hover:bg-surface transition-colors">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shadow-sm">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <span className="block font-label-lg text-label-lg text-on-surface">CBE Birr</span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">Commercial Bank of Ethiopia</span>
                </div>
              </div>
              <input className="text-primary focus:ring-primary w-5 h-5 border-outline accent-primary" name="payment_method" type="radio" />
            </label>

            <label className="flex items-center justify-between p-md rounded-xl border border-surface-variant bg-surface-container-lowest cursor-pointer hover:bg-surface transition-colors">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface shadow-sm">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <span className="block font-label-lg text-label-lg text-on-surface">Cash on Delivery</span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">Pay directly to provider</span>
                </div>
              </div>
              <input className="text-primary focus:ring-primary w-5 h-5 border-outline accent-primary" name="payment_method" type="radio" />
            </label>
          </div>
        </section>

        <section className="space-y-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Price Breakdown</h2>
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-surface-variant space-y-sm">
            <div className="flex justify-between font-body-md text-on-surface-variant">
              <span>Service Fee</span>
              <span>2,500 ETB</span>
            </div>
            <div className="flex justify-between font-body-md text-on-surface-variant">
              <span>Platform Fee (10%)</span>
              <span>250 ETB</span>
            </div>
            <div className="h-px bg-surface-variant my-sm"></div>
            <div className="flex justify-between items-center">
              <span className="font-label-lg text-label-lg text-on-surface">Total</span>
              <span className="font-headline-sm text-headline-sm text-primary">2,750 ETB</span>
            </div>
          </div>
        </section>

        <div className="flex justify-center gap-md py-md opacity-60">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <span className="font-label-md text-label-md">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span className="font-label-md text-label-md">Buyer Protection</span>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-margin bg-surface border-t border-surface-variant shadow-[0px_-4px_16px_rgba(0,0,0,0.06)] z-50">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Total Payment</span>
            <span className="font-headline-md text-headline-md text-primary">2,750 ETB</span>
          </div>
          <button onClick={() => navigate('/home')} className="h-[56px] px-8 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer">
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}
