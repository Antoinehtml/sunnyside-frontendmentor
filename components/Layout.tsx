import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Sunnyside Studio</title>
            </Head>
            <Flex direction="column" >
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </Flex>
        </>
    )
};

export default Layout;
