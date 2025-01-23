'use client';
import { useState, useEffect, useRef } from 'react';


export default function MyPicture({ imageUrl }: { imageUrl: string }) {
    const [binary, setBinary] = useState('');
    const [, setBinaryCount] = useState('');
    const intervalRef = useRef(0);

    useEffect(() => {
        let initialBinary = "";
        for (let i = 0; i < 41000; i++) {
            initialBinary += Math.floor(Math.random() * 2) % 2 === 0 ? '0' : '1';
            if (i % 200 === 0) {
                initialBinary += ' ';
            }
        }
        setBinary(initialBinary);
        let initialCount = "";
        for (let i = 0; i < 200; i++) {
            initialCount += Math.floor(Math.random() * 2) % 2 === 0 ? '0' : '1';
            if (i % 20 === 0) {
                initialCount += ' ';
            }
        }
        setBinaryCount(initialCount);
        intervalRef.current = setInterval(() => {
            setBinary(prevBinary => {
                const ct = ["0", "1"];
                let s = prevBinary;

                for (let i = 0; i < 50; i++) { 
                    let index = Math.floor(Math.random() * s.length);
                    let newstr = s.slice(0, index);
                    newstr += ct[Math.floor(Math.random() * ct.length)];

                    if (s[index] === ' ') {
                        newstr += ' ';
                        index++;
                    }

                    newstr += s.slice(index + 1);
                    s = newstr;
                }

                return s;
            });

            setBinaryCount(prevCount => {
                const ct = ["0", "1"];
                let s = prevCount;

                for (let i = 0; i < 50; i++) {
                    let index = Math.floor(Math.random() * s.length);
                    let newstr = s.slice(0, index);
                    newstr += ct[Math.floor(Math.random() * ct.length)];

                    if (s[index] === ' ') {
                        newstr += ' ';
                        index++;
                    }

                    newstr += s.slice(index + 1);
                    s = newstr;
                }

                return s;
            });
        }, 10);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className='flex flex-col items-center animate-fade-in'>
            <div className='
                w-[490px]
                h-[650px] 
                lg:w-[650px] 
                relative 
                overflow-hidden 
                bg-gradient-to-b 
                from-black 
                via-transparent 
                to-black
            '>
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                <div 
                    className='
                        absolute 
                        inset-0 
                        z-10 
                        bg-gradient-to-b 
                        from-black 
                        via-transparent 
                        to-black 
                        mix-blend-overlay
                    '
                />
                <p 
                    className='
                        absolute 
                        top-0 
                        w-full 
                        h-full 
                        text-white 
                        bg-black 
                        mix-blend-multiply 
                        font-mono 
                        whitespace-pre-wrap 
                        select-none 
                        leading-none 
                        text-[1.6vw] 
                        p-[0.18vw] 
                        mt-0 
                        opacity-40 
                        text-justify
                    '
                    style={{ 
                        wordBreak: 'break-all', 
                        userSelect: 'none'
                    }}
                >
                    {binary}
                </p>
            </div>
        </div>
    );
}