import React from 'react';

function Footer() {
    return (
        <footer className="uk-background-primary uk-text-center uk-text-white uk-text-bold uk-padding-small">

            <span className="">© Copyright {(new Date().getFullYear())} | GuaráTech </span>
        </footer>
    );
}

export default Footer;