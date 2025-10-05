import React from "react";
import "./App.css";
function User(){
  const userName = [
  { name: "Nitesh Amule", number: "9876543210", email: "nitesh.amule@gmail.com" },
  { name: "Aman Pande", number: "9123456780", email: "aman.pande@yahoo.com" },
  { name: "Subha Roy", number: "9988776655", email: "subha.roy@hotmail.com" },
  { name: "Sanju Patle", number: "9012345678", email: "sanju.patle@gmail.com" },
  { name: "Rohit Sharma", number: "9871234560", email: "rohit.sharma@gmail.com" },
  { name: "Priya Singh", number: "9123678901", email: "priya.singh@gmail.com" },
  { name: "Ankit Verma", number: "9988123456", email: "ankit.verma@yahoo.com" },
  { name: "Sneha Gupta", number: "9012783456", email: "sneha.gupta@hotmail.com" },
  { name: "Karan Mehta", number: "9876541230", email: "karan.mehta@gmail.com" },
  { name: "Pooja Yadav", number: "9123450987", email: "pooja.yadav@yahoo.com" },
  { name: "Rakesh Jain", number: "9876546781", email: "rakesh.jain@gmail.com" },
  { name: "Sonal Kapoor", number: "9123456781", email: "sonal.kapoor@gmail.com" },
  { name: "Deepak Kumar", number: "9988771122", email: "deepak.kumar@hotmail.com" },
  { name: "Ritu Agarwal", number: "9012345671", email: "ritu.agarwal@gmail.com" },
  { name: "Manish Tiwari", number: "9871234561", email: "manish.tiwari@gmail.com" },
  { name: "Anjali Saxena", number: "9123678902", email: "anjali.saxena@yahoo.com" },
  { name: "Siddharth Reddy", number: "9988123457", email: "siddharth.reddy@gmail.com" },
  { name: "Swati Nair", number: "9012783457", email: "swati.nair@hotmail.com" },
  { name: "Abhishek Mishra", number: "9876541231", email: "abhishek.mishra@gmail.com" },
  { name: "Nikita Sharma", number: "9123450988", email: "nikita.sharma@yahoo.com" },
  { name: "Rakesh Kumar", number: "9876544321", email: "rakesh.kumar@gmail.com" },
  { name: "Sonia Reddy", number: "9123454321", email: "sonia.reddy@hotmail.com" },
  { name: "Vikram Singh", number: "9988773344", email: "vikram.singh@gmail.com" },
  { name: "Neha Jain", number: "9012348765", email: "neha.jain@yahoo.com" },
  { name: "Rahul Mehta", number: "9871230987", email: "rahul.mehta@gmail.com" },
  { name: "Divya Kapoor", number: "9123678903", email: "divya.kapoor@gmail.com" },
  { name: "Pranav Sharma", number: "9988123458", email: "pranav.sharma@hotmail.com" },
  { name: "Megha Verma", number: "9012783458", email: "megha.verma@gmail.com" },
  { name: "Varun Agarwal", number: "9876541232", email: "varun.agarwal@gmail.com" },
  { name: "Rina Patil", number: "9123450989", email: "rina.patil@yahoo.com" },
  { name: "Kunal Sharma", number: "9876545678", email: "kunal.sharma@gmail.com" },
  { name: "Sanya Gupta", number: "9123456782", email: "sanya.gupta@hotmail.com" },
  { name: "Ajay Rao", number: "9988775566", email: "ajay.rao@gmail.com" },
  { name: "Isha Joshi", number: "9012345672", email: "isha.joshi@gmail.com" },
  { name: "Anurag Tiwari", number: "9871234562", email: "anurag.tiwari@yahoo.com" },
  { name: "Neetu Singh", number: "9123678904", email: "neetu.singh@gmail.com" },
  { name: "Vivek Patel", number: "9988123459", email: "vivek.patel@hotmail.com" },
  { name: "Simran Kaur", number: "9012783459", email: "simran.kaur@gmail.com" },
  { name: "Rohan Mehta", number: "9876541233", email: "rohan.mehta@gmail.com" },
  { name: "Priyanka Reddy", number: "9123450990", email: "priyanka.reddy@yahoo.com" },
  { name: "Anish Sharma", number: "9876548765", email: "anish.sharma@gmail.com" },
  { name: "Seema Kapoor", number: "9123454322", email: "seema.kapoor@hotmail.com" },
  { name: "Harsh Verma", number: "9988776677", email: "harsh.verma@gmail.com" },
  { name: "Aarti Yadav", number: "9012345673", email: "aarti.yadav@gmail.com" },
  { name: "Saurabh Jain", number: "9871234563", email: "saurabh.jain@yahoo.com" },
  { name: "Anita Gupta", number: "9123678905", email: "anita.gupta@gmail.com" },
  { name: "Tarun Agarwal", number: "9988123460", email: "tarun.agarwal@hotmail.com" },
  { name: "Nisha Rani", number: "9012783460", email: "nisha.rani@gmail.com" },
  { name: "Mohit Sharma", number: "9876541234", email: "mohit.sharma@gmail.com" },
  { name: "Rekha Iyer", number: "9123450991", email: "rekha.iyer@yahoo.com" },
  { name: "Gaurav Mehta", number: "9876544322", email: "gaurav.mehta@gmail.com" },
  { name: "Poonam Singh", number: "9123456783", email: "poonam.singh@hotmail.com" },
  { name: "Rajat Verma", number: "9988777788", email: "rajat.verma@gmail.com" },
  { name: "Shivani Patel", number: "9012345674", email: "shivani.patel@gmail.com" }
];

  return(
    <>
    <h1>Collage Students</h1>

    <table 
    border="1"
    style={{borderCollapse:"collapse",width:"100%",textAlign:"center"}}>
      <thead style={{ backgroundColor: "#f2f2f2" }}>
        <tr>
          <th style={{padding:"8px"}}> S NO.</th>
          <th style={{padding:"8px"}}>Name</th>
          <th style={{padding:"8px"}}>Number</th>
          <th style={{padding:"8px"}}>Email</th>
        </tr>
      </thead>

      <tbody>
        {userName.map((user ,index)=>(
        <tr key={index}>
          <td style={{padding:"8px"}}>{index +1}</td>
          <td style={{padding:"8px"}}>{user.name.toLocaleUpperCase()}</td>
          <td style={{padding:"8px"}}>{user.number}</td>
          <td style={{padding:"8px"}}><a href={user.email.toLocaleLowerCase()}>{user.email.toLocaleLowerCase()}</a></td>
        </tr>
        ))}
      </tbody>

    </table>
    </>
  )
};
export default User;