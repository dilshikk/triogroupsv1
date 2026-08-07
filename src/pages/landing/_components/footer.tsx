export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative flex flex-col items-center gap-10 bg-black px-6 py-24 text-center md:px-12"
    >
      <span className="text-sm font-semibold tracking-[0.3em] text-white/50 uppercase">
        Ready When You Are
      </span>

      <h2 className="font-display max-w-3xl text-balance text-6xl leading-[0.95] text-white uppercase md:text-8xl">
        Let&apos;s Move
        <br />
        Everything Forward.
      </h2>

      <a
        href="mailto:hello@triogroup.com"
        className="mt-4 rounded-full bg-white px-10 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-transform hover:scale-105"
      >
        hello@triogroup.com
      </a>

      <div className="mt-16 flex w-full max-w-5xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs tracking-widest text-white/40 uppercase md:flex-row">
        <span>Trio Group &copy; {year}</span>
        <div className="flex gap-8">
          <span>Finance</span>
          <span>Logistics</span>
          <span>Strategy</span>
        </div>
      </div>
    </footer>
  );
}
