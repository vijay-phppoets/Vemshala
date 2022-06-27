const cnf = {
    api: {
        base_url: "http://localhost:9000/",
    },
    s3_base_url: "https://piky.s3.ap-south-1.amazonaws.com/"
}

if (process.env.REACT_APP_ENV === "production") {
    cnf.api.base_url = "http://api.vemastore.com/"
}

export default cnf;