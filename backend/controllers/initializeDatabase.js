import axios from "axios";
import Transaction from "../models/Transaction.js";

export const initializeDb = async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    const transactions = response.data;
    //console.log(transactions);
    await Transaction.insertMany(transactions);
    res.json({ message: "Database initialized successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
