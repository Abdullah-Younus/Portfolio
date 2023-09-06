import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react';

const page = () => {
    return (
        <section className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!"/>
                
                <div className='grid grid-cols-12 gap-24'>
                    <div>
                         Featured Projects
                    </div>
                </div>
            
            </Layout>
        </section>
    )
}

export default page;