import React from 'react';

export default function Hero({ children, hero }) {
    //we have added props to this function because we want to show different heroes based on the specific page we open
    return (
        <>
            <header className={hero}>
                {children}
            </header>
        </>
    );
}

Hero.defaultProps={
    hero: "defaultHero"
    //if you forget to mention the hero prop in some component, it will show nothing. To avoid that, this default condition is added. So basically, on the home page you don't have to specify anything (it will use the default condition) and even on the error page, it will be showing this background image.
}