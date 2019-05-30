import React from 'react';
// import './Dropdown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Select City</div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Vijaywada">Vijaywada</a></li>
         <li><a href="#Hyderabad">Hyderabad</a></li>
         <li><a href="#Warangal">Warangal</a></li>
         <li><a href="#Mumbai">Mumbai</a></li>
         <li><a href="#Pune">Pune</a></li>
         <li><a href="#Banglore">Banglore</a></li>
         <li><a href="#Nalgonda">Nalgonda</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;