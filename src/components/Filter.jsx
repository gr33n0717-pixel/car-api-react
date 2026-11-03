const Filter = ({ priceRange, onFilter }) => {
  return (
    <div className="filter__wrapper">
      <select
        name="price__filter"
        id="price__filter"
        value={priceRange}
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">Filter by price</option>
        <option value="LOW_TO_LOW">$0 - $10k</option>
        <option value="LOW_TO_MEDIUM">$10k - $20k</option>
        <option value="MEDIUM_TO_SEMI_HIGH">$20k - $40k</option>
        <option value="SEMI_HIGH_TO_HIGH">$40k - $60k</option>
        <option value="HIGH_TO_VERY_HIGH">$60k - $100k</option>
      </select>
    </div>
  );
};

export default Filter;
