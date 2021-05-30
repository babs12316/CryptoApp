const Sort = ({sortBy,onSort}) => {
    const handleAscClick=(e,type)=>{
        e.preventDefault()
        onSort(sortBy,type)
    }
    return (
        <>
        <span onClick={(e)=>handleAscClick(e,'asc')}>Asc &uarr;</span>
        <span onClick={(e)=>handleAscClick(e,'desc')}>Desc &darr;</span>
        </>
      );
}
 
export default Sort;