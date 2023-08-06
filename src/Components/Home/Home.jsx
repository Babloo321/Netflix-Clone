import React from 'react'
import "./Home.scss";
import logo from "../../avenger.jpeg"
const Card = ({img})=>(
  <img className = "card" src={img} alt="cover"/>
)

const Row = ({ title, arr=[{}] }) =>( // movies are coming in array
  <div className="row">
    <h2>{title}</h2>
  <div>
    <Card img={logo}/>
  {/* {  here we can access all movies from array
    arr.map((item)=>{
      <Card img={item.img}/>
    })
  } */}
  </div>
    </div>
)
function Home() {
  return (
    <section className="home">
      <div className="banner"></div>

      <Row title={"Popular on Netflix"}/>
      <Row title={"TV Shows"}/>
      <Row title={"Movies"}/>
      <Row title={"My List"}/>
      <Row title={"Recently Added"}/>
      </section>
  )
}

export default Home