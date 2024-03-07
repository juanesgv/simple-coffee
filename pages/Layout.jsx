import React from 'react'

const Layout = ({children}) => {
    return (
        <>
            <header className='min-h-80 bg-[url("/img/bg-cafe.jpg")] bg-cover bg-center'/>
                
            <main className='bg-black-2 max-w-1080 mx-auto mt-[-160px] rounded-xl p-24 mb-16'>
                {children}
            </main>
        </>
    )
}

export default Layout
