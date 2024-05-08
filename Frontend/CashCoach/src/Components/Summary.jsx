import React from "react";

const Summary = ({totalExpenses,netIncome,MonthlyExpense,MonthlyIncome,Savings})=>{

    return(
        <>
                <div className="bg-white text-black p-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Total Expenses</h3>
                    <p>{'\u20B9'}{totalExpenses}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Net Income</h3>
                    <p>{'\u20B9'}{netIncome}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Monthly Expense</h3>
                    <p>{'\u20B9'}{MonthlyExpense}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Monthly Income</h3>
                    <p>{'\u20B9'}{MonthlyIncome}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Savings</h3>
                    <p>{'\u20B9'}{Savings}</p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Financial Health</h3>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div style={{ width: `${(Savings / netIncome) * 100}%` }} className="h-full bg-green-500 rounded-full"></div>
                </div>
            </div>
            </div>
            </>
        
    )

    

};
export default Summary;