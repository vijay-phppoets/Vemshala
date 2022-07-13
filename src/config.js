const cnf = {
  api: {
    // base_url: "http://localhost:9000/",
    base_url: "http://65.1.76.185/api/",
  },
  // s3_base_url: "https://piky.s3.ap-south-1.amazonaws.com/",
  s3_base_url: "https://vemshala-gallery.s3.ap-south-1.amazonaws.com/",
};

if (process.env.REACT_APP_ENV === "production") {
  
  // cnf.api.base_url = "http://api.vemastore.com/";
  cnf.api.base_url = "http://65.1.76.185/api/";
}

export default cnf;
