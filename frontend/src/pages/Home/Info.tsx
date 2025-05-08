
function Info() {
    return (
        <>

            <div className='mt-22  md:p-4 flex flex-col gap-4  ml-10 pb-12'>
                <p className='color-primary'>HOW IT WORKS</p>
                <h1 className='text-2xl '>Getting Started Is Easy</h1>
                <p className='text-sm text-gray-300 '>Upon gaining access to the job board, <br />your initial task involves browsing multiple jobs to fit your criteria.</p>
                <button className="w-44 h-12 relative rounded-md font-bold
                ">Learn more</button>

                <div className="flex flex-col md:flex-row gap-3 ">
                    <div className="pop-animation border-2 card p-4 w-11/12 md:w-96 !border-purple-700 ">
                        <p className="color-primary font-bold">01</p>
                        <p className="text-xl font-bold">Job Search</p>
                        <p className="text-gray-400">Begin your job search by exploring a wide range of job openings</p>
                    </div>

                    <div className="pop-animation border-2 card p-4 md:w-96 w-11/12 !border-purple-700 ">
                        <p className="color-primary font-bold">02</p>
                        <p className="text-xl font-bold">Be Unique</p>
                        <p className="text-gray-400">craft detailed profile  and resume for recruiters</p>
                    </div>

                    <div className="pop-animation card border-2 p-4 md:w-96 w-11/12 !border-purple-700 rounded-md">
                        <p className="color-primary font-bold">03</p>
                        <p className="text-xl font-bold">Get Hired</p>
                        <p className="text-gray-400">New Way to get a job. Get hired faster by applying to on demand jobs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info