import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeButton from "../components/HomeButton";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(250, 200, 235, 0.27);
  }
`;

const TableCell = styled.td`
  border: 1px solid #c4c2c2;
  padding: 8px;
  text-align: left;
`;

const Button = styled.button`
  background-color: #fd887f;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c75a52;
  }
`;

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, []);

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        sessionStorage.setItem("list", JSON.stringify(newData));
    };

    return (
        <div>
            <Table>
                <thead>
                <TableRow>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Номер телефона</th>
                    <th>Действия</th>
                </TableRow>
                </thead>
                <tbody>
                {data.map((person, index) => (
                    <TableRow key={index}>
                        <TableCell>{person.name}</TableCell>
                        <TableCell>{person.surname}</TableCell>
                        <TableCell>{person.phone}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(index)}>Удалить пользователя</Button>
                        </TableCell>
                    </TableRow>
                ))}

                </tbody>
            </Table>
            <HomeButton >Вернуться на главную</HomeButton>
        </div>
    );
};

export default List;
