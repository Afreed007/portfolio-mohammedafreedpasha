import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare } from 'react-icons/fa';
import {FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
// import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

import { motion } from "framer-motion"


const iconVariants = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
});

const Technologies = () =>{
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss  className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-red-700" />
                </motion.div>
                
                

            </div>
        </div>
    );
};
export default Technologies