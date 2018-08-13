import React from "react";
import Item from "./Item.js";
import { List, Avatar } from "antd";

class ItemContainer extends React.Component {
  render() {
    return (
      <div style={{ width: "50%", margin: "auto" }}>
        ItemContainer
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              title: "Ant Design Title 1"
            },
            {
              title: "Ant Design Title 1"
            }
          ]}
          renderItem={item => <Item />}
        />
      </div>
    );
  }
}

export default ItemContainer;
