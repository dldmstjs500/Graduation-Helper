import React from "react";
import axios from "axios";
import {
  GET_YEAR,
  GET_SEMESTER,
  GET_SUBJECT,
  GET_COURSE,
  GET_SECTION
} from "api";

import { Cascader } from "antd";
import "styles/ClassSelection.css";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    isLeaf: false
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    isLeaf: false
  }
];

class ClassSelection extends React.Component {
  state = {
    options
  };
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: "dynamic1"
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: "dynamic2"
        }
      ];
      this.setState({
        options: [...this.state.options]
      });
    }, 1000);
  };
  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

export default ClassSelection;
