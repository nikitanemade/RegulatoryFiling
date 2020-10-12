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
    // debugger;
    // this.setState({
    //   data: ApiData.AssetClass1[0]
    // });
    //var data2 = require('../data/api-response.json');

    fetch('http://10.247.6.91:8001/rf/operaformpf/?businessdate=2020-06-30&fundcode=MainFund&clientname=TestClient')
    .then(res => res.json())
    .then(resData =>{
      this.setState({
        data : resData.AssetClass1[0]
      }); 
    })

    console.log(this.state.data);
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
                  <th colSpan="5" align="left" align="center">Q26. Exp by Asset Class (Long/Short)</th>
                </tr>
                <tr>
                  <th colSpan="3" align="left">Asset Class</th>
                  <th align="left">LONG</th>
                  <th align="left">SHORT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="5" align="left">Listed equity</th>
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
                  <th colSpan="5" align="left">Unlisted equity</th>
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
                <tr>
                  <th colSpan="5" align="left">Listed equity derivatives</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Related to financial institutions</td>
                  <td>{this.state.data.Lng_LED_FIN_INST == null ? 'NA' : this.state.data.Lng_LED_FIN_INST}</td>
                  <td>{this.state.data.Shrt_LED_FIN_INST == null ? 'NA' : this.state.data.Shrt_LED_FIN_INST}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other listed equity derivatives</td>
                  <td>{this.state.data.Lng_LED_OTH_LE == null ? 'NA' : this.state.data.Lng_LED_OTH_LE}</td>
                  <td>{this.state.data.Shrt_LED_OTH_LE == null ? 'NA' : this.state.data.Shrt_LED_OTH_LE}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Derivative exposures to unlisted equities</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Related to financial institutions</td>
                  <td>{this.state.data.Lng_DULE_FIN_INST == null ? 'NA' : this.state.data.Lng_DULE_FIN_INST}</td>
                  <td>{this.state.data.Shrt_DULE_FIN_INST == null ? 'NA' : this.state.data.Shrt_DULE_FIN_INST}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other listed equity derivatives</td>
                  <td>{this.state.data.Lng_DULE_OTH_LE == null ? 'NA' : this.state.data.Lng_DULE_OTH_LE}</td>
                  <td>{this.state.data.Shrt_DULE_OTH_LE == null ? 'NA' : this.state.data.Shrt_DULE_OTH_LE}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Corporate bonds issued by financial</th>
                </tr>
                <tr>
                  <th colSpan="5" align="left">institutions (other than convertible bonds)</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Invesment grade</td>
                  <td>{this.state.data.Lng_CorpBnd_FI_Invest_grde == null ? 'NA' : this.state.data.Lng_CorpBnd_FI_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CorpBnd_FI_Invest_grde == null ? 'NA' : this.state.data.Shrt_CorpBnd_FI_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CorpBnd_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CorpBnd_FI_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CorpBnd_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CorpBnd_FI_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Non-Investment grade</td>
                  <td>{this.state.data.Lng_CorpBnd_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Lng_CorpBnd_FI_Non_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CorpBnd_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Shrt_CorpBnd_FI_Non_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CorpBnd_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CorpBnd_FI_Non_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CorpBnd_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CorpBnd_FI_Non_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Corporate bonds not issued by financial</th>
                </tr>
                <tr>
                  <th colSpan="5" align="left">institutions (other than convertible bonds)</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Invesment grade</td>
                  <td>{this.state.data.Lng_CorpBnd_Non_FI_Invest_grde == null ? 'NA' : this.state.data.Lng_CorpBnd_Non_FI_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CorpBnd_Non_FI_Invest_grde == null ? 'NA' : this.state.data.Shrt_CorpBnd_Non_FI_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CorpBnd_Non_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CorpBnd_Non_FI_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CorpBnd_Non_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CorpBnd_Non_FI_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Non-Investment grade</td>
                  <td>{this.state.data.Lng_CorpBnd_Non_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Lng_CorpBnd_Non_FI_Non_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CorpBnd_Non_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Shrt_CorpBnd_Non_FI_Non_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CorpBnd_Non_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CorpBnd_Non_FI_Non_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CorpBnd_Non_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CorpBnd_Non_FI_Non_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Convertible bonds issued by financial institutions</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Invesment grade</td>
                  <td>{this.state.data.Lng_CnvrtBnd_FI_Invest_grde == null ? 'NA' : this.state.data.Lng_CnvrtBnd_FI_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_FI_Invest_grde == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_FI_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CnvrtBnd_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CnvrtBnd_FI_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_FI_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Non-Investment grade</td>
                  <td>{this.state.data.Lng_CnvrtBnd_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Lng_CnvrtBnd_FI_Non_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_FI_Non_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CnvrtBnd_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CnvrtBnd_FI_Non_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_FI_Non_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Convertible bonds not issued by financial institutions</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Invesment grade</td>
                  <td>{this.state.data.Lng_CnvrtBnd_Non_FI_Invest_grde == null ? 'NA' : this.state.data.Lng_CnvrtBnd_Non_FI_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_Non_FI_Invest_grde == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_Non_FI_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CnvrtBnd_Non_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CnvrtBnd_Non_FI_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_Non_FI_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_Non_FI_Invest_grde_duration}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Non-Investment grade</td>
                  <td>{this.state.data.Lng_CnvrtBnd_Non_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Lng_CnvrtBnd_Non_FI_Non_Invest_grde}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_Non_FI_Non_Invest_grde == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_Non_FI_Non_Invest_grde}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.Lng_CnvrtBnd_Non_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Lng_CnvrtBnd_Non_FI_Non_Invest_grde_duration}</td>
                  <td>{this.state.data.Shrt_CnvrtBnd_Non_FI_Non_Invest_grde_duration == null ? 'NA' : this.state.data.Shrt_CnvrtBnd_Non_FI_Non_Invest_grde_duration}</td>
                </tr>

              {/* ------------------------------------------------- */}

               
                <tr>
                  <th colSpan="5" align="left">Sovereign bonds and municipal bonds</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>US treasury securities</td>
                  <td>{this.state.data.lng_SB_US_treasury == null ? 'NA' : this.state.data.lng_SB_US_treasury}</td>
                  <td>{this.state.data.shrt_SB_US_treasury == null ? 'NA' : this.state.data.shrt_SB_US_treasury}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data.lng_SB_US_treasury_dur == null ? 'NA' : this.state.data.lng_SB_US_treasury_dur}</td>
                  <td>{this.state.data.shrt_SB_US_treasury_dur == null ? 'NA' : this.state.data.shrt_SB_US_treasury_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Agency Securities</td>
                  <td>{this.state.data.lng_SB_Agency == null ? 'NA' : this.state.data.lng_SB_Agency}</td>
                  <td>{this.state.data.shrt_SB_Agency == null ? 'NA' : this.state.data.shrt_SB_Agency}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data.lng_SB_Agency_dur == null ? 'NA' : this.state.data.lng_SB_Agency_dur}</td>
                  <td>{this.state.data.shrt_SB_Agency_dur == null ? 'NA' : this.state.data.shrt_SB_Agency_dur}</td>
                </tr> 
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>GSE bonds</td>
                  <td>{this.state.data.lng_SB_GSE == null ? 'NA' : this.state.data.lng_SB_GSE}</td>
                  <td>{this.state.data.shrt_SB_GSE == null ? 'NA' : this.state.data.shrt_SB_GSE}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data.lng_SB_GSE_dur == null ? 'NA' : this.state.data.lng_SB_GSE_dur}</td>
                  <td>{this.state.data.shrt_SB_GSE_dur == null ? 'NA' : this.state.data.shrt_SB_GSE_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Sovereign bonds issued by G10 countries other than the US </td>
                  <td>{this.state.data.lng_SB_G10 == null ? 'NA' : this.state.data.lng_SB_G10}</td>
                  <td>{this.state.data.shrt_SB_G10 == null ? 'NA' : this.state.data.shrt_SB_G10}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.lng_SB_G10_dur == null ? 'NA' : this.state.data.lng_SB_G10_dur}</td>
                  <td>{this.state.data.shrt_SB_G10_dur == null ? 'NA' : this.state.data.shrt_SB_G10_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other sovereign bonds (including supranational bonds)</td>
                  <td>{this.state.data.lng_SB_OthSB == null ? 'NA' : this.state.data.lng_SB_OthSB}</td>
                  <td>{this.state.data.shrt_SB_OthSB == null ? 'NA' : this.state.data.shrt_SB_OthSB}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.lng_SB_OthSB_dur == null ? 'NA' : this.state.data.lng_SB_OthSB_dur}</td>
                  <td>{this.state.data.shrt_SB_OthSB_dur == null ? 'NA' : this.state.data.shrt_SB_OthSB_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>US state and local bonds</td>
                  <td>{this.state.data.lng_SB_US_LB == null ? 'NA' : this.state.data.lng_SB_US_LB}</td>
                  <td>{this.state.data.shrt_SB_US_LB == null ? 'NA' : this.state.data.shrt_SB_US_LB}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}> Duration</td>
                  <td>{this.state.data.lng_SB_US_LB_dur == null ? 'NA' : this.state.data.lng_SB_US_LB_dur}</td>
                  <td>{this.state.data.shrt_SB_US_LB_dur == null ? 'NA' : this.state.data.shrt_SB_US_LB_dur}</td>
                </tr>  
              </tbody>
            </table>
            <div>
              <ReactHTMLTableToExcel
                className="btn btn-info"
                table="emp"
                filename="Form PF - Export"
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
