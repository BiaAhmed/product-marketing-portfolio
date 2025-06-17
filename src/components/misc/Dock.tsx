import { useState } from 'react';

interface DockItem {
  label: string;
  href: string;
  img: string;
}

const items: DockItem[] = [
  {
    label: 'React',
    href: 'https://react.dev',
    img: '/images/logos/react.png',
  },
  {
    label: 'Docker',
    href: 'https://www.docker.com',
    img: '/images/logos/docker.png',
  },
  {
    label: 'AWS',
    href: 'https://aws.amazon.com',
    img: '/images/logos/aws.png',
  },
];

export default function Dock() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex justify-center gap-4 mt-12">
      {items.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          className="group relative"
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          <img
            src={item.img}
            alt={item.label}
            className={`w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 ${
              active === index ? 'scale-125' : 'group-hover:scale-110'
            }`}
          />
          <span className="absolute left-1/2 -translate-x-1/2 -top-7 text-xs rounded px-2 py-1 bg-black text-white opacity-0 group-hover:opacity-100">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
