import React, { Component } from 'react';
class DataGridComponent extends Component {
    constructor(props) {
        super(props);
        //contentEditable="true"
        this.state = { 
            
         }
    }

    render() { 
        console.log(`In DataGrid ${JSON.stringify(this.props.dataSource)}`);
        let columns =[];
        for(let c in this.props.dataSource[0]){
            columns.push(c);
        }
        console.log(columns);
        return ( 
        <div className="container">
          <table className="table table-bordered table-striped">
             <thead>
               <tr>
                  {
                      columns.map((c,i) => (
                          <th key={i}>{c}</th>
                      ))
                  }
               </tr>
             </thead>
             <tbody>
               {
                   this.props.dataSource.map((d,j) => (
                       <tr key={j} >
                         {
                            columns.map((c,i) => (
                                <td key={i}>{d[c]}</td>
                            )) 
                         }
                       </tr>
                   ))
               }
             </tbody>
          
          </table>
        </div>
        );
    }
}
 
export default DataGridComponent;