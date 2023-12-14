const SortBy = ({ setSortBy }) => {
  return (
    <select
      name="sort_by"
      onChange={(event) => {
        setSortBy({ sort_by: event.target.value });
      }}
    >
      <option value="" disabled>
        Sort By:
      </option>
      <option value="created_at">Date</option>
      <option value="comment_count">Number of Comments</option>
      <option value="votes">Likes</option>
    </select>
  );
}

export default SortBy