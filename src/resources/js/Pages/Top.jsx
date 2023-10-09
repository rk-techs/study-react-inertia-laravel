import { Link } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout';

function MenuLink({ href, children }) {
    return (
        <div className="menu-item">
            <Link href={href} className='menu-link'>{children}</Link>
        </div>
    );
}

export default function Top() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/users", label: "User" }
    ];

    return (
        <AppLayout>
            <div className="menu-list">
                {links.map(link => (
                    <MenuLink key={link.href} href={link.href}>
                        {link.label}
                    </MenuLink>
                ))}
            </div>
        </AppLayout>
    );
}
