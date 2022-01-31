import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar';
import Footer from './Footer'

const Layout = ({ children }:{children:any}) => {
    return (
        <>
            <Head>
                <title>Sunnyside Studio</title>
            </Head>
            <Flex direction="column" width="100vw">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Flex>
        </>
    )
};

export default Layout;
