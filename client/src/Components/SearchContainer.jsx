import Wrapper from "../assets/wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";
import { FormRow, FormRowSelect } from ".";

const SearchContainer = () => {
  const {
    iseLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    statusOptions,
    jobTypeOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if(iseLoading) return
    handleChange({name: e.target.name, value: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  }

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow type={'text'} name={'search'} value={search} handleChange={handleSearch}/>
          <FormRowSelect labelText={'status'} name={'searchStatus'} value={searchStatus} handleChange={handleSearch} list={['all', ...statusOptions] }/>
          <FormRowSelect labelText={'type'} name={'searchtype'} value={searchType} handleChange={handleSearch} list={['all', ...jobTypeOptions] }/>
          <FormRowSelect name={'sort'} value={sort} handleChange={handleSearch} list={[...sortOptions] }/>
          <button type="button" className="btn btn-block btn-danger" disabled={iseLoading} onClick={handleSubmit}>clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
