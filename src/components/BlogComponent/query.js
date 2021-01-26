const queryString = (purpose) => {
    let url = window.location.search;
    let queries = new URLSearchParams(url);

    if(purpose === "blogList")
        return queries.get("cat");
    else if(purpose === "blog")
        return [queries.get("title"), queries.get("author")];
    else if(purpose === "editBlog")
        return queries.get("id");
};

export default queryString;