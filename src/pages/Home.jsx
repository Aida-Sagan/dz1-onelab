import { Link } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

const  NavigationLink = styled(Link)`
  text-decoration: none;
  color: #3d3a3a;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid #756464;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`
export default function Home() {
    return (
            <nav className="navigation-menu">
                <NavigationLink to="/add">
                    Перейти на страницу Add
                </NavigationLink>
                <NavigationLink to="/list">
                    Перейти на страниц List
                </NavigationLink>
            </nav>


    );
}


