import React from "react";

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;


    return (
        <header>
            <h1 className="name-h1-container font-size-name">
                <a href="/">Elena Konradi</a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category.name}>
                                <span onClick={() => setCurrentCategory(category) }
                                    className={`${currentCategory.name === category.name && 'navActive'} font-size-menu`}>
                                        {category.name}
                                </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;