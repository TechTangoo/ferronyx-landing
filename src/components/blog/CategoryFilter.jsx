'use client'

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeCategory === null
            ? 'bg-white text-black'
            : 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-white'
        }`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-white text-black'
              : 'bg-white/[0.05] text-zinc-400 hover:bg-white/[0.1] hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
