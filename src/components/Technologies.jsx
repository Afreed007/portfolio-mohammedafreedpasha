import { motion } from "framer-motion"

import { RiReactjsLine } from "react-icons/ri";
import { FaJsSquare, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa'; // Added FaGithub
import { SiTailwindcss, SiPostman, SiMysql, SiMongodb, SiScikitlearn, SiNumpy, SiPandas, SiIntellijidea, SiVisualstudiocode } from 'react-icons/si'; // Added SiIntellijidea, SiVisualstudiocode
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";


// Variants for the floating animation
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

            {/* 1. Web & Core Technologies Section */}
            <h2 className="my-8 text-center text-2xl font-semibold text-neutral-400">Web & Core Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <motion.div 
                    variants={iconVariants(1.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiHtml5 className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss  className="text-7xl text-cyan-400" />
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
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-600" /> 
                </motion.div>
            </div>

            {/* 2. Databases Section */}
            <h2 className="my-8 text-center text-2xl font-semibold text-neutral-400">Databases</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-400" /> 
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" /> 
                </motion.div>
            </div>
            
            {/* 3. Tools & Platforms Section (NEW) */}
            <h2 className="my-8 text-center text-2xl font-semibold text-neutral-400">Tools & Platforms</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <motion.div 
                    variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-red-700" /> {/* Git */}
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className="text-7xl text-neutral-400" /> {/* GitHub */}
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiIntellijidea className="text-7xl text-red-500" /> {/* Intellij IDEA */}
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-orange-400" /> {/* Postman */}
                </motion.div>
                <motion.div 
                    variants={iconVariants(4.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVisualstudiocode className="text-7xl text-blue-500" /> {/* VS Code */}
                </motion.div>
            </div>

            {/* 4. Data Science & ML Libraries Section (Moved to bottom) */}
            <h2 className="my-8 text-center text-2xl font-semibold text-neutral-400">Data Science & ML Libraries</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <motion.div 
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-400" /> 
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiScikitlearn className="text-7xl text-orange-600" /> 
                </motion.div>
                <motion.div 
                    variants={iconVariants(5.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNumpy className="text-7xl text-blue-500" /> 
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-700" /> 
                </motion.div>
            </div>
        </div>
    );
};
export default Technologies
