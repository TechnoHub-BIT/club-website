import React, { useState, useEffect } from "react";
import "../../input.css";

export default function AddCategoryComponent() {
    return (
        <form action="/addblog">
            <div className="title">
                <h3>Add Category</h3>
            </div>
            <div className="input-group">
                <input type="text" name="cname" id="cname" placeholder="Category Name" required />
                <label for="cname">Category Name</label>
            </div>
            <div className="input-group w50p">
                <button type="submit">Add Category</button>
            </div>
        </form>
    );
};

