import React from "react";
import { IconButton } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from '@chakra-ui/icons'

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
                <ul className="visibilityMenu">
                    {categories.map((category) => (
                        <li key={category.name}>
                                <span onClick={() => setCurrentCategory(category) }
                                    className={`${currentCategory.name === category.name && 'navActive'} font-size-menu`}>
                                        {category.name}
                                </span>
                        </li>
                    ))}
                </ul>
                <div className="visibilityMobileMenu">
                    <Menu>
                        <MenuButton as={IconButton} 
                            transition="all 0.2s"
                            backgroundColor="#EBEBEB"
                            _hover={{ bg: "#009999" }}
                            _expanded={{ bg: "#009999" }}
                            _focus={{ outline: 0 }}
                        >
                            <HamburgerIcon></HamburgerIcon>
                        </MenuButton>
                        <MenuList>
                            {categories.map((category) => (
                                <MenuItem key={category.name} onClick={() => setCurrentCategory(category) }>
                                                {category.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>
            </nav>
        </header>
    );
}

export default Nav;