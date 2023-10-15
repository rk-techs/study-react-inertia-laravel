import { Link } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout';

function MenuLink({ href, children }) {
    return (
        <div className="menu-item">
            <Link href={href} className='menu-link'>{children}</Link>
        </div>
    );
}

const Top = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/users", label: "User" },
        { href: "/customers", label: "Customer" }
    ];

    return (
        <div className="menu-list">
            {links.map(link => (
                <MenuLink key={link.href} href={link.href}>
                    {link.label}
                </MenuLink>
            ))}
        </div>
    );
}

Top.layout = page => <AppLayout children={page} title="TOP" />

export default Top
