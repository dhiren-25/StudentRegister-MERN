


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Table, Form, Icon, Input, Pagination } from 'semantic-ui-react';
// import './App.css';

// const ITEMS_PER_PAGE = 20; // Number of items to display per page

// const App = () => {
//   const [students, setStudents] = useState([]);
//   const [activePage, setActivePage] = useState(1);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const newStudent = {
//   //     firstName: e.target.firstName.value,
//   //     lastName: e.target.lastName.value,
//   //     email: e.target.email.value,
//   //     rollNo: e.target.rollNo.value,
//   //     phoneNum: e.target.phoneNum.value,
//   //     address: e.target.address.value,
//   //     gender: e.target.gender.value,
//   //     branch: e.target.branch.value,
//   //   };
//   //   setStudents([...students, newStudent]);
//   //   console.log(students);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/addStudent', {
//         firstName: e.target.firstName.value,
//         lastName: e.target.lastName.value,
//         email: e.target.email.value,
//         rollNo: e.target.rollNo.value,
//         phoneNum: e.target.phoneNum.value,
//         address: e.target.address.value,
//         gender: e.target.gender.value,
//         branch: e.target.branch.value,
//       });
  
//       if (response.data.success) {
//         // Fetch the updated list of students after adding a new student
//         const updatedStudents = await axios.get('http://localhost:5000/api/students');
//         setStudents(updatedStudents.data);
  
//         // Handle success, e.g., display a success message or redirect
//         console.log('Student added successfully');
//       } else {
//         // Handle failure, e.g., display an error message
//         console.error('Failed to add student');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   const handleDelete = async (index, studentId) => {
//     try {
//       // Delete the student from the server
//       await axios.delete(`http://localhost:5000/api/students/${studentId}`);
  
//       // Update the local state by removing the deleted student
//       const newStudents = [...students];
//       newStudents.splice(index, 1);
//       setStudents(newStudents);
  
//       console.log('Student deleted successfully');
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };
  
//   const handlePageChange = (e, { activePage }) => {
//     setActivePage(activePage);
//   };

//   const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const displayedStudents = students.slice(startIndex, endIndex);


//   return (
    
//     <div >
//       <h1>Student Registration</h1>
//       <Form onSubmit={handleSubmit}>
//          <Form.Group widths="equal">
//           <Form.Field control={Input} label="First Name" name="firstName" />
//           <Form.Field control={Input} label="Last Name" name="lastName" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Email" name="email" />
//           <Form.Field control={Input} label="Roll No" name="rollNo" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Phone Number" name="phoneNum" />
//           <Form.Field control={Input} label="Address" name="address" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Gender" name="gender" />
//           <Form.Field control={Input} label="Branch" name="branch" />
//         </Form.Group>
//         <Button type="submit">Submit</Button>
        
        
//       </Form>
      
   

    
//     <h1>Students List</h1>
//       <Table celled>
//         <Table.Header>
//           <Table.Row>
//           {/* <Table.HeaderCell>Select</Table.HeaderCell> */}
//             <Table.HeaderCell>Name</Table.HeaderCell>
//             <Table.HeaderCell>Email</Table.HeaderCell>
//             <Table.HeaderCell>Action</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//         <Table.Body>
//           {displayedStudents.map((student, index) => (
//             <Table.Row key={index}>
//               {/* <Table.Cell>
//                 <input type='checkbox'/>
//               </Table.Cell> */}
//               <Table.Cell>{student.firstName + ' ' + student.lastName}</Table.Cell>
//               <Table.Cell>{student.email}</Table.Cell>
//               <Table.Cell>
                
//                 <button class="negative ui button" onClick={() => handleDelete(index,student._id)}>Delete</button>
                
                

//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>

//       <div className="pagination-container">
//         <Pagination
//           activePage={activePage}
//           onPageChange={handlePageChange}
//           totalPages={Math.ceil(students.length / ITEMS_PER_PAGE)}
//           boundaryRange={0}
//           siblingRange={1}
//           ellipsisItem={null}
//           firstItem={null}
//           lastItem={null}
//         />
//       </div>
//     </div>
   

//   );
// };

// export default App;



 


// old one with update button work !!: 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, Form, Input, Pagination } from 'semantic-ui-react';
// import './App.css';

// const ITEMS_PER_PAGE = 5;

// const App = () => {
//   const [students, setStudents] = useState([]);
//   const [activePage, setActivePage] = useState(1);
//   const [updateStudentId, setUpdateStudentId] = useState(null);
  

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const response = await axios.get('http://localhost:5000/api/students');
//       setStudents(response.data);
//     };

//     fetchStudents();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (updateStudentId) {
//         // Update student data
//         await axios.put(`http://localhost:5000/api/students/${updateStudentId}`, {
//           firstName: e.target.firstName.value,
//           lastName: e.target.lastName.value,
//           email: e.target.email.value,
//           rollNo: e.target.rollNo.value,
//           phoneNum: e.target.phoneNum.value,
//           address: e.target.address.value,
//           gender: e.target.gender.value,
//           branch: e.target.branch.value,
//         });

//         // Reset updateStudentId after updating
//         setUpdateStudentId(null);
//       } else {
//         // Add new student
//         const response = await axios.post('http://localhost:5000/api/addStudent', {
//           firstName: e.target.firstName.value,
//           lastName: e.target.lastName.value,
//           email: e.target.email.value,
//           rollNo: e.target.rollNo.value,
//           phoneNum: e.target.phoneNum.value,
//           address: e.target.address.value,
//           gender: e.target.gender.value,
//           branch: e.target.branch.value,
//         });

//         if (response.data.success) {
//           // Fetch the updated list of students after adding a new student
//           const updatedStudents = await axios.get('http://localhost:5000/api/students');
//           setStudents(updatedStudents.data);
//           console.log('Student added successfully');
//         } else {
//           console.error('Failed to add student');
//         }
//       }

//       // Reset the form
//       e.target.reset();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (index, studentId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/students/${studentId}`);
//       const newStudents = [...students];
//       newStudents.splice(index, 1);
//       setStudents(newStudents);
//       console.log('Student deleted successfully');
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   const handleUpdate = async (studentId) => {
//     try {
//       // Fetch student details
//       const response = await axios.get(`http://localhost:5000/api/student/${studentId}`);
//       const studentDetails = response.data;
  
//       // Pre-fill the form with student details
//       document.getElementsByName('firstName')[0].value = studentDetails.firstName || '';
//       document.getElementsByName('lastName')[0].value = studentDetails.lastName || '';
//       document.getElementsByName('email')[0].value = studentDetails.email || '';
//       document.getElementsByName('rollNo')[0].value = studentDetails.rollNo || '';
//       document.getElementsByName('phoneNum')[0].value = studentDetails.phoneNum || '';
//       document.getElementsByName('address')[0].value = studentDetails.address || '';
//       document.getElementsByName('gender')[0].value = studentDetails.gender || '';
//       document.getElementsByName('branch')[0].value = studentDetails.branch || '';
  
//       // Set the update mode and student ID
//       setUpdateStudentId(studentId);
//     } catch (error) {
//       console.error('Error fetching student details for update:', error);
//     }
//   };
  

//   const handleViewDetails = (student) => {
//     // Open a new window to display all student details
//     const newWindow = window.open('', '_blank', 'width=600,height=400');
    
//     // Render student details in the new window
//     newWindow.document.write(`
//       <h1>Student Details</h1>
//       <p><strong>Name:</strong> ${student.firstName} ${student.lastName}</p>
//       <p><strong>Email:</strong> ${student.email}</p>
//       <p><strong>Roll No:</strong> ${student.rollNo}</p>
//       <p><strong>Phone Number:</strong> ${student.phoneNum}</p>
//       <p><strong>Address:</strong> ${student.address}</p>
//       <p><strong>Gender:</strong> ${student.gender}</p>
//       <p><strong>Branch:</strong> ${student.branch}</p>
//     `);
//   };

//   const handlePageChange = (e, { activePage }) => {
//     setActivePage(activePage);
//   };

//   const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const displayedStudents = students.slice(startIndex, endIndex);

//   return (
//     <div className="container">
//       <h1>Student Registration</h1>
      
//       <Form className="registration-form" onSubmit={handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="First Name" name="firstName" />
//           <Form.Field control={Input} label="Last Name" name="lastName" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Email" name="email" />
//           <Form.Field control={Input} label="Roll No" name="rollNo" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Phone Number" name="phoneNum" />
//           <Form.Field control={Input} label="Address" name="address" />
//         </Form.Group>
//         <Form.Group widths="equal">
//           <Form.Field control={Input} label="Gender" name="gender" />
//           <Form.Field control={Input} label="Branch" name="branch" />
//         </Form.Group>
//         <Button type="submit">Submit</Button>
//       </Form>


//       <div className="table-container">
//         <h1>Students List</h1>
//         <Table className="table" celled>
//           <Table.Header>
//             <Table.Row className='TableRow'> 
//               <Table.HeaderCell>Name</Table.HeaderCell>
//               <Table.HeaderCell>Email</Table.HeaderCell>
//               <Table.HeaderCell>Action</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             {displayedStudents.map((student, index) => (
//               <Table.Row key={index}>
//                 <a href="#" onClick={() => handleViewDetails(student)}>
//                     {student.firstName + ' ' + student.lastName}
//                   </a>
//                 <Table.Cell>{student.email}</Table.Cell>
//                 <Table.Cell>
//                   <Button className="delete-btn" onClick={() => handleDelete(index, student._id)}>
//                     Delete
//                   </Button>
//                   <Button className="update-btn" onClick={() => handleUpdate(student._id)}>
//                     Update
//                   </Button>
                  
//                 </Table.Cell>
//               </Table.Row>
//             ))}
//           </Table.Body>
//         </Table>
//       </div>

//       <div className="pagination-container">
//         <Pagination className="pagination-item"
//           activePage={activePage}
//           onPageChange={handlePageChange}
//           totalPages={Math.ceil(students.length / ITEMS_PER_PAGE)}
//           boundaryRange={0}
//           siblingRange={1}
//           ellipsisItem={null}
//           firstItem={null}
//           lastItem={null}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;



//  new one with add student btn  work properly and update also
 


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Form, Input, Pagination } from 'semantic-ui-react';
import './App.css';

const ITEMS_PER_PAGE = 5;

const App = () => {
  const [students, setStudents] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [updateStudentId, setUpdateStudentId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    };

    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      if (updateStudentId) {
        // Update student data
        await axios.put(`http://localhost:5000/api/students/${updateStudentId}`, {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          rollNo: e.target.rollNo.value,
          phoneNum: e.target.phoneNum.value,
          address: e.target.address.value,
          gender: e.target.gender.value,
          branch: e.target.branch.value,
        });

        // Reset updateStudentId after updating
        setUpdateStudentId(null);
      } else {
        // Add new student
        const response = await axios.post('http://localhost:5000/api/addStudent', {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          rollNo: e.target.rollNo.value,
          phoneNum: e.target.phoneNum.value,
          address: e.target.address.value,
          gender: e.target.gender.value,
          branch: e.target.branch.value,
        });

        if (response.data.success) {
          // Fetch the updated list of students after adding a new student
          const updatedStudents = await axios.get('http://localhost:5000/api/students');
          setStudents(updatedStudents.data);
          console.log('Student added successfully');
        } else {
          console.error('Failed to add student');
        }
      }

      // Reset the form
      e.target.reset();
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (index, studentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${studentId}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
      console.log('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdate = async (studentId) => {
    try {
      // Fetch student details
      const response = await axios.get(`http://localhost:5000/api/student/${studentId}`);
      const studentDetails = response.data;
      
      
      // Pre-fill the form with student details
      document.getElementsByName('firstName')[0].value = studentDetails.firstName || '';
      document.getElementsByName('lastName')[0].value = studentDetails.lastName || '';
      document.getElementsByName('email')[0].value = studentDetails.email || '';
      document.getElementsByName('rollNo')[0].value = studentDetails.rollNo || '';
      document.getElementsByName('phoneNum')[0].value = studentDetails.phoneNum || '';
      document.getElementsByName('address')[0].value = studentDetails.address || '';
      document.getElementsByName('gender')[0].value = studentDetails.gender || '';
      document.getElementsByName('branch')[0].value = studentDetails.branch || '';
  
      // Set the update mode and student ID
      
      setUpdateStudentId(studentId);
    } catch (error) {
      console.error('Error fetching student details for update:', error);
    }
  };
  

  const handleViewDetails = (student) => {
    // Open a new window to display all student details
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    
    // Render student details in the new window
    newWindow.document.write(`
      <h1>Student Details</h1>
      <p><strong>Name:</strong> ${student.firstName} ${student.lastName}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Roll No:</strong> ${student.rollNo}</p>
      <p><strong>Phone Number:</strong> ${student.phoneNum}</p>
      <p><strong>Address:</strong> ${student.address}</p>
      <p><strong>Gender:</strong> ${student.gender}</p>
      <p><strong>Branch:</strong> ${student.branch}</p>
    `);
  };

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedStudents = students.slice(startIndex, endIndex);

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <Button className='add-student-button' onClick={() => setShowForm(!showForm)}>Add Student</Button>
      
     {showForm && ( <Form className="registration-form" onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="First Name" name="firstName" />
          <Form.Field control={Input} label="Last Name" name="lastName" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Email" name="email" />
          <Form.Field control={Input} label="Roll No" name="rollNo" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Phone Number" name="phoneNum" />
          <Form.Field control={Input} label="Address" name="address" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Gender" name="gender" />
          <Form.Field control={Input} label="Branch" name="branch" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>)}


      <div className="table-container">
        <h1>Students List</h1>
        <Table className="table" celled>
          <Table.Header>
            <Table.Row className='TableRow'> 
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {displayedStudents.map((student, index) => (
              <Table.Row key={index}>
                <a href="#" onClick={() => handleViewDetails(student)}>
                    {student.firstName + ' ' + student.lastName}
                  </a>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell>
                  <Button className="delete-btn" onClick={() => handleDelete(index, student._id)}>
                    Delete
                  </Button>
                  <Button className="update-btn" onClick={() => handleUpdate(student._id) && setShowForm(true) }>
                    Update
                  </Button>
                  
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="pagination-container">
        <Pagination className="pagination-item"
          activePage={activePage}
          onPageChange={handlePageChange}
          totalPages={Math.ceil(students.length / ITEMS_PER_PAGE)}
          boundaryRange={0}
          siblingRange={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
        />
      </div>
    </div>
  );
};

export default App;

