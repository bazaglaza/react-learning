import React from 'react';
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostsFilter = function({filter, setFilter}){

    return(
        <div>
            <MyInput
                value = {filter.query}
                placeholder="Search..."
                onChange = {e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                name="posts-sort"
                lable="Sort By: "
                options = {
                    [
                        {value: "title", name: "Title"},
                        {value: "body", name: "Body"}
                    ]
                }
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}

export default PostsFilter;
