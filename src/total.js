import React from "react";

function Total({ totalCredit, totalDebit, credits, debits }) {
  for (let credit of credits) {
    totalCredit += credit.amount;
  }
  for (let debit of debits) {
    totalDebit +=debit.amount;
  }
  let total = totalCredit - totalDebit;
  return (
    <div id="answer">
      <h1>${total}</h1>
    </div>
  );
}

export default Total;
