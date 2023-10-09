import { Link } from '@inertiajs/react'

export default function App({ children }) {
    return (
        <>
        <header className="layout-header">
            <div className="header-container">
                <Link href="/">ヘッダー</Link>
            </div>
        </header>
        <main className="layout-main">
            <div className="main-container">
                {children}
            </div>
        </main>
        </>
    );
}

