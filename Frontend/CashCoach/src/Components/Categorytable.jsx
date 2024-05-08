import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import {marked, use} from "marked";
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const Categorytable = ()=>{

    const [Categorytable,setCategorytable] = useState(null);
    const [piechartdata,setpiechartdata] = useState(null);
    const [piechartoptions,setpiechartoptions] = useState(null);
    const [id,setid] = useState(localStorage.getItem("userid"));
   


    function htmlToJson(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const table = doc.querySelector('table');
        const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
        const rows = Array.from(table.querySelectorAll('tr')).slice(1);
        const json = rows.map(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            const obj = {};
            cells.forEach((cell, i) => {
                obj[headers[i]] = cell.textContent;
            });
            return obj;
        });
        return json;
    }
    
    useEffect(()=>{
        async function getuserdetails(){

            const res = await axios.get(`http://localhost:3000/getuser/${id}`);

            const markdown = res.data.isuser.CategoryExpense;
            const html = marked(markdown);
            const json = htmlToJson(html);
            setCategorytable(json);

            
            

        }
        getuserdetails();

    },[]); 
    

    useEffect(()=>{
        if(Categorytable!==null){
        
            const filteredData = Categorytable.filter((item) => item.TotalAmount !== '0');
   
            const chartData = {
                labels: filteredData.map((item) => item.Expense),
                datasets: [
                  {
                    data: filteredData.map((item) => parseFloat(item.TotalAmount)),
                    backgroundColor: [
                      '#0088FE',
                      '#00C49F',
                      '#FFBB28',
                      '#FF8042',
                      '#8884d8',
                      '#C0C0C0',
                      '#FFA07A',
                      '#BFBFBF',
                      '#808080',
                    ],
                  },
                ],
              };
              setpiechartdata(chartData);
            
        }

    },[Categorytable]);


console.log(Categorytable);
    return(
        <>
     

        { Categorytable !== null && piechartdata !== null  && (
            <>
 <p className="text-xl mb-4">This is a graphical pie chart for the category-wise expenses:</p>
<Pie data={piechartdata}  width={200}
      height={300}
      options={{
        responsive: false, // Set to false to disable responsive resizing
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        layout: {
            padding: {
              
                
                
              } 
        },
      }}/>
        
             
            
            <table className="min-w-full table-auto">
            <thead className="justify-between">
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-300">Category</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-300">Expense(in rupees)</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
            {Categorytable.map((item, index) => (
                    <tr key={index} className="bg-white border-4 border-gray-200">
                        <td className="px-16 py-2">{item.Expense}</td>
                        <td className="px-16 py-2">{item.TotalAmount}</td>
                    </tr>
                ))}
               
                
                  
            </tbody>
        </table>
        </>
        )
}
        
        </>
    )

};
export default Categorytable;