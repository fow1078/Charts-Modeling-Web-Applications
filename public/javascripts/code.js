import Highcharts from './highcharts'
import moment from 'moment/moment';

moment().format();

// BTC CALLS DATA FETCH START

// Calls 
let dataBTCDate; 
let dataBTCObjProfitTotal;
let dataBTCAndProfitTotalArr;

fetch('../data/btc-calls_12_returns.json')
.then((response) => response.json())
.then((json) => { 
  let originalData = json;
  let tempObjDate = [];
  let tempObjProfitTotal = [];
  let tempDateAndProfitTotalArr = []
  for (let val of originalData) {
    let tempDate = val.expiration_timestamp;
    let tempProfitTotal = val.total_profits;

    tempObjDate.push(tempDate);
    tempObjProfitTotal.push(tempProfitTotal);
    tempDateAndProfitTotalArr.push([tempDate, tempProfitTotal])
  }
  return dataBTCDate = tempObjDate, dataBTCObjProfitTotal = tempObjProfitTotal, dataBTCAndProfitTotalArr = tempDateAndProfitTotalArr;
});

// Puts 
let dataBTCProfitPuts = [];

fetch('../data/btc_puts_12_returns.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    dataBTCProfitPuts.push([val.expiration_timestamp, val.total_profits])
  }
})
// BTC DATA FETCH SEND

// ETH CALLS DATA FETCH START
let dataETHDate; 
let dataETHObjProfitTotal;
let dataETHObjProfitLogTotal;
let dataETHAndProfitTotalArr;
let dataETHAndProfitTotalLogArr;

fetch('../data/returns_eth_calls_0.8.json')
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

// Puts 
let dataETHProfitPuts = [];

fetch('../data/returns_eth_puts_08.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    dataETHProfitPuts.push([val.expiration_timestamp, val.total_profits])
  }
})
// ETH DATA FETCH END

// ======================================
// ETH AND BTC DATA CHARTS 
// ======================================

setTimeout(() => {
  // BTC Profit dataBTCProfitPuts
  var chart1 = new Highcharts.Chart({
    chart: {
        renderTo: 'btcCalls',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'BTC Data Calls(Total Profit)'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'BTC Profit Calls'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [{
      name: 'Calls BTC returns',
      data: dataBTCAndProfitTotalArr,
      visible: true,
    }]
  });

  var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'btcPuts',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'BTC Data Puts(Total Profit)'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'BTC Profit Puts'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [{
      name: 'Puts BTC returns',
      data: dataBTCProfitPuts,
      visible: true,
    }]
  });

  // ETH Profit
  var chart3 = new Highcharts.Chart({
    chart: {
        renderTo: 'ethCalls',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'ETH Data Calls(Total Profit)'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'ETH Profit Calls'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [{
      name: 'Calls ETH returns',
      data: dataETHAndProfitTotalArr,
      visible: true,
    }]
  });

  var chart4 = new Highcharts.Chart({
    chart: {
        renderTo: 'ethPuts',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'ETH Data Puts(Total Profit)'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'ETH Profit Puts'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [{
      name: 'Puts ETH returns',
      data: dataETHProfitPuts,
      visible: true,
    }]
  });

}, 5000);


// ======================================
// BTC ATM7 and BTC ATM30
// ======================================

// atm7
let atm7BTCChartArr = [];
let mean7BTCChartArr = [];
let stdUpper7BTCChartArr = [];
let stdLower7BTCChartArr = [];

fetch('../data/btc_atm7.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    let tempAtm7Date = moment(val.date).format('YYYY-MM-DD');
    let tempAtm7 = val.atm7;
    let tempMean7 = val.mean7;
    let tempStdUpper7 = val.std_upper7;
    let tempStdLower7 = val.std_lower7;

    atm7BTCChartArr.push([tempAtm7Date, tempAtm7]);
    mean7BTCChartArr.push([tempAtm7Date, tempMean7]);
    stdUpper7BTCChartArr.push([tempAtm7Date, tempStdUpper7])
    stdLower7BTCChartArr.push([tempAtm7Date, tempStdLower7])
  }
})

// atm30
let atm30BTCChartArr = [];
let mean30BTCChartArr = [];
let stdUpper30BTCChartArr = [];
let stdLower30BTCChartArr = [];

fetch('../data/btc_atm30.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    let tempAtm7Date = moment(val.date).format('YYYY-MM-DD');

    atm30BTCChartArr.push([tempAtm7Date, val.atm30]);
    mean30BTCChartArr.push([tempAtm7Date, val.mean30]);
    stdUpper30BTCChartArr.push([tempAtm7Date, val.std_upper30])
    stdLower30BTCChartArr.push([tempAtm7Date, val.std_lower30])
  }
})

setTimeout(() => {
  var chart5 = new Highcharts.Chart({
    chart: {
        renderTo: 'btcAtm7',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'BTC atm7'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'BTC atm7'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [
    {
      name: 'mean7',
      data: mean7BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_upper7',
      data: stdUpper7BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_lower7',
      data: stdLower7BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'atm7',
      data: atm7BTCChartArr,
      visible: true,
      color: '#000000',
      lineWidth: 3,
    }]
  });

  var chart6 = new Highcharts.Chart({
    chart: {
        renderTo: 'btcAtm30',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'BTC atm30'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'BTC atm7'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [
    {
      name: 'mean30',
      data: mean30BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_upper30',
      data: stdUpper30BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_lower30',
      data: stdLower30BTCChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'atm30',
      data: atm30BTCChartArr,
      visible: true,
      color: '#000000',
      lineWidth: 3
    }]
  });
}, 10000);

// ======================================
// ETH ATM7 and BTC ATM30
// ======================================

// atm7
let atm7ETHChartArr = [];
let mean7ETHChartArr = [];
let stdUpper7ETHChartArr = [];
let stdLower7ETHChartArr = [];

fetch('../data/eth_atm7.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    let tempAtm7Date = moment(val.date).format('YYYY-MM-DD');
    let tempAtm7 = val.atm7;
    let tempMean7 = val.mean7;
    let tempStdUpper7 = val.std_upper7;
    let tempStdLower7 = val.std_lower7;

    atm7ETHChartArr.push([tempAtm7Date, tempAtm7]);
    mean7ETHChartArr.push([tempAtm7Date, tempMean7]);
    stdUpper7ETHChartArr.push([tempAtm7Date, tempStdUpper7])
    stdLower7ETHChartArr.push([tempAtm7Date, tempStdLower7])
  }
})

// atm30
let atm30ETHChartArr = [];
let mean30ETHChartArr = [];
let stdUpper30ETHChartArr = [];
let stdLower30ETHChartArr = [];

fetch('../data/eth_atm30.json')
.then((response) => response.json())
.then((json) => {
  let originalData = json;
  for (let val of originalData) {
    let tempAtm7Date = moment(val.date).format('YYYY-MM-DD');

    atm30ETHChartArr.push([tempAtm7Date, val.atm30]);
    mean30ETHChartArr.push([tempAtm7Date, val.mean30]);
    stdUpper30ETHChartArr.push([tempAtm7Date, val.std_upper30])
    stdLower30ETHChartArr.push([tempAtm7Date, val.std_lower30])
  }
})

setTimeout(() => {
  var chart7 = new Highcharts.Chart({
    chart: {
        renderTo: 'ethAtm7',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'ETH atm7'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'ETH atm7'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [
    {
      name: 'mean7',
      data: mean7ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_upper7',
      data: stdUpper7ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_lower7',
      data: stdLower7ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'atm7',
      data: atm7ETHChartArr,
      visible: true,
      color: '#000000',
      lineWidth: 3,
    }]
  });

  var chart8 = new Highcharts.Chart({
    chart: {
        renderTo: 'ethAtm30',
        type: 'line',
        borderColor: '#000000',
        borderWidth: 1
    },
    title: {
      text: 'ETH atm30'
    },
    xAxis: {
      type: 'category',
      crosshair: true,
    },
    yAxis: [{
        title: {
          text: 'ETH atm7'
        },
        crosshair: true,
        gridLineWidth: 0,
    }],
    series: [
    {
      name: 'mean30',
      data: mean30ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_upper30',
      data: stdUpper30ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'std_lower30',
      data: stdLower30ETHChartArr,
      visible: true,
      color: '#1e8fbf'
    },
    {
      name: 'atm30',
      data: atm30ETHChartArr,
      visible: true,
      color: '#000000',
      lineWidth: 3
    }]
  });
}, 10000)