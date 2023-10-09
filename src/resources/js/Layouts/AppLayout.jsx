
export default function App({ children }) {
    return (
        <>
        <header className="layout-header">
            <div className="header-container">
                ヘッダー
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

