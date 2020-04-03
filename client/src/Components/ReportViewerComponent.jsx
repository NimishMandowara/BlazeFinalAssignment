import React, { Component } from 'react';
import SelectComponent from './SelectComponent';
// import Logic from '../models/logic';
import { FontStyle, FontWeight , Font} from '../models/constants';
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactTable from "react-table";
import "react-table/react-table.css";
import HttpService from './../services/httpservice';

class ReportViewerComponent extends Component {
    constructor(props) {
        super(props);
        this.serv = new HttpService();
        this.state = { 
            FontStyles : FontStyle,
            FontWeights: FontWeight,
            students:[],
            tablename:'',
            Fonts:Font
        };
    } 
    
    handleInputs=(evt)=> {
        this.setState({[evt.target.name]: evt.target.value});
    }
    // the method that has calls to all heavy operations or external async calls
    componentDidMount=()=>{
        this.serv.getStudents()
        .then((response)=>{
            console.log(response.data.data);
            this.setState({'students': response.data.data});
        })
        .catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    
        console.log("Component"+this.state.students);
        
    }
    getColumns(){
        return( [
            {
                Header:"StudentId",
                accessor:"StudentId"
            },
            {
                Header:"StudentName",
                accessor:"StudentName"
            },
            {
                Header:"University",
                accessor:"University"
            },
            {
                Header:"Course",
                accessor:"Course"
            },
            {
                Header:"Fees",
                accessor:"Fees",
                Footer:(<strong>Total = <span>{this.state.students.reduce((prevVal, item) => prevVal + item["Fees"], 0)}</span></strong>)
            },
            ]
        )
    }

    getFontWeight(val) {
        console.log(`Value Received from SelectComponent ${val}`);
        this.setState({FontWeight: val})
    }
    getFontStyle(val) {
        console.log(`Value Received from SelectComponent ${val}`);
        this.setState({FontStyle: val})
    }
    getFont(val) {
        console.log(`Value Received from SelectComponent ${val}`);
        this.setState({Font: val})
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(20);
    
        const title = this.state.tablename;
        const headers = [["StudentId", "StudentName","University","Course","Fees"]];
    
        const data = this.state.students.map(elt=> [elt.StudentId, elt.StudentName,elt.University,elt.Course,elt.Fees]);
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        if(this.state.tablename!==''){
            doc.save(this.state.tablename+".pdf")
        }else{
            doc.save("Report.pdf")
        }
            alert("Download Report")
      }
    

    render() {
        const Mystyle={
            fontStyle:this.state.FontStyle,
            fontWeight:this.state.FontWeight,
            fontFamily:this.state.Font
        };
 
        return (
            <div className="container">
               <div className="form-group row " >
                    <div className="form-group" style={{paddingRight:30}}>
                        <label>Font</label>
                        <SelectComponent name="Font" data={this.state.Font} selectedValue={this.getFont.bind(this)} value={this.state.Font} dataSource={this.state.Fonts}></SelectComponent>
                    </div>
                    <div className="form-group" style={{paddingRight:30}}>
                        <label>FontStyle</label>
                        <SelectComponent name="FontStyle" data={this.state.FontStyle} selectedValue={this.getFontStyle.bind(this)} value={this.state.FontStyle} dataSource={this.state.FontStyles}></SelectComponent>
                    </div>
                    <div className="form-group">
                        <label>Font Weight</label>
                        <SelectComponent name="FontWeight" data={this.state.FontWeight} selectedValue={this.getFontWeight.bind(this)} dataSource={this.state.FontWeights}></SelectComponent>
                    </div>
                </div>
                <hr/>
                <div className="form-group" style={{width:200}}>
                    <label><strong>Table Name</strong></label>
                    <input type="text" value={this.state.tablename} name="tablename"placeholder="Enter Tablename" onChange={this.handleInputs.bind(this)} className="form-control" />
                </div>
                <div>
                    <ReactTable data={this.state.students} columns={this.getColumns()} defaultPageSize={5} className="-bordered -striped -highlight" style={Mystyle}/>
                </div>
                <div>
                    <button className="btn btn-primary " onClick={() => this.exportPDF() }><i className='far fa-file-pdf'></i> Download</button>
                </div>
            </div>
        );
    }
}
export default ReportViewerComponent;
