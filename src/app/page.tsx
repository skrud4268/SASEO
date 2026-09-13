export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <header className="border-b border-stone-200 pb-8 sm:pb-10">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-3xl">
            사심서가
          </h1>
          <span className="text-xs font-semibold tracking-[0.18em] text-stone-400">
            SASEO
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
          지극히 사적인 취향으로 이야기를 분류합니다.
        </p>

        <form action="/search" className="relative mt-7 max-w-3xl">
          <label htmlFor="home-search" className="sr-only">
            작품 검색
          </label>
          <input
            id="home-search"
            name="q"
            type="search"
            placeholder="작품명, 작가, 키워드로 검색해보세요"
            className="h-13 w-full rounded-xl border border-stone-300 bg-white px-4 pr-12 text-sm text-stone-950 outline-none transition-colors placeholder:text-stone-400 focus:border-amber-700 sm:h-14 sm:px-5 sm:pr-14 sm:text-base"
          />
          <button
            type="submit"
            aria-label="검색"
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-stone-500 transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-700 sm:w-14"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-5"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>
        </form>
      </header>

      <section aria-labelledby="archive-heading" className="py-8 sm:py-10">
        <div className="flex items-baseline justify-between">
          <h2
            id="archive-heading"
            className="text-base font-semibold tracking-tight text-stone-950"
          >
            서가
          </h2>
          <p className="text-xs text-stone-400">私心書架</p>
        </div>

        <div className="mt-5 rounded-xl border border-dashed border-stone-300 px-5 py-16 text-center">
          <p className="text-sm text-stone-500">
            리뷰 갤러리는 다음 단계에서 채워집니다.
          </p>
        </div>
      </section>
    </main>
  );
}
