import { useState } from 'preact/hooks';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Travel', value: 'travel' },
  { label: 'Food', value: 'food' },
  { label: 'Pets', value: 'pets' },
] as const;

export default function CategoryFilter() {
  const [active, setActive] = useState('all');

  const handleFilter = (value: string) => {
    setActive(value);
    const cards = document.querySelectorAll<HTMLElement>('[data-category]');
    cards.forEach((card) => {
      if (value === 'all' || card.dataset.category === value) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  return (
    <div class="flex flex-wrap gap-2 mb-8">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => handleFilter(f.value)}
          class={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
            active === f.value
              ? 'bg-accent/10 text-accent border-accent/30'
              : 'bg-surface text-text-secondary border-border hover:border-border-hover hover:text-text-primary'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
