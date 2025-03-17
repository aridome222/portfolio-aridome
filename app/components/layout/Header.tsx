'use client';

import { useState } from 'react';
import { ShogiPiece } from '@components/Shogi/ShogiPiece';
import { Link as ScrollLink } from 'react-scroll';

export const Header: React.FC = () => {
    const [textColor1, setTextColor1] = useState('text-black');
    const [textColor2, setTextColor2] = useState('text-black');
    const [textColor3, setTextColor3] = useState('text-black');
    const [textColor4, setTextColor4] = useState('text-black');
    const changeTextColor1 = () => {
        setTextColor1('text-beni');
        setTextColor2('text-black');
        setTextColor3('text-black');
        setTextColor4('text-black');
    };
    const changeTextColor2 = () => {
        setTextColor1('text-black');
        setTextColor2('text-beni');
        setTextColor3('text-black');
        setTextColor4('text-black');
    };
    const changeTextColor3 = () => {
        setTextColor1('text-black');
        setTextColor2('text-black');
        setTextColor3('text-beni');
        setTextColor4('text-black');
    };
    const changeTextColor4 = () => {
        setTextColor1('text-black');
        setTextColor2('text-black');
        setTextColor3('text-black');
        setTextColor4('text-beni');
    };

    return (
        <header className='h-20 w-full bg-primary'>
            <nav>
                <ul className='fixed top-0 z-10 flex h-20 w-full justify-end border-y-2 border-black bg-primary opacity-75'>
                    <li className='border-l-2 border-black px-2 pt-1.5'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='profile'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                                onClick={changeTextColor1}
                            >
                                <ShogiPiece name='我' textColor={textColor1} />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black px-2 pt-1.5'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='skill'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                                onClick={changeTextColor2}
                            >
                                <ShogiPiece name='技術' textColor={textColor2} />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black px-2 pt-1.5'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='works'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                                onClick={changeTextColor3}
                            >
                                <ShogiPiece name='開発' textColor={textColor3} />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black px-2 pt-1.5'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='contact'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                                onClick={changeTextColor4}
                            >
                                <ShogiPiece name='＠' textColor={textColor4} />
                            </ScrollLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
