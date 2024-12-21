import aboutImg from "../assets/about.jpg/"
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion"

// import {ReactComponent as workIcon} from "../assets/work.svg"
// import {ReactComponent as schoolIcon} from "../assets/school.svg"

// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
const About = () =>{
    // let workIconStyle = {background:"#06D6A0"};
    // let schoolIconStyle = {background:"#f9c74f"};

    return <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
        <div className="flex flex-wrap">
            
            <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full ">{/* add "lg:w-1/2" in classname after w-full when add image in about section */}
                    <div className="flex justify-center "> {/* add "lg:justify-start" in classname after flex justify-center when add image in about section */}
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p> 
                    </div>
            </motion.div>

{/*             <h1>Timeline</h1>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                    let isWorkIcon = element.icon === "work";
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyle :schoolIconStyle}
                                iconOnClick={(isWorkIcon)?<WorkIcon/>: <SchoolIcon/> }
                            >
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline> */}
            
        </div>

    </div>

};
export default About;
