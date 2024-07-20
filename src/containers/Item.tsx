import CheckBox from "../components/CheckBox";

type Data = {
  id: string;
  name: string;
  children: Record<string, Data>;
};

type ItemProps = {
  data: Record<string, Data>;
};

const Item = ({ data }: ItemProps) => {
  return (
    <div>
      {Object.entries(data).map(([key, item]) => (
        <div key={`${item.id}-${key}`}>
          <CheckBox id={item.id} label={item.name} />
          {Object.keys(item.children).length > 0 && (
            <div style={{ marginLeft: 10 }}>
              <Item data={item.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Item;
