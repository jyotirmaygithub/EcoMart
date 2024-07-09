import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <AwesomeSlider
        className="slider"
        bullets={false} // Disable navigation bullets
        style={{ height: "400px" }} // Adjust slider height as needed
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1617143207675-e7e6371f5f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwzMXx8bmlrZSUyMHNob2VzJTIwfGVufDB8fHx8MTcyMDUyOTUxMnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="nike shoes 1"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1567016515344-5e3b0d67bb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHw0NHx8ZGVjb3JzfGVufDB8fHx8MTcyMDUyOTU4MHww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="decor"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1549438247-223f2db1dd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHw2M3x8Y2VyZWFscyUyMHxlbnwwfHx8fDE3MjA1Mjk2NDN8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="food"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1622774161048-863b17ed0d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfHNlYXJjaHwxMzF8fG1hYyUyMHxlbnwwfHx8fDE3MjA1Mjk5NDR8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="mac "
            className="slider-image"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
}
