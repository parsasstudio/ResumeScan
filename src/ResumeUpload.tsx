import react from 'react';
import SubmitComponent from './SubmitComponent';


export function ResumeUpload() {
    // onChange() {

    // }
    return (
        <>
            {/* Resume Upload Component */}
            <div className="d-flex justify-content-center align-content-center mt-5">
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.9614 33.6182C37.9066 33.5481 37.8366 33.4915 37.7566 33.4525C37.6767 33.4136 37.5889 33.3933 37.5 33.3933C37.4111 33.3933 37.3233 33.4136 37.2434 33.4525C37.1634 33.4915 37.0934 33.5481 37.0386 33.6182L28.8354 43.9966C28.7678 44.0829 28.7259 44.1866 28.7144 44.2957C28.7029 44.4047 28.7223 44.5149 28.7704 44.6134C28.8186 44.712 28.8935 44.795 28.9865 44.853C29.0796 44.911 29.1872 44.9416 29.2969 44.9414H34.7095V62.6953C34.7095 63.0176 34.9731 63.2812 35.2954 63.2812H39.6899C40.0122 63.2812 40.2759 63.0176 40.2759 62.6953V44.9487H45.7031C46.1938 44.9487 46.4648 44.3848 46.1645 44.0039L37.9614 33.6182Z" fill="#222364" />
                    <path d="M59.4287 26.8579C56.0742 18.0103 47.5269 11.7188 37.5146 11.7188C27.5024 11.7188 18.9551 18.0029 15.6006 26.8506C9.32373 28.4985 4.6875 34.2187 4.6875 41.0156C4.6875 49.1089 11.2427 55.6641 19.3286 55.6641H22.2656C22.5879 55.6641 22.8516 55.4004 22.8516 55.0781V50.6836C22.8516 50.3613 22.5879 50.0977 22.2656 50.0977H19.3286C16.8604 50.0977 14.5386 49.1162 12.8101 47.3364C11.0889 45.564 10.1733 43.1763 10.2539 40.7007C10.3198 38.7671 10.979 36.9507 12.1729 35.4199C13.396 33.8599 15.1099 32.7246 17.0142 32.2192L19.79 31.4941L20.8081 28.8135C21.438 27.1436 22.3169 25.5835 23.4229 24.1699C24.5147 22.7689 25.808 21.5372 27.2607 20.5151C30.271 18.3984 33.8159 17.2778 37.5146 17.2778C41.2134 17.2778 44.7583 18.3984 47.7686 20.5151C49.2261 21.5405 50.5151 22.771 51.6064 24.1699C52.7124 25.5835 53.5913 27.1509 54.2212 28.8135L55.2319 31.4868L58.0005 32.2192C61.9702 33.2886 64.7461 36.8994 64.7461 41.0156C64.7461 43.4399 63.8013 45.7251 62.0874 47.439C61.2469 48.2844 60.247 48.9547 59.1457 49.411C58.0444 49.8674 56.8635 50.1008 55.6714 50.0977H52.7344C52.4121 50.0977 52.1484 50.3613 52.1484 50.6836V55.0781C52.1484 55.4004 52.4121 55.6641 52.7344 55.6641H55.6714C63.7573 55.6641 70.3125 49.1089 70.3125 41.0156C70.3125 34.2261 65.6909 28.5132 59.4287 26.8579Z" fill="#222364" />
                </svg>
            </div>

            
            <div className="flex text-center pb-5 border-bottom-1 font-face dark-purple-font purple-border-bottom fs-5 purple-hover">
                <label htmlFor="file-upload">Upload your resume(s)</label>
            </div>
            <SubmitComponent />
            {/* Resume Upload Component End */}

            {/* Resume Display Header */}
            <div className="flex text-center pt-5 pb-5 border-bottom-1 font-face dark-purple-font fs-5">The following resume's will be included in your search:</div>
            {/* Resume Display Component */}
            <div className="flex text-center pb-4 t-5">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9125 10.4625L21.0375 2.5875C20.8125 2.3625 20.5875 2.25 20.25 2.25H9C7.7625 2.25 6.75 3.2625 6.75 4.5V31.5C6.75 32.7375 7.7625 33.75 9 33.75H27C28.2375 33.75 29.25 32.7375 29.25 31.5V11.25C29.25 10.9125 29.1375 10.6875 28.9125 10.4625ZM20.25 4.95L26.55 11.25H20.25V4.95ZM27 31.5H9V4.5H18V11.25C18 12.4875 19.0125 13.5 20.25 13.5H27V31.5Z" fill="#222364" />
                    <path d="M11.25 24.75H24.75V27H11.25V24.75ZM11.25 18H24.75V20.25H11.25V18Z" fill="#222364" />
                </svg>
                <div className="font-face dark-purple-font fs-6">John_Smith_Resume.pdf</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold">DELETE</div>
            </div>
            {/* Resume Display Component End */}

            {/* Resume Display Component */}
            <div className="flex text-center pb-4 t-5">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.9125 10.4625L21.0375 2.5875C20.8125 2.3625 20.5875 2.25 20.25 2.25H9C7.7625 2.25 6.75 3.2625 6.75 4.5V31.5C6.75 32.7375 7.7625 33.75 9 33.75H27C28.2375 33.75 29.25 32.7375 29.25 31.5V11.25C29.25 10.9125 29.1375 10.6875 28.9125 10.4625ZM20.25 4.95L26.55 11.25H20.25V4.95ZM27 31.5H9V4.5H18V11.25C18 12.4875 19.0125 13.5 20.25 13.5H27V31.5Z" fill="#222364" />
                    <path d="M11.25 24.75H24.75V27H11.25V24.75ZM11.25 18H24.75V20.25H11.25V18Z" fill="#222364" />
                </svg>
                <div className="font-face dark-purple-font fs-6">Jane_Doe_Resume.pdf</div>
                <div className="dark-purple-hover font-face medium-purple-font fw-bold">DELETE</div>
            </div>
            {/* Resume Display Component End */}
        </>
    )
}


export function ResumeUploadDisplay() {
    return (
        <>
            <div className="flex text-center mb-5 border-bottom-1">
                Select resume's to include:
            </div>
        </>
    )
}