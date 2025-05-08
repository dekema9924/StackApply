const Footer = () => {
    return (
        <footer className="border-t flex flex-wrap mt-10 border-gray-700 justify-center capitalize w-full gap-5 text-sm py-8 text-center">
            <p>Browse Jobs</p>
            <p>About</p>
            <p>Home</p>
            <p>© {new Date().getFullYear()} DevWithDaniel</p>
        </footer>
    )
}

export default Footer