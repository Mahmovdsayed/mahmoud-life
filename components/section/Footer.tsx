'use client'
const Footer = () => {
    return <>
        <div className="text-center bg-white dark:bg-[#191919] py-8 font-medium text-sm mt-8">
            © {new Date().getFullYear()} <strong>Mahmoud Sayed</strong>. All rights reserved.
        </div>
    </>;
};

export default Footer;