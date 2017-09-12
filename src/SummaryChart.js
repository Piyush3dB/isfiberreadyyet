import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryBar,
} from 'victory';

const BLACK = "#262626";
const GRAY = "#ccc";

const RED    = "#249c00";
const GREEN  = '#e80d0d';
const AMBER  = "#ff7b00";
const VIOLET = '#D7ACE6';
const BLUE   = "#8BC1FF";


const myDataset = [
    [ // Pass
      {x: "a", y: 1},
      {x: "b", y: 2},
      {x: "c", y: 3},
      {x: "d", y: 2},
      {x: "e", y: 1},
      {x: "f", y: 1},
      {x: "g", y: 1},
      {x: "h", y: 1},
      {x: "i", y: 1},
      {x: "j", y: 1},
      {x: "k", y: 1},
      {x: "l", y: 1}
    ],
    [ // Fail
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5},
      {x: "f", y: 1},
      {x: "g", y: 1},
      {x: "h", y: 1},
      {x: "i", y: 1},
      {x: "j", y: 1},
      {x: "k", y: 1},
      {x: "l", y: 1}
    ],
    [ // Amber
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5},
      {x: "f", y: 1},
      {x: "g", y: 1},
      {x: "h", y: 1},
      {x: "i", y: 1},
      {x: "j", y: 1},
      {x: "k", y: 1},
      {x: "l", y: 1}
    ],
    [ // Purple
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5},
      {x: "f", y: 1},
      {x: "g", y: 1},
      {x: "h", y: 1},
      {x: "i", y: 1},
      {x: "j", y: 1},
      {x: "k", y: 1},
      {x: "l", y: 1}
    ],
    [ // Blue
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5},
      {x: "f", y: 1},
      {x: "g", y: 1},
      {x: "h", y: 1},
      {x: "i", y: 1},
      {x: "j", y: 1},
      {x: "k", y: 1},
      {x: "l", y: 1}
    ],
  ];
  
  class SummaryChart extends React.Component {
    // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return {x: datum.x, y: (datum.y / totals[i]) * 100};
        });
      });
    }
  
    render() {
      let width = this.props.width;
      const dataset = this.transformData(myDataset);


      let styles = {
        xAxis: {
          grid: {
            stroke: GRAY,
            strokeWidth: 1,
            strokeDasharray: "3 3"
          },
          axis: {
            stroke: BLACK,
            strokeWidth: 1
          },
          ticks: {
            size: 5,
            stroke: BLACK,
            strokeWidth: 1
          },
          tickLabels: {
            fill: BLACK,
            fontFamily: "inherit",
            fontSize: 10
          }
        },
        yAxis: {
          grid: {
            stroke: GRAY,
            strokeWidth: 1,
            strokeDasharray: "3 3"
          },
          axis: {
            stroke: BLACK,
            strokeWidth: 1
          },
          ticks: {
            size: 1,
            stroke: BLACK,
            strokeWidth: 1
          },
          tickLabels: {
            fill: BLACK,
            fontFamily: "inherit",
            fontSize: 11,
          }
        },
        line: {
          data: {
            stroke: RED,
            strokeWidth: 3
          }
        },
        scatter: {
          data: {
            strokeWidth: 1,
            stroke: BLACK,
            fill: BLACK
          }
        }
      };

      return (
        <div className="Graph">
          <VictoryChart height={400} width={width*0.85}
            domainPadding={{x: 30, y: 20}}
          >
              <VictoryStack
              // R, G, A, V, B
                colorScale={[RED, GREEN, AMBER, VIOLET, BLUE]}
              >
                {dataset.map((data, i) => {
                  return <VictoryBar data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}%`}
                style={styles.yAxis}
              />
              <VictoryAxis
                style={styles.xAxis}
                tickFormat={["NoC sanity - structural", 
                             "NoC sanity - non-DDR", 
                             "ACE sanity - basic", 
                             "ACE sanity - extended", 
                             "ACE multi-init - basic", 
                             "ACE multi-init - extended", 
                             "ACE-lite sanity", 
                             "ACE + ACE-lite", 
                             "LLC non-Coh hit", 
                             "LLC address coverage", 
                             "LLC ways conflict", 
                             "CCC ways conflict", 
                             "",
                             ]}
              />
          </VictoryChart>
        </div>
      );
    }
  }



export default SummaryChart;
