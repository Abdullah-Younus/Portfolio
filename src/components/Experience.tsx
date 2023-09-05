import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LineLiicon from './LineLiicon'

const Details = ({ position, company, companyLink, time, address, work }: any) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LineLiicon />
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink} className='text-primary capitalize' target='_blank'>@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>

}



const Experience = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });


    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position="Software Engineer"
                        company="Digitrends"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        companyLink="https://digitrends.co/"
                    />
                    <Details
                        position="Software Engineer"
                        company="Digitrends"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                        as product recommendations and user reviews, and optimizing the app's performance and reliability.
                        "
                        companyLink="https://digitrends.co/"
                    />
                    <Details
                        position="Software Engineer"
                        company="Digitrends"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                        including implementing a new user interface for a system settings panel and optimizing the performance of 
                        a core system component."
                        companyLink="https://digitrends.co/"
                    />
                    <Details
                        position="Software Engineer"
                        company="Digitrends"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                        and graded exams and assignments."
                        companyLink="https://digitrends.co/"
                    />
                    <Details
                        position="Software Engineer"
                        company="Digitrends"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        companyLink="https://digitrends.co/"
                    />
                </ul>
            </div>


        </div>
    )
}

export default Experience;