import React from 'react';
import logo from './logo.svg';
import Chart from "react-google-charts";
import './App.css';

function App() {
    return (
    <div className="App">
        <Chart
        width={'700px'}
        height={'450px'}
        chartType="GeoChart"
        data={[
            ['Country', 'Authors'],
            ['China', 484],
            ['United States', 518],
            ['Australia', 222],
            ['France', 207],
            ['Italy', 193],
            ['Brazil', 166],
            ['Spain', 97],
            ['Finland', 74],
            ['Canada', 62],
            ['Taiwan', 72],
            ['Japan', 93],
            ['Netherlands', 81],
            ['Belgium', 52],
            ['Turkey', 46],
            ['Germany', 45],
            ['Switzerland', 41],
            ['Chile', 41],
            ['Mexico', 31],
            ['South Africa', 29],
            ['Gabon', 28],
            ['United Kingdom', 145],
            ['Greece', 20],
            ['Thailand', 20],
            ['South Korea', 61],
            ['Poland', 14],
            ['Sweden', 13],
            ['Norway', 12],
            ['Iran', 12],
            ['Saudi Arabia', 11],
            ['Singapore', 14],
            ['Austria', 10],
            ['Malaysia', 10],
            ['Kenya', 10],
            ['Scotland', 10],
            ['Israel', 11],
            ['India', 8],
            ['New Zealand', 8],
            ['Cambodia', 8],
            ['Cameroon', 8],
            ['Algeria', 8],
            ['Niger', 8],
            ['Argentina', 7],
            ['México', 7],
            ['Peru', 7],
            ['LaoPDR', 7],
            ['Qatar', 7],
            ['Tunisia', 6],
            ['Vietnam', 9],
            ['Denmark', 6],
            ['Papua New Guinea', 6],
            ['Jordan', 6],
            ['Colombia', 5],
            ['Ethiopia', 5],
            ['Slovenia', 5],
            ['Ireland', 5],
            ['Tanzania', 5],
            ['Serbia', 5],
            ['Sri Lanka', 4],
            ['England', 4],
            ['Portugal', 3],
            ['Kenya', 3],
            ['Nicaragua', 3],
            ['Russia', 3],
            ['Bulgaria', 2],
            ['Egypt', 2],
            ['Indonesia', 2],
            ['Nigeria', 2],
            ['United Arab Emirates', 1],
            ['Cameroun', 1],
            ['Nepal', 1],
            ['Myanmar', 1],
            ['Philippines', 1],
            ['Croatia', 1],
            ['Botswana', 1],
            ['Costa Rica', 1],
            ['Zimbabwe', 1],
            ['Lithuania', 1],
        ]}
        options={{
            title: 'Interactive Map for Distribution of Authors',
            colorAxis: {colors: ['blue']}
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyCB1S5xoD0fdSzSX3BZR8jDAUuSwKMqn5w"
        rootProps={{ 'data-testid': '1' }}
        />
    </div>
  );
}

export default App;
