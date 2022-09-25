import React, { useLayoutEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";

function AccountContainer() {
	const [transactions, setTransactions] = useState([]);
	const [filtered, setFiltered] = useState(null);

	useLayoutEffect(() => {
		axios.get("http://localhost:8001/transactions").then((response) => {
			setTransactions(response.data);
		});
	}, []);

	const filterTransactions = (searchTerm) => {
		const myFilter = transactions.filter((transaction) =>
			transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFiltered(myFilter);
	};

	return (
		<div>
			<Search filterTransactions={filterTransactions} />
			<AddTransactionForm
				transactions={transactions}
				setTransactions={setTransactions}
			/>
			<TransactionsList transactions={filtered || transactions} />
		</div>
	);
}

export default AccountContainer;
