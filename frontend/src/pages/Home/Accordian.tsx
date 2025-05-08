
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Accordian() {
    //handle accrodia
    const [activeId, setActiveId] = useState<number | null>(null);

    function HandleAccordian(id: number) {
        console.log(activeId)
        setActiveId(prevId => (prevId === id ? null : id));
    }


    return (
        <>
            <div className='border-1 border-gray-700 flex flex-col gap-3 items-center md:items-start pl-4 md:w-11/12 md:m-auto'>
                <div className='my-8 pl-6'>
                    <h1 className='text-2xl'>Frequently asked questions</h1>
                    <p className='text-sm gray-text'>Here are some questions about the website</p>
                </div>

                {
                    [
                        {
                            id: 1,
                            question: 'How frequently are job listings updated?',
                            answer: 'Job listings are updated daily to ensure users have access to the latest opportunities in tech and STEM fields.'
                        },
                        {
                            id: 2,
                            question: 'Can I apply directly through the job board?',
                            answer: 'Yes, each listing includes a direct application link that redirects you to the employer’s official application page.'
                        },
                        {
                            id: 3,
                            question: 'Is there a cost to use this job board?',
                            answer: 'No, our job board is completely free for job seekers. You can browse, search, and apply without any fees.'
                        }
                    ].map((acc) => {
                        return (
                            <>


                                <div className=" mb-2  w-full rounded">
                                    <div
                                        key={acc.id}
                                        className={` w-full px-6 py-2 transition-all duration-300  ${activeId === acc.id ? "max-h-96" : "max-h-9 overflow-hidden"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center cursor-pointer w-full" onClick={() => HandleAccordian(acc.id)}>
                                            <h1 className=" font-semibold w-full  ">{acc.question}</h1>
                                            <ExpandMoreIcon className={`transition-transform ${activeId === acc.id ? "rotate-180" : ""}`} />
                                        </div>
                                        <p className="gray-text mt-2">{acc.answer}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </>
    )
}


export default Accordian