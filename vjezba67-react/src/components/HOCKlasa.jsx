import React from "react";

const HOC = (Komponenta, ekstenzija) => {
  return class extends React.Component {
    state = {
      podaci: [],
      query: "",
    };

    componentDidMount() {
      fetch(`https://jsonplaceholder.typicode.com/${ekstenzija}`)
        .then((res) => res.json())
        .then((data) => this.setState({ podaci: data }));
    }

    handleChange = (event) => {
      this.setState({ ...this.state, query: event.target.value });
    };

    render() {
      let { podaci, query } = this.state;
      let filterData = podaci;

      filterData = filterData.filter((podatak) => {
        if (ekstenzija === "users") {
          const { name } = podatak;
          return name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }
        if (ekstenzija === "todos") {
          const { title } = podatak;
          return title.toLowerCase().indexOf(query.toLowerCase()) >= 0;
        }
        return true;
      });
      return (
        <>
          <input type="text" value={query} onChange={this.handleChange} />
          <Komponenta podaci={filterData}></Komponenta>
        </>
      );
    }
  };
};

export default HOC;
