"use client"
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroupItem } from "react-bootstrap";
export default function CourseNavigation() {
    const { cid } = useParams();
    const pathname = usePathname();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
            <ListGroupItem key={link} as={Link} href={`/Courses/${cid}/${link}`}
                action
                className={pathname.includes(link) ? "active border-0" : "border-0"}>
                {link}
            </ListGroupItem>
            ))}
        </div>
    );
}