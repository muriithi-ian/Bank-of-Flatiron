import React, { useLayoutEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";

function AccountContainer() {
	const [transactions, setTransactions] = useState([]);

	useLayoutEffect(() => {
		axios.get("http://localhost:8001/transactions").then((response) => {
			setTransactions(response.data);
		});
	}, []);

	
	return (
		<div>
			<Search />
			<AddTransactionForm />
			<TransactionsList transactions={transactions} />
		</div>
	);
}

export default AccountContainer;
