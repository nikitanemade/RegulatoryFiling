import React, { Component ,Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../example-components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../example-components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../example-components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../example-components/DashboardDefault/DashboardDefaultSection4';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  

export class DashboardDefault extends Component {
  render() {
    return (
      
      <Fragment>
        <PageTitle
          titleHeading="AIFMD - Regulatory Filing"
          // titleDescription="This is a dashboard page example built using this template."
        />
        <div>  
            <table id="emp" class="table">  
              <thead> 
                <tr>  
                  <th colspan="6" align="center">AIFM-specific information to be reported</th>  
                </tr> 
                <tr>  
                  <th colspan="6" align="center">(Article 3(3)(d) and Article 24(1) of Directive 2011/61/EU)</th>  
                </tr> 
                <tr>  
                  <th colspan="1"></th>
                  <th colspan="1">Data Type</th>
                  <th colspan="4">Reported Data</th>  
                </tr>                                                 
              </thead>  
              <tbody> 
                <tr key="1">  
                    <td colspan="1"></td>  
                    <td colspan="5">AIFM - Header file</td> 
                </tr>              
                <tr key="2">  
                  <td>1</td>  
                  <td >Reporting Member State</td>  
                  <td colspan="4"></td> 
                </tr>              
                <tr key="3">  
                  <td>2</td>  
                  <td >Version</td>  
                  <td colspan="4"></td> 
                </tr>              
                <tr key="4">  
                  <td>3</td>  
                  <td >Creation date and time of file</td>  
                  <td colspan="4"></td> 
                </tr>              
                <tr key="5">  
                  <td colspan="1"></td>  
                  <td colspan="5">AIFM - Header section</td>
                </tr>
                <tr key="6">  
                  <td colspan="1">4</td>  
                  <td>Filing type</td> 
                  <td colspan="4"></td>
                </tr>              
                <tr key="7">  
                  <td>5</td>  
                  <td >AIFM content type</td>  
                  <td colspan="4"></td> 
                </tr>              
                <tr key="8">  
                  <td>6</td>  
                  <td >Reporting period start date</td>  
                  <td colspan="4">07/01/2020</td> 
                </tr>              
                <tr key="9">  
                  <td>7</td>  
                  <td >Reporting period end date</td>  
                  <td colspan="4">07/31/2020</td> 
                </tr>              
                <tr key="10">  
                  <td colspan="1">8</td>   
                  <td >Reporting period type</td>  
                  <td colspan="4">Monthly</td> 
                </tr>               
                <tr key="11">  
                  <td colspan="1">9</td>   
                  <td >Reporting period year</td>  
                  <td colspan="4">2020</td> 
                </tr>               
                <tr key="12">  
                  <td colspan="1">10</td>   
                  <td >Change in AIFM Reporting obligation frequency code</td>  
                  <td colspan="4"></td> 
                </tr>               
                <tr key="13">  
                  <td colspan="1">11</td>   
                  <td >Change in AIFM Reporting obligation content code</td>  
                  <td colspan="4"></td> 
                </tr>               
                <tr key="14">  
                  <td colspan="1">12</td>   
                  <td >Change in AIFM Reporting obligation frequency quarter</td>  
                  <td colspan="4"></td> 
                </tr>                
                <tr key="14">  
                  <td colspan="1">13</td>   
                  <td >Last reporting flag</td>  
                  <td colspan="4"></td> 
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

export default DashboardDefault 
