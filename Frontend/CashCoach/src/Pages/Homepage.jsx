import React from "react";
import Footer from "../Components/Footer";
import axios from "axios";
import {useState,useEffect} from "react";
import NavBar from "../Components/NavBar";
import formatphoto from "../assets/format.png";
const Homepage = () =>{
    const [loading, setLoading] = useState(false);
    const [userid,setuserid] = useState(localStorage.getItem("userid"));
    const [name,setname] = useState("");

    const handleFileUpload = async(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        console.log(file);
        
        try {
            setLoading(true);
            const response = await axios.post(`http://127.0.0.1:8000/processcsv?id=${userid}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            console.log(response);
            window.location.href = '/Processing'
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        async function getuserdetails(){

            const res = await axios.get(`http://localhost:3000/getuser/${userid}`);

            const name = res.data.isuser.name;
            setname(name);

        }
        getuserdetails();


    },[]);

    

    return(
        <>
        <NavBar/>
        {loading &&   <div class="loader">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
}
       {!loading && <>
        <div className="bg-black text-white text-center py-20 px-10">
                <h1 className="text-4xl font-bold mb-4">Unlock Your Spending Potential</h1>
                <p className="text-xl mb-8">Upload your expenses, and we'll provide personalized insights and a tailored spending plan.</p>
              
                <p className="text-xl mb-4"> <strong>{name}</strong> upload your Budget Excel file here:</p>
                <input type="file" accept=".csv" onChange={handleFileUpload} className="bg-blue-900 text-white py-2 px-4 rounded font-bold text-xl cursor-pointer" />
                
            </div>
            <div className="bg-gray-800 text-white p-10">
    <h2 className="text-4xl font-bold mb-4">File Format Requirements</h2>
    <p className="mb-4">
        It's important to ensure your data is in the correct format to ensure accurate analysis and insights.
    </p>

    <h3 className="text-3xl font-bold mb-2">File Format</h3>
    <p className="mb-4">
        We accept data in the following formats: CSV, Excel. If you have data in another format, please convert it to one of these formats.
    </p>

    <h3 className="text-3xl font-bold mb-2">File Structure</h3>
    <p className="mb-4">
        Your file should have the following structure:
    </p>
    <ul className="list-disc list-inside mb-4">
        <li>Column 1: Category (Text)</li>
        <li>Column 2: Amount (Numeric)</li>
        <li>Column 3: Date (Date format, e.g., MM/DD/YYYY)</li>
       
    </ul>
    <h3 className="text-3xl font-bold mb-2">Example</h3>
    <img src={formatphoto} alt="Example of correct format" className="max-w-md max-h-md mx-auto" />
</div>
            <div className="bg-white text-black py-20 px-10">
            <h2 className="text-3xl font-bold mb-4 text-center">Feature Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                    <i className="fas fa-chart-line text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Personalized spending insights</h3>
                    <p>Get insights into your spending habits with our personalized reports.</p>
                </div>
                <div className="text-center">
                    <i className="fas fa-optimizely text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Recommendations for optimizing finances</h3>
                    <p>Receive recommendations to help you optimize your finances.</p>
                </div>
                <div className="text-center">
                    <i className="fas fa-calendar-alt text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Customized spending plan for the upcoming month</h3>
                    <p>Plan your spending for the upcoming month with our customized spending plan.</p>
                </div>
                <div className="text-center">
                    <i className="fas fa-chart-pie text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Visualization of spending patterns</h3>
                    <p>Visualize your spending patterns with our interactive charts.</p>
                </div>
               
            </div>
        </div>
        <div className="bg-white text-black py-20 px-10">
            <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 shadow-md rounded-lg">
                    <i className="fas fa-upload text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Step 1: Upload your expenses CSV file</h3>
                    <p>Upload your expenses CSV file to our platform.</p>
                </div>
                <div className="text-center p-6 shadow-md rounded-lg">
                    <i className="fas fa-brain text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Step 2: Our intelligent algorithms analyze your spending data</h3>
                    <p>Our intelligent algorithms analyze your spending data to provide insights.</p>
                </div>
                <div className="text-center p-6 shadow-md rounded-lg">
                    <i className="fas fa-lightbulb text-blue-900 text-3xl mb-4"></i>
                    <h3 className="text-xl font-bold mb-2">Step 3: Receive personalized insights, recommendations, and a spending plan</h3>
                    <p>Receive personalized insights, recommendations, and a spending plan based on your spending data.</p>
                </div>
            </div>
        </div>
       </>}

<Footer/>
            
     
        
        </>
    )

};

export default Homepage;