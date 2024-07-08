import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <AwesomeSlider
        className="slider"
        bullets={false} // Disable navigation bullets
        style={{ height: "500px" }} // Adjust slider height as needed
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA0NDQ1ODF8&ixlib=rb-4.0.3&q=85"
            alt="cloth 1"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA0NDUxMTN8&ixlib=rb-4.0.3&q=85"
            alt="cloth 2"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA0NDQ1ODF8&ixlib=rb-4.0.3&q=85"
            alt="cloth 3"
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjA0NDQ1ODF8&ixlib=rb-4.0.3&q=85"
            alt="cloth 4"
            className="slider-image"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
}
