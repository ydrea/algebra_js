import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((userData) => this.setState({ osobe: userData.data }));
  }

  onFilterChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { osobe, searchField } = this.state;
    const { onFilterChange } = this;

    const filter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchField);
    });

    return (
      <div>
        <input type="search" placeholder="Pretraži" onChange={onFilterChange} />
        {filter.map((osoba) => {
          return <p key={Math.random()}>{osoba.first_name}</p>;
        })}

        {/*
        
        // osiguravanje ispravnog ispisa clg- pomoću callback funkcije unutar setter funkcije

        <button
          onClick={() => {
            this.setState(
              () => {
                return { ime: "Jura" };
              },
              () => {
                console.log(this.state);
              }
            );
          }}
        >
          Promijeni ime
        </button> */}
      </div>
    );
  }
}
