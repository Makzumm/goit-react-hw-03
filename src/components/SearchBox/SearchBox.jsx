import css from './SearchBox.module.css';

function SearchBox({ value, handleSearchBox }) {
    const inputProps = {
        className: css.searchBox,
        type: "text",
        name: "searchInput",
        id: "searchField",
        value: value,
    }

    return (
        <div className={css.searchBoxContainer}>
            <label htmlFor="searchField">Find contacts by name</label>
            <input {...inputProps} onChange={(e) => handleSearchBox(e.target.value)} />
        </div>
    )
}

export default SearchBox;