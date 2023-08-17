import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CrearableReactSelect from "react-select/creatable";
import{useRef} from "react";

type NoteFormProps ={
    onSubmit:{data: NoteData}
}

export function NoteForm({onSubmit} : NoteFormProps){
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    
    function handleSubmit(e: FormEvent){
        e.preventDefault()
    }
    
    return (
        <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} required/>
                    
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='tags'>
                    <Form.Label>Tags</Form.Label>
                    <CrearableReactSelect isMulti/>
                </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea" ref={markdownRef} rows={15}/>
                </Form.Group>
                <Stack direction="horizontal" gap={2} className='justify-content-end'>
                    <Button>Save</Button>
                    <Link to="..">
                    <Button>Cancel</Button>
                    </Link>
                </Stack>
        </Stack>
        </Form>
    )
}
