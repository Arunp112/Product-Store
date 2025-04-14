const CategoryFilter = ({ categories, selected, onChange }) => {
    return (
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    );
  };
  
  export default CategoryFilter;
  