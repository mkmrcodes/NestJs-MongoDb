export const config = () => ({
  port: Number(process.env.PORT),
  database: {
    uri: process.env.MONGODB_URI,
    useNewUrlParser: process.env.USENEWURLPARSER,
    useFindAndModify: process.env.USEFINDANDMODIFY,
    useCreateIndex: process.env.USECREATEINDEX,
  },
});
