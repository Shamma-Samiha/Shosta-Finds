import ProductGrid from "../components/ProductGrid";

export default function Landing() {
  return (
    <>
      <section className="relative">
        <div
          className="h-[42vh] md:h-[56vh] w-full bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="bg-slate-900/60 p-6 md:p-10 rounded-lg text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">Discover Curated Finds</h1>
            <p className="mt-3 md:mt-4 text-slate-200 max-w-2xl">
              Trendy apparel, elegant decor, and green companions — all in one place.
            </p>
          </div>
        </div>
      </section>
      <ProductGrid title="Featured Collection ✨" />
    </>
  );
}
