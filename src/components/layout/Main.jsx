function Main({ children, variant }) {
    return(
        <main className={`main ${variant}`}>
            { children }
        </main>
    )
}

export default Main