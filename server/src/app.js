import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import bodyParser from "body-parser";

const app= express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(todoRoutes);

const uri = `mongodb+srv://harerajo:mukwano123@cluster0.cv6vi.mongodb.net/todo?authSource=admin&replicaSet=atlas-b9vzo6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;
                                                                                  
mongoose
	.connect(uri 
		)
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		)
	)
	.catch((error) => {
		throw error;
	});
