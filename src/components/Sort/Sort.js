const Sort = ({ sortBy, onSort }) => {
  const handleAscClick = (e, type) => {
    e.preventDefault();
    onSort(sortBy, type);
  };
  return (
    <>
      <span className="sort" onClick={(e) => handleAscClick(e, "asc")}>&uarr;</span>
      <span className="sort" onClick={(e) => handleAscClick(e, "desc")}>&darr;</span>
    </>
  );
};

export default Sort;
