import React,{ Component } from "react";

class Navbar extends Component{
    constructor() {
        super();
    }
     render() {
        return(
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

            </div>
        )
     }
};

export default Navbar;
