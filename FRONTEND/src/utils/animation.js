export const getAOSAttributes = (options = {}) => ({
    "data-aos": options.type || "fade-up",
    "data-aos-duration": options.duration || 1000,
    "data-aos-delay": options.delay || 0,
    "data-aos-once": options.once ?? true 
});

// USE getAOSAttributes({ type: "zoom-in", delay: 300 }) 