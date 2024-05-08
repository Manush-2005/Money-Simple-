import React from "react";
import Summary from "../Components/Summary";
import { useEffect,useState } from "react";
import axios from "axios";
import Categorytable from "../Components/Categorytable";
import {marked} from "marked";
import NavBar from "../Components/NavBar";


const Analysispage =()=>{

    const [User,setUser] = useState(null);
    const [Recommdations,setRecommdations] = useState(null);
    const[plan,setplan] = useState(null);
    const[review,setreview] = useState(null);
    const [userid,setuserid] = useState(localStorage.getItem("userid"));

    useEffect(()=>{
        async function getuserdetails(){

            const res = await axios.get(`http://localhost:3000/getuser/${userid}`);
            setUser(res.data.isuser);
            res.data.isuser.Recommdations = marked(res.data.isuser.Recommdations);
            setRecommdations(res.data.isuser.Recommdations);
            res.data.isuser.plan = marked(res.data.isuser.plan);
            setplan(res.data.isuser.plan);
            res.data.isuser.review = marked(res.data.isuser.review);
            setreview(res.data.isuser.review);

        }
        getuserdetails();

    },[]);


    

    return(
        <>
        <NavBar/>
        
        {
            User && (
                <>
                <div className="p-5 bg-black text-white text-center">
            <h1 className="text-4xl mb-4">  Budget Analysis Of : {User.name}</h1>
            
        </div>

                <Summary totalExpenses={User.
                    TotalExpense} netIncome={User.TotalIncome} MonthlyExpense={3000} MonthlyIncome={20000} Savings={User.Savings}/>
                    </>
            )
        }

<Categorytable/>

{
    User && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
                <h2 className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Recommendations</h2>
                <div className="flex items-center border-b-2 border-gray-200 py-2">
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: Recommdations }}>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
{
    User && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
                <h2 className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Your Finacal Plan</h2>
                <div className="flex items-center border-b-2 border-gray-200 py-2">
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: plan }}>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
{
    User && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
                <h2 className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Review of your spending habit</h2>
                <div className="flex items-center border-b-2 border-gray-200 py-2">
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: review }}>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
        
   
        

        </>
    )

    

};
export default Analysispage;