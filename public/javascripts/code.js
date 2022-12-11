import Highcharts from './highcharts'


// BTC DATA FETCH START
let dataBTCDate; 
let dataBTCObjProfitTotal;
let dataBTCObjProfitLogTotal;
let dataBTCAndProfitTotalArr;
let dataBTCAndProfitTotalLogArr;

fetch('../data/btc-returns.json')
.then((response) => response.json())
.then((json) => { 
  let originalData = json;
  let tempObjDate = [];
  let tempObjProfitTotal = [];
  let tempObjProfitLogTotal = [];
  let tempDateAndProfitTotalArr = []
  let tempDateAndProfitTotaLoglArr = []
  for (let val of originalData) {
    let tempDate = val.expiration_timestamp;
    let tempProfitTotal = val.total_profits;
    let tempProfitLogTotal = val.total_profits_log;

    tempObjDate.push(tempDate);
    tempObjProfitTotal.push(tempProfitTotal);
    tempObjProfitLogTotal.push(tempProfitLogTotal);
    tempDateAndProfitTotalArr.push([tempDate, tempProfitTotal])
    tempDateAndProfitTotaLoglArr.push([tempDate, tempProfitLogTotal])
  }
  return dataBTCDate = tempObjDate, dataBTCObjProfitTotal = tempObjProfitTotal, dataBTCObjProfitLogTotal = tempObjProfitLogTotal, dataBTCAndProfitTotalArr = tempDateAndProfitTotalArr, dataBTCAndProfitTotalLogArr = tempDateAndProfitTotaLoglArr;
});
// BTC DATA FETCH SEND

// ETH DATA FETCH START
let dataETHDate; 
let dataETHObjProfitTotal;
let dataETHObjProfitLogTotal;
let dataETHAndProfitTotalArr;
let dataETHAndProfitTotalLogArr;

fetch('../data/btc-returns.json')
.then((response) => response.json())
.then((json) => { 
  let originalData = json;
  let tempObjDate = [];
  let tempObjProfitTotal = [];
  let tempObjProfitLogTotal = [];
  let tempDateAndProfitTotalArr = []
  let tempDateAndProfitTotaLoglArr = []
  for (let val of originalData) {
    let tempDate = val.expiration_timestamp;
    let tempProfitTotal = val.total_profits;
    let tempProfitLogTotal = val.total_profits_log;

    tempObjDate.push(tempDate);
    tempObjProfitTotal.push(tempProfitTotal);
    tempObjProfitLogTotal.push(tempProfitLogTotal);
    tempDateAndProfitTotalArr.push([tempDate, tempProfitTotal])
    tempDateAndProfitTotaLoglArr.push([tempDate, tempProfitLogTotal])
  }
  return dataETHDate = tempObjDate, dataETHObjProfitTotal = tempObjProfitTotal, dataETHObjProfitLogTotal = tempObjProfitLogTotal, dataETHAndProfitTotalArr = tempDateAndProfitTotalArr, dataETHAndProfitTotalLogArr = tempDateAndProfitTotaLoglArr;
})
// ETH DATA FETCH END

// ======================================
// Two series on each Chart(2 charts)
// ======================================

setTimeout(() => {
  // BTC Profit 
  var chart1 = new Highcharts.Chart({
    chart: {
       renderTo: 'container1',
       type: 'line',
       borderColor: '#000000',
       borderWidth: 1
    },
    title: {
      text: 'BTC Data'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'BTC Profit'
        },
        crosshair: true,
        gridLineWidth: 0,
      },
      {
        title: {
          text: 'BTC Profit Log'
        },
        opposite: true,
        crosshair: true,
        gridLineWidth: 0,
        
      },],
    series: [{
      yAxis: 0,
      name: 'Calls BTC returns',
      data: dataBTCAndProfitTotalArr,
      visible: true,
    },{
      yAxis: 1,
      name: 'Calls BTC log returns',
      data: dataBTCAndProfitTotalLogArr,
      visible: true,
    }]
  });

  // ETH Profit
  var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container2',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'ETH Data'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'ETH Profit'
        },
        crosshair: true,
        gridLineWidth: 0,
      },
      {
        title: {
          text: 'ETH Profit Log'
        },
        opposite: true,
        crosshair: true,
        gridLineWidth: 0,
        
      },],
    series: [{
      yAxis: 0,
      name: 'Calls ETH returns',
      data: dataETHAndProfitTotalArr,
      visible: true,
    },{
      yAxis: 1,
      name: 'Calls ETH log returns',
      data: dataETHAndProfitTotalLogArr,
      visible: true,
    }]
  });
}, 5000);



// ======================================
// One series on each Chart(4 charts)
// ======================================

// setTimeout(() => {
//   // BTC Profit 
//   var chart1 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'container1',
//         type: 'line',
//         borderColor: '#000000',
//         borderWidth: 1
//     },
//     title: {
//       text: 'BTC Data(Total Profit)'
//     },
//     xAxis: {
//       type: 'category',
//       crosshair: true,
//     },
//     yAxis: [{
//         title: {
//           text: 'BTC Profit'
//         },
//         crosshair: true,
//         gridLineWidth: 0,
//     }],
//     series: [{
//       name: 'Calls BTC returns',
//       data: dataBTCAndProfitTotalArr,
//       visible: true,
//     }]
//   });

//   // BTC Profit Log
//   var chart2 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'container2',
//         type: 'line',
//         borderColor: '#000000',
//         borderWidth: 1
//     },
//     title: {
//       text: 'BTC Data(Total Profit Log)'
//     },
//     xAxis: {
//       type: 'category',
//       crosshair: true,
//     },
//     yAxis: [{ 
//         title: {
//           text: 'BTC Profit Log'
//         },
//         crosshair: true,
//         gridLineWidth: 0,
//     }],
//     series: [{
//       name: 'Calls BTC log returns',
//       data: dataBTCAndProfitTotalLogArr,
//       visible: true,
//     }]
//   });

//   // ETH Profit
//   var chart3 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'container3',
//         type: 'line',
//         borderColor: '#000000',
//         borderWidth: 1
//     },
//     title: {
//       text: 'ETH Data(Total Profit)'
//     },
//     xAxis: {
//       type: 'category',
//       crosshair: true,
//     },
//     yAxis: [{
//         title: {
//           text: 'ETH Profit'
//         },
//         crosshair: true,
//         gridLineWidth: 0,
//     }],
//     series: [{
//       name: 'Calls ETH returns',
//       data: dataETHAndProfitTotalArr,
//       visible: true,
//     }]
//   });

//   // ETH Profit Log
//   var chart4 = new Highcharts.Chart({
//     chart: {
//         renderTo: 'container4',
//         type: 'line',
//         borderColor: '#000000',
//         borderWidth: 1
//     },
//     title: {
//       text: 'ETH Data(Total Profit Log)'
//     },
//     xAxis: {
//       type: 'category',
//       crosshair: true,
//     },
//     yAxis: [{
//         title: {
//           text: 'ETH Profit Log'
//         },
//         crosshair: true,
//         gridLineWidth: 0,
//     }],
//     series: [{
//       name: 'Calls ETH log returns',
//       data: dataETHAndProfitTotalLogArr,
//       visible: true,
//     }]
//   });
// }, 5000);



