/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button, InputGroup, FormControl, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch, FaTrash } from "react-icons/fa";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    const handleDeleteClick = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setShowDeleteDialog(true);
    };

    const confirmDelete = () => {
        if (assignmentToDelete) {
            dispatch(deleteAssignment(assignmentToDelete));
        }
        setShowDeleteDialog(false);
        setAssignmentToDelete(null);
    };

    return (
        <div id="wd-assignments">
            <InputGroup className="mb-3">
                <InputGroupText>
                    <FaSearch />
                </InputGroupText>
                <FormControl
                    placeholder="Search for Assignments"
                    id="wd-search-assignment"
                />
            </InputGroup>

            <div className="mb-3">
                <Link href={`/Courses/${cid}/Assignments/new`}>
                    <Button variant="secondary" className="float-end ms-2" id="wd-add-assignment">
                        <BsPlus /> Assignment
                    </Button>
                </Link>
                <Button variant="secondary" className="float-end" id="wd-add-assignment-group">
                    <BsPlus /> Group
                </Button>
            </div>

            <ListGroup className="rounded-0">
                <ListGroupItem className="p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS 40% of Total
                    <span className="float-end">
                        <BsPlus className="fs-4" />
                        <IoEllipsisVertical className="fs-4" />
                    </span>
                </ListGroupItem>

                {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                    <ListGroupItem key={assignment._id} className="d-flex justify-content-between align-items-start">
                        <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark flex-grow-1">
                            <div><strong>{assignment.title}</strong></div>
                            <div className="text-muted">Due: {assignment.due}</div>
                            <div className="text-muted">Points: {assignment.points}</div>
                        </Link>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => {
                                e.preventDefault();
                                handleDeleteClick(assignment._id);
                            }}
                        >
                            <FaTrash />
                        </Button>
                    </ListGroupItem>
                ))}
            </ListGroup>

            <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteDialog(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}