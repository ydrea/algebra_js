import { useState } from "react";
import FirstStep from "./components/firstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import ForthStep from "./components/ForthStep";

const App = () => {
  const initialState = { ime: "", prezime: "", email: "", grad: "", zanimanje: "", godine: "" };
  const [data, setData] = useState(initialState);
  const [page, setPage] = useState(1);
  return (
    <div>
      {page === 1 && <FirstStep page={page} setPage={setPage} data={data} setData={setData} />}
      {page === 2 && <SecondStep page={page} setPage={setPage} data={data} setData={setData} />}
      {page === 3 && <ThirdStep page={page} setPage={setPage} data={data} />}
      {page === 4 && <ForthStep />}
    </div>
  );
};

export default App;
