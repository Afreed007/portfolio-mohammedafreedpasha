import { CONTACT } from "../constants";
import { ContactUs } from "./Email";
import { motion } from "framer-motion"

const Contact = () =>{
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{scale: 1}}
                animate={{rotate: 360, animationDuration:1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="my-8 mb-32 w-fit rounded-2xl border-4 border-neutral-800 bg-slate-950 mx-auto p-6 ">
                <ContactUs/>
            </motion.div> 
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <p className="my-4">{CONTACT.email}</p>
            </div>
        </div>
    );
};
export default Contact