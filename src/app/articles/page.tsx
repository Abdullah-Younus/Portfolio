import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react'

const articles = () => {
    return (
        <section>
            <Layout>
                <AnimatedText text="Words Can Change The World!" />
            </Layout>
        </section>
    )
}

export default articles;