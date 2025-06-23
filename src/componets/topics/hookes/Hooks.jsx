import axios from "axios";
import { useEffect, useState } from "react";

export const Hooks = () => {
  const [hooksList, setHooksList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/topics")
      .then((res) => {
        console.info(res.data);
        setHooksList(res.data.hooks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <h1>Hooks</h1>

      <div className="hooks-list-section">
        {hooksList.map((hook) => (
          <p key={hook.id}>{hook.title}</p>
        ))}
      </div>
    </>
  );
};
