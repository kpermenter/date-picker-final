import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// List Group
export const ItemList = (props) => {
  console.log(props.postList);
  return (
    <ListGroup>
      {
        props.postList.map((item, index) =>
          <Item
            key={index}
            startDate={item.startDate}
            endDate={item.endDate}
            removeItem={() => props.removeItem(index)}
          />
        )
      }
    </ListGroup>
  );
};

// List Elements
export const Item = (props) => {
  const style = {
    display: "flex"
  }
  return (
    <div style={style}>
      <ItemButton label="x" handleClick={props.removeItem} />
      <ItemText text={props.startDate} width="auto" />
      <ItemText text={props.endDate} width="auto" />
    </div>
  );
};

// List Items
export const ItemText = (props) => {
  return (
    <ListGroup.Item>{props.text}</ListGroup.Item>
  );
};

// Delete Button
export const ItemButton = (props) => {
  return (
    <Button id="list-button" variant="danger"
      onClick={() => props.handleClick()}>{props.label}</Button>
  );
};