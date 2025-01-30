'use client';

import { ShogiPiece } from '@components/Shogi/ShogiPiece';
import { Link as ScrollLink } from 'react-scroll';

export const Header: React.FC = () => {
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
                            >
                                <ShogiPiece name='我' />
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
                            >
                                <ShogiPiece name='技術' />
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
                            >
                                <ShogiPiece name='開発' />
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
