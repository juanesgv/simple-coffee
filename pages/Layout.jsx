import React from 'react'

const Layout = ({children}) => {
    return (
        <>
            <header className='min-h-80 bg-[url("/img/bg-cafe.jpg")] bg-cover bg-center'/>
                
            <main className='bg-black-2 xl:max-w-1080 lg:max-w-896 sm:max-w-592 xs:max-w-370  lg:p-24 lg:mb-16 mx-auto sm:px-11 sm:py-16 px-6 py-14 mt-[-160px] rounded-xl'>
                {children}
            </main>
        </>
    )
}

export default Layout
