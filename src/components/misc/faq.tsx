
import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'How quickly can you jump in?',
    answer: 'Within one week of a signed SOW—discovery starts day 1.'  },
  {
    question: 'What does a typical engagement look like?',
    answer:
      'Monthly sprints: diagnose, test, repeat with clear KPI targets every 30 days.',
  },
  {
    question: 'Which metrics matter most to you?',
    answer:
      'Activation, paid conversion, and retained revenue. Vanity traffic is for dashboards, not decisions.',
  },
  {
    question: 'Do you work with international clients and accommodate different time zones?',
    answer:
      "Absolutely! I’ve worked across all sorts of time zones — from San Francisco to New York, Berlin to Auckland — and async collaboration is second nature to me by now. I'm remote-first but if it makes sense to meet your team in person for a bit, I’m happy to travel (just cover travel and stay). Same goes for international trips.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((ref, i) => {
      if (ref) {
        if (openIndex === i) {
          ref.style.maxHeight = ref.scrollHeight + 'px';
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    
    <section className="scroll-mt-24 px-8 md:px-12 pt-12 pb-22 max-w-2xl mx-auto" id="faq">
      <div className="pt-20 pb-12">
      <h2 className="text-3xl tracking-tighter font-light lg:text-4xl text-black dark:text-white text-center">
          The answers to the most <span className="block">popular frequent questions</span>
        </h2>
        <p className="mt-5 text-black dark:text-white text-center">
          Can't find your answer? Send an{' '}
          <a
            className="text-blue-400 hover:text-black dark:hover:text-white duration-200"
            href="mailto:michael@andreuzza.com"
          >
            email
          </a>{' '}
          and I will get back to you.
        </p>

        <ul
          className="list-none text-black bg-white dark:bg-zinc-900 rounded-3xl divide-y divide-zinc-200 dark:divide-zinc-700 mt-8"
          role="list"
        >
          {faqs.map((faq, index) => (
            <li key={index} className="relative">
              <button
                className="w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                type="button"
              >
                <div className="flex items-center justify-between text-black dark:text-white">
                  <p className="text-lg tracking-tight">{faq.question}</p>
                  <svg
                    className={`ml-4 h-5 w-5 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 
                      3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 
                      011.414 0l4 4a1 1 0 010 1.414z"
                    />
                  </svg>
                </div>
              </button>
              <div
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: '0px' }}
              >
                <div className="text-sm text-zinc-500 dark:text-zinc-300 p-8 pt-0">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
