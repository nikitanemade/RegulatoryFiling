import React, { Component, Fragment } from 'react';
import ApiDataQ26 from '../../data/api-response_q26.json';
import ApiDataQ42 from '../../data/api-response_q42.json';

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
      data1: [],
      data2: [],
      data3: []
    }
  }

  componentDidMount() {
    debugger;
    this.setState({
      data: ApiDataQ26.AssetClass1[0],
      data1: ApiDataQ26.AssetClass2[0],

      data2: ApiDataQ42.AssetClass1[0],
      data3: ApiDataQ42.AssetClass2[0],
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
            <table id="q26" className="table">
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
            <table id="q42" className="table">
              <thead>
                <tr>
                  <th colSpan="4" align="left">FUND : {this.state.data.RT_ChildFundCode}<br></br> Date : {this.state.data.BusinessDate}</th>
                  <th>FORM PF FILING</th>
                </tr>
                <tr>
                  <th colSpan="5" align="center">Q42 Scenarios (Stress Tests)</th>
                </tr>
                <tr>
                  <th colSpan="3" align="left">Market factor-<br/>Changes in market factor</th>
                  <th align="left">Effect on long components of<br/>portfolio (as % of NAV)</th>
                  <th align="left">Effect on short components of<br/>portfolio (as % of NAV)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="5" align="left">Equity prices:</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Equity prices increase 5%</td>
                  <td>{this.state.data2.lng_equityPriceincrease5per == null ? 'NA' : this.state.data2.lng_equityPriceincrease5per + ' %'}</td>
                  <td>{this.state.data2.shrt_equityPriceincrease5per == null ? 'NA' : this.state.data2.shrt_equityPriceincrease5per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Equity prices decrease 5%</td>
                  <td>{this.state.data2.lng_equityPricedecrease5per == null ? 'NA' : this.state.data2.lng_equityPricedecrease5per + ' %'}</td>
                  <td>{this.state.data2.shrt_equityPricedecrease5per == null ? 'NA' : this.state.data2.shrt_equityPricedecrease5per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Equity prices increase 20%</td>
                  <td>{this.state.data2.lng_equityPriceincrease20per == null ? 'NA' : this.state.data2.lng_equityPriceincrease20per + ' %'}</td>
                  <td>{this.state.data2.shrt_equityPriceincrease20per == null ? 'NA' : this.state.data2.shrt_equityPriceincrease20per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Equity prices decrease 20%</td>
                  <td>{this.state.data2.lng_equityPricedecrease20per == null ? 'NA' : this.state.data2.lng_equityPricedecrease20per + ' %'}</td>
                  <td>{this.state.data2.shrt_equityPricedecrease20per == null ? 'NA' : this.state.data2.shrt_equityPricedecrease20per + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Risk free interest rates</th>
                </tr>
                <tr>
                  <th colSpan="5" align="left">(parallel shift in the yield curve):</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Risk free interest rates increase 25bp</td>
                  <td>{this.state.data2.lng_Riskfreeintincrease25bp == null ? 'NA' : this.state.data2.lng_Riskfreeintincrease25bp + ' %'}</td>
                  <td>{this.state.data2.shrt_Riskfreeintincrease25bp == null ? 'NA' : this.state.data2.shrt_Riskfreeintincrease25bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Risk free interest rates decrease 25bp</td>
                  <td>{this.state.data2.lng_Riskfreeintdecrease25bp == null ? 'NA' : this.state.data2.lng_Riskfreeintdecrease25bp + ' %'}</td>
                  <td>{this.state.data2.shrt_Riskfreeintdecrease25bp == null ? 'NA' : this.state.data2.shrt_Riskfreeintdecrease25bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Risk free interest rates increase 75bp</td>
                  <td>{this.state.data2.lng_Riskfreeintincrease75bp == null ? 'NA' : this.state.data2.lng_Riskfreeintincrease75bp + ' %'}</td>
                  <td>{this.state.data2.shrt_Riskfreeintincrease75bp == null ? 'NA' : this.state.data2.shrt_Riskfreeintincrease75bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Risk free interest rates decrease 75bp</td>
                  <td>{this.state.data2.lng_Riskfreeintdecrease75bp == null ? 'NA' : this.state.data2.lng_Riskfreeintdecrease75bp + ' %'}</td>
                  <td>{this.state.data2.shrt_Riskfreeintdecrease75bp == null ? 'NA' : this.state.data2.shrt_Riskfreeintdecrease75bp + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Credit spreads:</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Credit Spreads increase 50bp</td>
                  <td>{this.state.data2.lng_creditspreadsincrease50bp == null ? 'NA' : this.state.data2.lng_creditspreadsincrease50bp + ' %'}</td>
                  <td>{this.state.data2.shrt_creditspreadsincrease50bp == null ? 'NA' : this.state.data2.shrt_creditspreadsincrease50bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Credit Spreads decrease 50bp</td>
                  <td>{this.state.data2.lng_creditspreadsdecrease50bp == null ? 'NA' : this.state.data2.lng_creditspreadsdecrease50bp + ' %'}</td>
                  <td>{this.state.data2.shrt_creditspreadsdecrease50bp == null ? 'NA' : this.state.data2.shrt_creditspreadsdecrease50bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Credit Spreads increase 250bp</td>
                  <td>{this.state.data2.lng_creditspreadsincrease250bp == null ? 'NA' : this.state.data2.lng_creditspreadsincrease250bp + ' %'}</td>
                  <td>{this.state.data2.shrt_creditspreadsincrease250bp == null ? 'NA' : this.state.data2.shrt_creditspreadsincrease250bp + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Credit Spreads decrease 250bp</td>
                  <td>{this.state.data2.lng_creditspreadsdecrease250bp == null ? 'NA' : this.state.data2.lng_creditspreadsdecrease250bp + ' %'}</td>
                  <td>{this.state.data2.shrt_creditspreadsdecrease250bp == null ? 'NA' : this.state.data2.shrt_creditspreadsdecrease250bp + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Currency rates:</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Currency rates increase 5%</td>
                  <td>{this.state.data2.lng_currencyratesincrease5per == null ? 'NA' : this.state.data2.lng_currencyratesincrease5per + ' %'}</td>
                  <td>{this.state.data2.shrt_currencyratesincrease5per == null ? 'NA' : this.state.data2.shrt_currencyratesincrease5per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Currency rates decrease 5%</td>
                  <td>{this.state.data2.lng_currencyratesdecrease5per == null ? 'NA' : this.state.data2.lng_currencyratesdecrease5per + ' %'}</td>
                  <td>{this.state.data2.shrt_currencyratesdecrease5per == null ? 'NA' : this.state.data2.shrt_currencyratesdecrease5per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Currency rates increase 20%</td>
                  <td>{this.state.data2.lng_currencyratesincrease20per == null ? 'NA' : this.state.data2.lng_currencyratesincrease20per + ' %'}</td>
                  <td>{this.state.data2.shrt_currencyratesincrease20per == null ? 'NA' : this.state.data2.shrt_currencyratesincrease20per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Currency rates decrease 20%</td>
                  <td>{this.state.data2.lng_currencyratesdecrease20per == null ? 'NA' : this.state.data2.lng_currencyratesdecrease20per + ' %'}</td>
                  <td>{this.state.data2.shrt_currencyratesdecrease20per == null ? 'NA' : this.state.data2.shrt_currencyratesdecrease20per + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Commodity prices:</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Commodity prices increase 10%</td>
                  <td>{this.state.data3.lng_commpricesincrease10per == null ? 'NA' : this.state.data3.lng_commpricesincrease10per + ' %'}</td>
                  <td>{this.state.data3.shrt_commpricesincrease10per == null ? 'NA' : this.state.data3.shrt_commpricesincrease10per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Commodity prices decrease 10%</td>
                  <td>{this.state.data3.lng_commpricesdecrease10per == null ? 'NA' : this.state.data3.lng_commpricesdecrease10per + ' %'}</td>
                  <td>{this.state.data3.shrt_commpricesdecrease10per == null ? 'NA' : this.state.data3.shrt_commpricesdecrease10per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Commodity prices increase 40%</td>
                  <td>{this.state.data3.lng_commpricesincrease40per == null ? 'NA' : this.state.data3.lng_commpricesincrease40per + ' %'}</td>
                  <td>{this.state.data3.shrt_commpricesincrease40per == null ? 'NA' : this.state.data3.shrt_commpricesincrease40per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Commodity prices decrease 40%</td>
                  <td>{this.state.data3.lng_commpricesdecrease40per == null ? 'NA' : this.state.data3.lng_commpricesdecrease40per + ' %'}</td>
                  <td>{this.state.data3.shrt_commpricesdecrease40per == null ? 'NA' : this.state.data3.shrt_commpricesdecrease40per + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Option implied volatilities:</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Implied volatilities increase 4 percentage points</td>
                  <td>{this.state.data3.lng_optImplincrease4per == null ? 'NA' : this.state.data3.lng_optImplincrease4per + ' %'}</td>
                  <td>{this.state.data3.shrt_optImplincrease4per == null ? 'NA' : this.state.data3.shrt_optImplincrease4per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Implied volatilities decrease 4 percentage points</td>
                  <td>{this.state.data3.lng_optImpldecrease4per == null ? 'NA' : this.state.data3.lng_optImpldecrease4per + ' %'}</td>
                  <td>{this.state.data3.shrt_optImpldecrease4per == null ? 'NA' : this.state.data3.shrt_optImpldecrease4per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Implied volatilities increase 10 percentage points</td>
                  <td>{this.state.data3.lng_optImplincrease10per == null ? 'NA' : this.state.data3.lng_optImplincrease10per + ' %'}</td>
                  <td>{this.state.data3.shrt_optImplincrease10per == null ? 'NA' : this.state.data3.shrt_optImplincrease10per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Implied volatilities decrease 10 percentage points</td>
                  <td>{this.state.data3.lng_optImpldecrease10per == null ? 'NA' : this.state.data3.lng_optImpldecrease10per + ' %'}</td>
                  <td>{this.state.data3.shrt_optImpldecrease10per == null ? 'NA' : this.state.data3.shrt_optImpldecrease10per + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Default rates(ABS):</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates increase 1 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesincrease1per == null ? 'NA' : this.state.data3.lng_defaultratesincrease1per + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesincrease1per == null ? 'NA' : this.state.data3.shrt_defaultratesincrease1per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates decrease 1 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesdecrease1per == null ? 'NA' : this.state.data3.lng_defaultratesdecrease1per + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesdecrease1per == null ? 'NA' : this.state.data3.shrt_defaultratesdecrease1per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates increase 5 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesincrease5per == null ? 'NA' : this.state.data3.lng_defaultratesincrease5per + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesincrease5per == null ? 'NA' : this.state.data3.shrt_defaultratesincrease5per + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates decrease 5 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesdecrease5per == null ? 'NA' : this.state.data3.lng_defaultratesdecrease5per + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesdecrease5per == null ? 'NA' : this.state.data3.shrt_defaultratesdecrease5per + ' %'}</td>
                </tr>
                <tr>
                  <th colSpan="5" align="left">Default rates (corporate bonds and CDS):</th>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates increase 1 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesincrease1perCBCDS == null ? 'NA' : this.state.data3.lng_defaultratesincrease1perCBCDS + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesincrease1perCBCDS == null ? 'NA' : this.state.data3.shrt_defaultratesincrease1perCBCDS + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates decrease 1 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesdecrease1perCBCDS == null ? 'NA' : this.state.data3.lng_defaultratesdecrease1perCBCDS + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesdecrease1perCBCDS == null ? 'NA' : this.state.data3.shrt_defaultratesdecrease1perCBCDS + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates increase 5 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesincrease5perCBCDS == null ? 'NA' : this.state.data3.lng_defaultratesincrease5perCBCDS + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesincrease5perCBCDS == null ? 'NA' : this.state.data3.shrt_defaultratesincrease5perCBCDS + ' %'}</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textIndent: '50px' }}>Default rates decrease 5 percentage point</td>
                  <td>{this.state.data3.lng_defaultratesdecrease5perCBCDS == null ? 'NA' : this.state.data3.lng_defaultratesdecrease5perCBCDS + ' %'}</td>
                  <td>{this.state.data3.shrt_defaultratesdecrease5perCBCDS == null ? 'NA' : this.state.data3.shrt_defaultratesdecrease5perCBCDS + ' %'}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <ReactHTMLTableToExcel
                className="btn btn-info"
                table="q26"
                filename="Form PF Q26 - Export"
                sheet="Q26"
                buttonText="Export Q26" />
            </div>
            <div>
              <ReactHTMLTableToExcel
                className="btn btn-info"
                table="q42"
                filename="Form PF Q42 - Export"
                sheet="Q42"
                buttonText="Export Q42" />
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default DashboardDefault 
