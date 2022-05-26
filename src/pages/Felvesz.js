
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Menu } from '../components/Menu';
import '../assets/felvesz.css';

const INITIAL_DATA = {
    nev: "",
    szuldat: "",
    nemzet: ""
}
const Felvesz = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.id)
                    setData(INITIAL_DATA);
            });
    }

    return (
        <div className='container'>
            <Menu />
            <div className='bevi'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formnev">
                    <Form.Label>Név:</Form.Label>
                    <Form.Control type="text" placeholder="Név" name="nev" value={data.nev} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formnev">
                    <Form.Label>Születési dátum:</Form.Label>
                    <Form.Control type="date" name="szuldat" value={data.szuldat} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Select aria-label="Default select example" name="nemzet" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}>
                    <option hidden >Válassz nemzetiséget!</option>
                    {
                        categories.map((nemzet, ind) => <option key={ind} >{nemzet}</option>)
                    }
                </Form.Select>

                <Button variant="success" type="submit">
                    Hozzáadom!
                </Button>
            </Form>
            </div>
        </div>
    );
}

export default Felvesz;