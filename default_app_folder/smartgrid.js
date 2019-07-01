const smartgrid = require('smart-grid');

smartgrid('./app/precss', {
    columns: 12,
    offset: "60px",
    mobileFirst: false,
    container: {
        maxWidth: "1000px"
    },
    breakPoints: {
        md: {
            width: "892px",
        },
        sm: {
            width: "720px",
        },
        xs: {
            width: "576px",
        },
        xxs: {
            width: "320px",
        }
    }
});

/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */