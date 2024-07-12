import { useState } from "react";

function Search(props) {

    // Functions Block
    const { searchUser, resetUsers } = props;
    const [ inputValue, setInputValue ] = useState("");

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" value={inputValue} placeholder="email" onChange={e => setInputValue(e.target.value)} aria-label="Example text with two button addons" />
            <button class="btn btn-outline-secondary" type="button" onClick={() => searchUser(inputValue)}>Search</button>
            <button class="btn btn-outline-secondary" type="button" onClick={() => {resetUsers(); setInputValue("")}}>Reset</button>
        </div>

    )
}

export default Search