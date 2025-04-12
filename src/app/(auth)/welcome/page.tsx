"use client";

import Email from '@/components/auth/welcome/email';
import Hamburger from '@/components/auth/welcome/hamburger';
import Logo from '@/components/auth/welcome/logo';
import Partnership from '@/components/auth/welcome/partnership';
import Welcome_Banner from '@/components/auth/welcome/welcome-banner';
import What_Is_Nexpay from '@/components/auth/welcome/what-is-nexpay';

export default function Welcome(){
    return(
        <div>
            <div className='bg-color'>
                <div className='flex justify-between'>
                    <Logo />
                    <Hamburger />
                </div>
                <div>
                    <Welcome_Banner />
                    <Email />
                </div>
            </div>
            <div>
                <What_Is_Nexpay />
                <Partnership />
            </div>
            <br />
        </div>
    )
}