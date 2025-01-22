import React from "react";
import { Note } from "../../utils/types/Types";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    workOrderNotes: Array<Note> | undefined
}

const WorkOrderNotes: React.FC<Props> = ({workOrderNotes})=>{
    return <>
        {
            workOrderNotes?.map((wn: Note, i: number)=>{
                return <Container>
                    <Row className="text-secondary text-xs font-weight-bold ">
                    <Col className="my-4">
                        <Row>
                            <Col>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <b>Date: {wn.dateCreated}</b>
                                    <span className="note-duration">Duration: {wn.Duration}</span>
                                </div>
                                <p>
                                    <small>{wn.Note}</small>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                    {
                                        wn.Resolved == true ? "Resolved" : ""
                                    }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                { wn.Resolved == true ? `Date Closed: ${ wn.dateModified }` : "" }
                            </Col>
                        </Row>
                    </Col>
                    { i != workOrderNotes.length - 1 ? <hr style={{border: "0.1px solid grey"}}/> : "" }
                </Row></Container>
            })
        }
    </>
}

export default WorkOrderNotes