const smartgrid = require('smart-grid');

smartgrid('./app/precss', {
    columns: 12,
    offset: "15px",
    container: {
        maxWidth: "1600px"
    },
    breakPoints: {
        lg: {
            width: "1200px",
            fields: "30px"
        },
        md: {
            width: "992px",
            fields: "30px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px",
            fields: "15px"
        },
        xxs: {
            width: "320px"
        }
    }
});

/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */