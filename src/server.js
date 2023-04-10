import express from "express";
import morgan from "morgan";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const home = (req, res) => {
    return res.send("hello");
};
const login = (req, res) => {
    return res.send("login");
};

app.get("/", home);
app.get("/login", login);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}🤖`);

app.listen(PORT, handleListening);
