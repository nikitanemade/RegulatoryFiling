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
      data: [],
      data1: []
    }
  }

  componentDidMount() {
    debugger;
    this.setState({
      data: ApiData.AssetClass1[0],
      data1: ApiData.AssetClass2[0]
    });
    //var data2 = require('../data/api-response.json');

    // fetch('http://10.247.4.67:8001/rf/operaformpf/?businessdate=2020-06-30&fundcode=MainFund&clientname=TestClient')
    // .then(res => res.json())
    // .then(resData =>{
    //   this.setState({
    //     data : resData.AssetClass1[0]
    //   }); 
    // })

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

{/* ------------------------------------------------- */}
                <tr>
                  <th colSpan="5" align="left">Loans</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Leveraged loans</td>
                  <td>{this.state.data1.lng_leveragedLoans == null ? 'NA' : this.state.data1.lng_leveragedLoans}</td>
                  <td>{this.state.data1.shrt_leveragedLoans == null ? 'NA' : this.state.data1.shrt_leveragedLoans}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_leveragedLoans_dur == null ? 'NA' : this.state.data1.lng_leveragedLoans_dur}</td>
                  <td>{this.state.data1.shrt_leveragedLoans_dur == null ? 'NA' : this.state.data1.shrt_leveragedLoans_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other Loans (not including repos)</td>
                  <td>{this.state.data1.lng_Loans_OthLoans == null ? 'NA' : this.state.data1.lng_Loans_OthLoans}</td>
                  <td>{this.state.data1.shrt_Loans_OthLoans == null ? 'NA' : this.state.data1.shrt_Loans_OthLoans}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_Loans_OthLoans_dur == null ? 'NA' : this.state.data1.lng_Loans_OthLoans_dur}</td>
                  <td>{this.state.data1.shrt_Loans_OthLoans_dur == null ? 'NA' : this.state.data1.shrt_Loans_OthLoans_dur}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Repos</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_Repos_dur == null ? 'NA' : this.state.data1.lng_Repos_dur}</td>
                  <td>{this.state.data1.shrt_Repos_dur == null ? 'NA' : this.state.data1.shrt_Repos_dur}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">ABS/Structured Products</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>MBS</td>
                  <td>{this.state.data1.lng_ABS_MBS == null ? 'NA' : this.state.data1.lng_ABS_MBS}</td>
                  <td>{this.state.data1.shrt_ABS_MBS == null ? 'NA' : this.state.data1.shrt_ABS_MBS}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_ABS_MBS_dur == null ? 'NA' : this.state.data1.lng_ABS_MBS_dur}</td>
                  <td>{this.state.data1.shrt_ABS_MBS_dur == null ? 'NA' : this.state.data1.shrt_ABS_MBS_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>ABCP</td>
                  <td>{this.state.data1.lng_ABS_ABCP == null ? 'NA' : this.state.data1.lng_ABS_ABCP}</td>
                  <td>{this.state.data1.shrt_ABS_ABCP == null ? 'NA' : this.state.data1.shrt_ABS_ABCP}</td>
                </tr> 
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_ABS_ABCP_dur == null ? 'NA' : this.state.data1.lng_ABS_ABCP_dur}</td>
                  <td>{this.state.data1.shrt_ABS_ABCP_dur == null ? 'NA' : this.state.data1.shrt_ABS_ABCP_dur}</td>
                </tr>  
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>CDO/CLO</td>
                  <td>{this.state.data1.lng_ABS_CDO == null ? 'NA' : this.state.data1.lng_ABS_CDO}</td>
                  <td>{this.state.data1.shrt_ABS_CDO == null ? 'NA' : this.state.data1.shrt_ABS_CDO}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_ABS_CDO_dur == null ? 'NA' : this.state.data1.lng_ABS_CDO_dur}</td>
                  <td>{this.state.data1.shrt_ABS_CDO_dur == null ? 'NA' : this.state.data1.shrt_ABS_CDO_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other ABS</td>
                  <td>{this.state.data1.lng_ABS_OthABS == null ? 'NA' : this.state.data1.lng_ABS_OthABS}</td>
                  <td>{this.state.data1.shrt_ABS_OthABS == null ? 'NA' : this.state.data1.shrt_ABS_OthABS}</td>
                </tr> 
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_ABS_OthABS_dur == null ? 'NA' : this.state.data1.lng_ABS_OthABS_dur}</td>
                  <td>{this.state.data1.shrt_ABS_OthABS_dur == null ? 'NA' : this.state.data1.shrt_ABS_OthABS_dur}</td>
                </tr>   
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other Structured products</td>
                  <td>{this.state.data1.lng_ABS_OthStruct == null ? 'NA' : this.state.data1.lng_ABS_OthStruct}</td>
                  <td>{this.state.data1.shrt_ABS_OthStruct == null ? 'NA' : this.state.data1.shrt_ABS_OthStruct}</td>
                </tr> 
                <tr>
                  <th colSpan="5" align="left">Credit derivatives</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Single name CDS</td>
                  <td>{this.state.data1.lng_CD_CDS == null ? 'NA' : this.state.data1.lng_CD_CDS}</td>
                  <td>{this.state.data1.Shrt_CD_CDS == null ? 'NA' : this.state.data1.Shrt_CD_CDS}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Index CDS</td>
                  <td>{this.state.data1.lng_CD_IndexCDS == null ? 'NA' : this.state.data1.lng_CD_IndexCDS}</td>
                  <td>{this.state.data1.shrt_CD_IndexCDS == null ? 'NA' : this.state.data1.shrt_CD_IndexCDS}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Exotic CDS</td>
                  <td>{this.state.data1.lng_CD_ExoticCDS == null ? 'NA' : this.state.data1.lng_CD_ExoticCDS}</td>
                  <td>{this.state.data1.shrt_CD_ExoticCDS == null ? 'NA' : this.state.data1.shrt_CD_ExoticCDS}</td>
                </tr>
                <tr>
                  <th colSpan="3">Foreign exchange derivatives (Investment)</th>
                  <td>{this.state.data1.lng_FED_INVST == null ? 'NA' : this.state.data1.lng_FED_INVST}</td>
                  <td>{this.state.data1.shrt_FED_INVST == null ? 'NA' : this.state.data1.shrt_FED_INVST}</td>
                </tr>
                <tr>
                  <th colSpan="3">Foreign exchange derivatives (hedging)</th>
                  <td>{this.state.data1.lng_FED_Hedging == null ? 'NA' : this.state.data1.lng_FED_Hedging}</td>
                  <td>{this.state.data1.shrt_FED_Hedging == null ? 'NA' : this.state.data1.shrt_FED_Hedging}</td>
                </tr>
                <tr>
                  <th colSpan="3">Non-US currency holdings</th>
                  <td>{this.state.data1.lng_non_USCurrHld == null ? 'NA' : this.state.data1.lng_non_USCurrHld}</td>
                  <td>{this.state.data1.shrt_non_USCurrHld == null ? 'NA' : this.state.data1.shrt_non_USCurrHld}</td>
                </tr>
                <tr>
                  <th colSpan="3">Interest rate derivatives</th>
                  <td>{this.state.data1.lng_IRD == null ? 'NA' : this.state.data1.lng_IRD}</td>
                  <td>{this.state.data1.shrt_IRD == null ? 'NA' : this.state.data1.shrt_IRD}</td>
                </tr>  
                <tr>
                  <th colSpan="5" align="left">Commodities (derivatives)</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Crude oil</td>
                  <td>{this.state.data1.lng_Comm_Crudeoil == null ? 'NA' : this.state.data1.lng_Comm_Crudeoil}</td>
                  <td>{this.state.data1.shrt_Comm_Crudeoil == null ? 'NA' : this.state.data1.shrt_Comm_Crudeoil}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Natural gas</td>
                  <td>{this.state.data1.lng_Comm_NatGas == null ? 'NA' : this.state.data1.lng_Comm_NatGas}</td>
                  <td>{this.state.data1.shrt_Comm_NatGas == null ? 'NA' : this.state.data1.shrt_Comm_NatGas}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Gold</td>
                  <td>{this.state.data1.lng_Comm_Gold == null ? 'NA' : this.state.data1.lng_Comm_Gold}</td>
                  <td>{this.state.data1.shrt_Comm_Gold == null ? 'NA' : this.state.data1.shrt_Comm_Gold}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Power</td>
                  <td>{this.state.data1.lng_Comm_Power == null ? 'NA' : this.state.data1.lng_Comm_Power}</td>
                  <td>{this.state.data1.shrt_Comm_Power == null ? 'NA' : this.state.data1.shrt_Comm_Power}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other Commodities</td>
                  <td>{this.state.data1.lng_Comm_OthComm == null ? 'NA' : this.state.data1.lng_Comm_OthComm}</td>
                  <td>{this.state.data1.shrt_Comm_OthComm == null ? 'NA' : this.state.data1.shrt_Comm_OthComm}</td>
                </tr>  
                <tr>
                  <th colSpan="5" align="left">Commodities (physical)</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Crude oil</td>
                  <td>{this.state.data1.lng_Comm_phy_Crudeoil == null ? 'NA' : this.state.data1.lng_Comm_phy_Crudeoil}</td>
                  <td>{this.state.data1.shrt_Comm_phy_Crudeoil == null ? 'NA' : this.state.data1.shrt_Comm_phy_Crudeoil}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Natural gas</td>
                  <td>{this.state.data1.lng_Comm_phy_NatGas == null ? 'NA' : this.state.data1.lng_Comm_phy_NatGas}</td>
                  <td>{this.state.data1.shrt_Comm_phy_NatGas == null ? 'NA' : this.state.data1.shrt_Comm_phy_NatGas}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Gold</td>
                  <td>{this.state.data1.lng_Comm_phy_Gold == null ? 'NA' : this.state.data1.lng_Comm_phy_Gold}</td>
                  <td>{this.state.data1.shrt_Comm_phy_Gold == null ? 'NA' : this.state.data1.shrt_Comm_phy_Gold}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Power</td>
                  <td>{this.state.data1.lng_Comm_phy_Power == null ? 'NA' : this.state.data1.lng_Comm_phy_Power}</td>
                  <td>{this.state.data1.shrt_Comm_phy_Power == null ? 'NA' : this.state.data1.shrt_Comm_phy_Power}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other Commodities</td>
                  <td>{this.state.data1.lng_Comm_phy_OthComm == null ? 'NA' : this.state.data1.lng_Comm_phy_OthComm}</td>
                  <td>{this.state.data1.shrt_Comm_phy_OthComm == null ? 'NA' : this.state.data1.shrt_Comm_phy_OthComm}</td>
                </tr>
                <tr>
                  <th colSpan="3">Other derivatives</th>
                  <td>{this.state.data1.lng_OthDeri == null ? 'NA' : this.state.data1.lng_OthDeri}</td>
                  <td>{this.state.data1.shrt_OthDeri == null ? 'NA' : this.state.data1.shrt_OthDeri}</td>
                </tr> 
                <tr>
                  <th colSpan="3">Physical real estate</th>
                  <td>{this.state.data1.lng_PhyRealEstate == null ? 'NA' : this.state.data1.lng_PhyRealEstate}</td>
                  <td>{this.state.data1.shrt_PhyRealEstate == null ? 'NA' : this.state.data1.shrt_PhyRealEstate}</td>
                </tr> 
                <tr>
                  <th colSpan="3">Investments in internal private funds</th>
                  <td>{this.state.data1.lng_invstInt_funds == null ? 'NA' : this.state.data1.lng_invstInt_funds}</td>
                  <td>{this.state.data1.shrt_invstInt_funds == null ? 'NA' : this.state.data1.shrt_invstInt_funds}</td>
                </tr> 
                <tr>
                  <th colSpan="3">Investments in external private funds</th>
                  <td>{this.state.data1.lng_invstext_funds == null ? 'NA' : this.state.data1.lng_invstext_funds}</td>
                  <td>{this.state.data1.shrt_invstext_funds == null ? 'NA' : this.state.data1.shrt_invstext_funds}</td>
                </tr> 
                <tr>
                  <th colSpan="3">Investments in registered investment companies</th>
                  <td>{this.state.data1.lng_invsregi_comp == null ? 'NA' : this.state.data1.lng_invsregi_comp}</td>
                  <td>{this.state.data1.shrt_invsregi_comp == null ? 'NA' : this.state.data1.shrt_invsregi_comp}</td>
                </tr>  
                <tr>
                  <th colSpan="5" align="left">Cash and cash equivalents</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Certificates of deposit</td>
                  <td>{this.state.data1.lng_Cash_CD == null ? 'NA' : this.state.data1.lng_Cash_CD}</td>
                  <td>{this.state.data1.shrt_Cash_CD == null ? 'NA' : this.state.data1.shrt_Cash_CD}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Duration</td>
                  <td>{this.state.data1.lng_Cash_CD_dur == null ? 'NA' : this.state.data1.lng_Cash_CD_dur}</td>
                  <td>{this.state.data1.shrt_Cash_CD_dur == null ? 'NA' : this.state.data1.shrt_Cash_CD_dur}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other deposits</td>
                  <td>{this.state.data1.lng_Cash_OthDeposits == null ? 'NA' : this.state.data1.lng_Cash_OthDeposits}</td>
                  <td>{this.state.data1.shrt_Cash_OthDeposits == null ? 'NA' : this.state.data1.shrt_Cash_OthDeposits}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Money market funds</td>
                  <td>{this.state.data1.lng_Cash_MMF == null ? 'NA' : this.state.data1.lng_Cash_MMF}</td>
                  <td>{this.state.data1.shrt_Cash_MMF == null ? 'NA' : this.state.data1.shrt_Cash_MMF}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Other cash and cash equivalents(excluding government securities)</td>
                  <td>{this.state.data1.lng_Cash_Cashequi == null ? 'NA' : this.state.data1.lng_Cash_Cashequi}</td>
                  <td>{this.state.data1.shrt_Cash_Cashequi == null ? 'NA' : this.state.data1.shrt_Cash_Cashequi}</td>
                </tr>
                <tr>
                  <th colSpan="3">Investments in funds for cash management purposes (other than money market funds)</th>
                  <td>{this.state.data1.lng_Invst_funds == null ? 'NA' : this.state.data1.lng_Invst_funds}</td>
                  <td>{this.state.data1.shrt_Invst_funds == null ? 'NA' : this.state.data1.shrt_Invst_funds}</td>
                </tr>
                <tr>
                  <th colSpan="3">Investments in other sub-asset classes</th>
                  <td>{this.state.data1.lng_Invst_sub_asset == null ? 'NA' : this.state.data1.lng_Invst_sub_asset}</td>
                  <td>{this.state.data1.shrt_Invst_sub_asset == null ? 'NA' : this.state.data1.shrt_Invst_sub_asset}</td>
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
