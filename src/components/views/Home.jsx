import { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import Card from "../Card";

const Home = () => {
  const { pics, loading } = useContext(ApiContext);

  return (
    <div className="home">
      <div>
        <h1 className="title">Natural Pic</h1>
      </div>
      <div className="main">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
             { pics.map((pic) => (
              <Card propsPic={pic} key={pic.id} />
            ))} 
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
