import { FormControl, FormLabel, FormSelect, FormCheck, Button, FormGroup } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
            <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" className="mb-3" />

            <FormLabel htmlFor="wd-description">Description</FormLabel>
            <FormControl
                as="textarea"
                id="wd-description"
                rows={5}
                className="mb-3"
                defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kambas application should include a link to navigate back to the landing page."
            />

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</FormLabel>
                <div className="col-sm-10">
                    <FormControl id="wd-points" defaultValue={100} />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </FormSelect>
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-display-grade-as">
                        <option value="Percentage">Percentage</option>
                    </FormSelect>
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-submission-type" className="mb-3">
                        <option value="Online">Online</option>
                    </FormSelect>

                    <FormLabel>Online Entry Options</FormLabel>
                    <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
                    <FormCheck type="checkbox" id="wd-website-url" label="Website URL" />
                    <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                    <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                    <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-assign-to" className="col-sm-2 col-form-label text-end">Assign to</FormLabel>
                <div className="col-sm-10">
                    <FormControl id="wd-assign-to" defaultValue="Everyone" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-due-date" className="col-sm-2 col-form-label text-end">Due</FormLabel>
                <div className="col-sm-10">
                    <FormControl type="date" id="wd-due-date" defaultValue="2024-05-13" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-available-from" className="col-sm-2 col-form-label text-end">Available from</FormLabel>
                <div className="col-sm-10">
                    <FormControl type="date" id="wd-available-from" defaultValue="2024-05-06" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-available-until" className="col-sm-2 col-form-label text-end">Until</FormLabel>
                <div className="col-sm-10">
                    <FormControl type="date" id="wd-available-until" defaultValue="2024-05-20" />
                </div>
            </div>

            <hr />
            <div className="float-end">
                <Button variant="secondary" className="me-2">Cancel</Button>
                <Button variant="danger">Save</Button>
            </div>
        </div>
    );
}