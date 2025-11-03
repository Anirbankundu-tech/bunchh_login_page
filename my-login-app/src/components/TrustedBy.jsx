const TrustedBy = () => {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-medium mb-10 opacity-90">
          Trusted by 1000+ companies around the world
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-90">
          
          {/* Google */}
          <img src="/public/icons/Google.svg" alt="Google" className="h-8 opacity-90 hover:opacity-100 transition" />

          {/* Microsoft */}
          <img src="/public/icons/Microsoft.svg" alt="Microsoft" className="h-8 opacity-90 hover:opacity-100 transition" />

          {/* Amazon */}
          <img src="/public/icons/Apple.svg" alt="Amazon" className="h-8 opacity-90 hover:opacity-100 transition" />

          {/* Meta */}
          <img src="/public/icons/Meta.svg" alt="Meta" className="h-8 opacity-90 hover:opacity-100 transition" />

          {/* Stripe */}
          <img src="/public/icons/Stripe.svg" alt="Stripe" className="h-8 opacity-90 hover:opacity-100 transition" />

          {/* Netflix */}
          <img src="/public/icons/Netflix.svg" alt="Netflix" className="h-8 opacity-90 hover:opacity-100 transition" />

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
