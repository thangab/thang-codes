import Link from 'next/link';

export default function Navigation({
  activeBlock,
}: {
  activeBlock: string | null;
}) {
  return (
    <nav>
      <ul className="mt-16 w-max">
        <li>
          <Link
            scroll={true}
            className={`group flex items-center py-3 ${
              activeBlock === 'about' ? 'active' : ''
            }`}
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            scroll={true}
            className={`group flex items-center py-3 ${
              activeBlock === 'experience' ? 'active' : ''
            }`}
            href="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </Link>
        </li>
        <li>
          <Link
            scroll={true}
            className={`group flex items-center py-3 ${
              activeBlock === 'projects' ? 'active' : ''
            }`}
            href="#projects"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
