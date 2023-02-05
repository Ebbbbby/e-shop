import axios from "axios";
import  {useState} from "react";
import { useEffect } from "react";

const fetchData = async (column1, column2, pageSize) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products",{
      params: {
        column1,
        column2,
        pageSize,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [column1, setColumn1] = useState(null);
  const [column2, setColumn2] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchData(column1, column2, pageSize).then((data) => {

      setItems(data.data);
      setColumn1(data.lastColumn1);
      setColumn2(data.lastColumn2);
    });
  }, [column1, column2, pageSize]);
   console.log(items)
  return (
    <div>
      <ul style={{border:'1px solid black'}}>
        {items?.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setColumn1(null)}>Reset</button>
        <button onClick={() => setPageSize(pageSize + 10)}>Next Page</button>
      </div>
    </div>
  );
};

export default ItemsList;
