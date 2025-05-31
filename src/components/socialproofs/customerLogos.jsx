import { useEffect, useRef } from 'react';

const logos = [
  '/images/companies-dark/pullflow.svg',
  '/images/companies-dark/xord.svg',
  '/images/companies-dark/patchcrafts.svg',
  '/images/companies-dark/lucidbee.svg',
  '/images/companies-dark/eternaexchange.svg',
  '/images/companies-dark/ehsanoptics.svg',
  '/images/companies-dark/cashflowapp.svg',
  '/images/companies-dark/blockapex.svg',
  '/images/companies-dark/alchemy.svg',
  '/images/companies-dark/a51.svg',
  '/images/companies-dark/novon.svg',
  '/images/companies-dark/expedite.svg',
  '/images/companies-dark/metiscore.svg',
];

/* ------------------  INFINITE SCROLL LIST  ----------------------- */
function InfiniteScroll({ className = '' }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current || listRef.current.dataset.cloned) return;

    const clone = listRef.current.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    listRef.current.parentNode.appendChild(clone);
    listRef.current.dataset.cloned = 'true';
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden
                 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={listRef} className={`flex items-center h-full ${className}`}>
        {logos.map((src) => (
          <li key={src} className="mx-2 sm:mx-4 flex items-center h-16 shrink-0" width="181" height="64">
            <img
              src={src}
              alt=""
              className="theme-logo h-full w-auto object-contain"
              draggable="false"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------  SECTION WRAPPER  -------------------------- */
export default function CustomerLogos() {
  return (
    <section className="overflow-hidden mt-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-sm font-medium sm:text-sm text-center mb-8 uppercase">
        Work on early-stage AI infra, devtools & products.
        </h4>
        <div className="h-10">
          {/* Clone inside creates seamless loop */}
          <InfiniteScroll className="animate-scroll-left" />
        </div>
      </div>
    </section>
  );
}
