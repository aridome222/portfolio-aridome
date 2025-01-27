'use client';

import { ShogiPiece } from '@components/Shogi/ShogiPiece';
import { Link as ScrollLink } from 'react-scroll';

export const Header: React.FC = () => {
    return (
        <header className='bg-primary w-full h-20'>
            <nav>
                <ul className='flex justify-end fixed z-2 top-0 bg-primary opacity-75 w-full h-20 border-2 border-black'>
                    <li className='border-l-2 border-black pt-1.5 px-2'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='profile'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                            >
                                <ShogiPiece name='我' />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black pt-1.5 px-2'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='skill'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                            >
                                <ShogiPiece name='技' />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black pt-1.5 px-2'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='works'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                            >
                                <ShogiPiece name='開発' />
                            </ScrollLink>
                        </div>
                    </li>
                    <li className='border-l-2 border-black pt-1.5 px-2'>
                        <div className='cursor-pointer'>
                            <ScrollLink
                                to='contact'
                                smooth={true}
                                duration={1000}
                                offset={-80}
                                spy={true}
                            >
                                <ShogiPiece name='＠' />
                            </ScrollLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
