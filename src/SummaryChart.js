import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryBar,
} from 'victory';
const myDataset = [
    [ // 1
        {x: "a", y: 1},
        {x: "b", y: 2},
        {x: "c", y: 3},
        {x: "d", y: 2},
        {x: "e", y: 1}
    ],
    [ // 2
        {x: "a", y: 2},
        {x: "b", y: 3},
        {x: "c", y: 4},
        {x: "d", y: 5},
        {x: "e", y: 5}
    ],
    [ // 3a
        {x: "a", y: 1},
        {x: "b", y: 2},
        {x: "c", y: 3},
        {x: "d", y: 4},
        {x: "e", y: 4}
    ],
    [ // 3b
        {x: "a", y: 1},
        {x: "b", y: 2},
        {x: "c", y: 3},
        {x: "d", y: 4},
        {x: "e", y: 4}
    ],
    [ // 4a
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 4b
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 5
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 6
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 7
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 8
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 9
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ],
    [ // 10
      {x: "a", y: 2},
      {x: "b", y: 3},
      {x: "c", y: 4},
      {x: "d", y: 5},
      {x: "e", y: 5}
    ]
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
      const dataset = this.transformData(myDataset);
      return (
        <div>
          <VictoryChart height={200} width={200}
            domainPadding={{x: 30, y: 20}}
          >
              <VictoryStack
                colorScale={['#e80d0d', "#249c00", "#ff7b00", '#D7ACE6', "#8BC1FF"]}
              >
                {dataset.map((data, i) => {
                  return <VictoryBar data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                width={200}
                height={200}
                tickFormat={(tick) => `${tick}%`}
              />
              <VictoryAxis
                tickFormat={["aa", "bb", "cc", "dd", "e"]}
              />
          </VictoryChart>
        </div>
      );
    }
  }



export default SummaryChart;
