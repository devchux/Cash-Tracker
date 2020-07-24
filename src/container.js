import React from "react";

function ContainerApp({credits, debits, totalCredit, totalDebit, estimate}) {   
    const credit = credits.length ? credits.map((credit) => {
        totalCredit = totalCredit + parseInt(credit.amount);
        return (
                <tr id="hover" key={credit.id}>
                    <td>{credit.transaction}</td>
                    <td>{credit.amount}</td>
                </tr>
        ) 
    }) : 'No Transactions yet...';

    const debit = debits.length ? debits.map((debit) => {
        totalDebit = totalDebit + parseInt(debit.amount);
        return (
                <tr id="hover" key={debit.id}>
                    <td>{debit.transaction}</td>
                    <td>{debit.amount}</td>
                </tr>
        ) 
    }) : 'No Transactions yet...';

    return (
        <div id="container">
			<div id="table-data" className="credit">
				<h2>CREDIT</h2>
				<table>
                    <thead>
                        <tr>
                            <th>Transactions</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
					<tbody>
					    { credit }
                        <tr id="total-row">
                            <td>Total</td>
                            <td>{totalCredit}</td>
                        </tr>
                    </tbody>
				</table>
			</div>
			<div id="table-data" className="debit">
				<h2>DEBIT</h2>
				<table>
                    <thead>
                        <tr>
                            <th>Transactions</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
					    { debit }
                        <tr id="total-row">
                            <td>Total</td>
                            <td>{totalDebit}</td>
                        </tr>
                    </tbody>
				</table>
			</div>
		</div>
    )
}

export default ContainerApp