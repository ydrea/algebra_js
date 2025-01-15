import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [kartica, setKartica] = useState([]);
  const [editKartica, setEditKartica] = useState({
    kartica: {},
    edit: false,
  });

  const editFeedback = (kartica) => {
    setEditKartica({
      kartica,
      edit: true,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/kartice")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Niste dohvatili podatke");
        }
        return res.json();
      })
      .then((data) => {
        setKartica(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Greška", error));
  }, []);

  const updateFeedback = async (id, updatedCard) => {
    const res = await fetch(`http://localhost:3000/kartice/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCard),
    });
    const data = await res.json();
    setKartica(
      kartica.map((feedback) => (feedback.id === id ? { ...kartica, ...data } : feedback))
    );
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/kartice/${id}`, {
      method: "DELETE",
    });
    setKartica(kartica.filter((item) => item.id != id));
  };

  const handleFeedback = async (unos) => {
    const res = await fetch("http://localhost:3000/kartice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unos),
    });
    const data = await res.json();
    setKartica([data, ...kartica]);
  };

  return (
    <Context.Provider
      value={{
        kartica,
        editKartica,
        isLoading,
        updateFeedback,
        editFeedback,
        handleDelete,
        handleFeedback,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
