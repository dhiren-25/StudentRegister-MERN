import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';

const StudentDetailsModal = ({ selectedStudent, isModalOpen, closeModal }) => {
  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Modal.Header>Student Details</Modal.Header>
      <Modal.Content>
        {selectedStudent && (
          <div>
            <p>Name: {selectedStudent.firstName + ' ' + selectedStudent.lastName}</p>
            <p>Email: {selectedStudent.email}</p>
            <p>Roll No: {selectedStudent.rollno}</p>
            <p>Phone num: {selectedStudent.phonenum}</p>
          </div>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={closeModal}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default StudentDetailsModal;
