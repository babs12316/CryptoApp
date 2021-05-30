import TextField from '@material-ui/core/TextField';

const Filter = ({onFilterChange}) => {
    return (
        <div className="filter">
            <TextField id="standard-basic" label="Search coin" onChange={(e)=>{onFilterChange(e.target.value)}} />
        </div>
      );
}
 
export default Filter;