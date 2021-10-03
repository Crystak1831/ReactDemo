import "./SampleCourse.css";
import PropTypes from "prop-types";
const SkillColumn = ({
  addSkill,
  handleInputChange,
  newSkill,
  skills,
  selectedCourseId,
  showError,
  selectSkill
}) => {
  const showErrorMessage = () => {
    if (showError) {
      return <div className="error-message">Please fill out all fields.</div>;
    }
    return;
  };
  return (
    <div className="skill-container">
      <ul className="skill-container__list">
        {skills.length > 0 &&
          skills.map((skill) => (
            <li
              key={skill.title + skill.id}
              onClick={() => selectSkill(skill.id)}
            >
              <strong>{skill.title}</strong>
              {selectedCourseId === skill.id && <div className="play-button" />}
            </li>
          ))}
      </ul>
      <form
        className="skill-container__addition"
        onSubmit={(e) => addSkill(e, newSkill)}
      >
        {showErrorMessage()}
        <input
          name="title"
          placeholder="Title"
          value={newSkill.title}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          name="description"
          placeholder="Description"
          value={newSkill.description}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          name="videoUrl"
          placeholder="Video Url"
          value={newSkill.videoUrl}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(e) => addSkill(e, newSkill)}>Add New Skill</button>
      </form>
    </div>
  );
};
SkillColumn.propTypes = {
  addSkill: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newSkill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired
  }).isRequired,
  skills: PropTypes.array.isRequired,
  selectedCourseId: PropTypes.number.isRequired,
  showError: PropTypes.bool.isRequired,
  selectSkill: PropTypes.func.isRequired
};
export default SkillColumn;
