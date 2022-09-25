import axios from "axios";
import React, { useState } from "react";

function AddTransactionForm({ transactions, setTransactions }) {
	const [data, setData] = useState({});

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:8001/transactions", data).then((response) => {
			setTransactions([...transactions, response.data]);
		});
		setData({});
	};

	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="inline fields">
					<input
						onChange={handleChange}
						type="date"
						name="date"
						value={data.date || ""}
					/>
					<input
						onChange={handleChange}
						type="text"
						name="description"
						placeholder="Description"
						value={data.description || ""}
					/>
					<input
						onChange={handleChange}
						type="text"
						name="category"
						placeholder="Category"
						value={data.category || ""}
					/>
					<input
						onChange={handleChange}
						type="number"
						name="amount"
						placeholder="Amount"
						step="0.01"
						value={data.amount || ""}
					/>
				</div>
				<button className="ui button" type="submit">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default AddTransactionForm;
