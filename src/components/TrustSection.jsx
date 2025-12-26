function TrustSection() {
  return (
    <section className="bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        
        <div>
          <h3 className="text-lg font-semibold">🚚 Fast Delivery</h3>
          <p className="text-gray-600 mt-2">
            Get your products delivered quickly and reliably.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">🔒 Secure Payments</h3>
          <p className="text-gray-600 mt-2">
            Your checkout experience is safe and encrypted.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">🔄 Easy Returns</h3>
          <p className="text-gray-600 mt-2">
            Not satisfied? Return within 7 days, no questions asked.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;
