import React, { Component, Fragment } from 'react';
import ApiData from '../../data/api-response.json';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export class DashboardDefault extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    debugger;
    this.setState({
      data: ApiData.AssetClass1[0]
    });
    //var data2 = require('../data/api-response.json');

    // fetch('../api_response.json')
    // .then(res => res.json())
    // .then(resData =>{
    //   this.setState({
    //     data : resData
    //   }); 
    // })

    //console.log(data);
  }

  render() {
    if (this.state.data != null) {
      debugger;
      return (
        <Fragment>
          <PageTitle
            titleHeading="FORM PF FILING"
          // titleDescription="This is a dashboard page example built using this template."
          />
          <div>
            <table id="emp" className="table">
              <thead>
                <tr>
                  <th colSpan="4" align="left">FUND : {this.state.data.RT_ChildFundCode}<br></br> Date : {this.state.data.BusinessDate}</th>
                  <th>FORM PF FILING</th>
                </tr>
                <tr>
                  <th colSpan="5" align="center">Q26. Exp by Asset Class (Long/Short)</th>
                </tr>
                <tr>
                  <th colSpan="3" align="left">Asset Class</th>
                  <th align="left">LONG</th>
                  <th align="left">SHORT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="5">Listed equity</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Issued by Financial institutions</td>
                  <td>{this.state.data.Lng_LE_FIN_INST == null ? 'NA' : this.state.data.Lng_LE_FIN_INST}</td>
                  <td>{this.state.data.Shrt_LE_FIN_INST == null ? 'NA' : this.state.data.Shrt_LE_FIN_INST}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>other listed equity</td>
                  <td>{this.state.data.Lng_LE_OTH_LE == null ? 'NA' : this.state.data.Lng_LE_OTH_LE}</td>
                  <td>{this.state.data.Shrt_LE_OTH_LE == null ? 'NA' : this.state.data.Shrt_LE_OTH_LE}</td>
                </tr>
                <tr>
                  <th colSpan="5">Unlisted equity</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Issued by Financial institutions</td>
                  <td>{this.state.data.Lng_ULE_FIN_INST == null ? 'NA' : this.state.data.Lng_ULE_FIN_INST}</td>
                  <td>{this.state.data.Shrt_ULE_FIN_INST == null ? 'NA' : this.state.data.Shrt_ULE_FIN_INST}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>other unlisted equity</td>
                  <td>{this.state.data.Lng_ULE_OTH_LE == null ? 'NA' : this.state.data.Lng_ULE_OTH_LE}</td>
                  <td>{this.state.data.Shrt_ULE_OTH_LE == null ? 'NA' : this.state.data.Shrt_ULE_OTH_LE}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <ReactHTMLTableToExcel
                className="btn btn-info"
                table="emp"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText="Export excel" />
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default DashboardDefault 
