import "./SampleCourse.css";
import PropTypes from "prop-types";
const PlayColumn = ({ skills, selectedCourseId }) => {
  return (
    <div className="content-container">
      <header>{skills[selectedCourseId].title}</header>
      <p>{skills[selectedCourseId].description}</p>
      <video controls>
        <source src={skills[selectedCourseId].videoUrl}></source>
      </video>
    </div>
  );
};
PlayColumn.propTypes = {
  skills: PropTypes.array.isRequired,
  selectedCourseId: PropTypes.number.isRequired
};
export default PlayColumn;
