import Link from 'next/link';

export default () => (
  <div className="menu">
    <Link href="/classic">
      <a>Classic</a>
    </Link>
    <Link href="/kinda-big">
      <a>Kinda big</a>
    </Link>
    <Link href="/kinda-big-better">
      <a>Kinda big (better)</a>
    </Link>
    <Link href="/optimized">
      <a>Optimized</a>
    </Link>
  </div>
);
