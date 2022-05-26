import '../assets/lista.css';
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import { Menu } from '../components/Menu';


const Lista = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/0a29e245-51c4-4843-a48c-1b68b1af77b0")
          .then((res) => res.json())
          .then((data) => setUsers([...data]));
     }, []);


    return (
        <>
        <Menu />
        <h1>Versenyzők</h1>
        <div className="tabhat szel">            
        <Table className='lista'>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Azonosító</TableHeaderCell>
                    <TableHeaderCell>Név</TableHeaderCell>
                    <TableHeaderCell>Születési dátum</TableHeaderCell>
                    <TableHeaderCell>Nemzet</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((val, index) => (
                <TableRow>
                    <TableCell>{val.az}</TableCell>
                    <TableCell>{val.nev}</TableCell>
                    <TableCell>{val.szuldat}</TableCell>
                    <TableCell>{val.nemzet}</TableCell>
                </TableRow>    
                ))}           
            </TableBody>
        </Table>
        </div>
        </>
    )
};

export default Lista;