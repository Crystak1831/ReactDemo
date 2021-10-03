import "./SampleCourse.css";
import { useState } from "react";
import PlayColumn from "./PlayColumn";
import SkillColumn from "./SkillColumn";

export default function SampleCourse() {
  const [newSkill, setNewSkill] = useState({
    id: 0,
    title: "",
    description: "",
    videoUrl: ""
  });
  const [skills, setSkills] = useState([]);
  const [showError, setShowError] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(-1);
  const handleInputChange = (e) => {
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value
    });
  };

  const addSkill = (e, newSkill) => {
    e.preventDefault();
    for (let key in newSkill) {
      if (key !== "id" && !newSkill[key].length) {
        setShowError(true);
        return;
      }
    }
    setShowError(false);
    const newSkillsList = [...skills, newSkill];
    setNewSkill({
      id: newSkillsList.length,
      title: "",
      description: "",
      videoUrl: ""
    });
    setSkills(newSkillsList);
  };

  const selectSkill = (selectedIndex) => {
    setSelectedCourseId(selectedIndex);
  };
  return (
    <div className="SampleCourse">
      <header className="sample-header">Sample Course</header>
      <div className="container">
        <SkillColumn
          newSkill={newSkill}
          skills={skills}
          selectedCourseId={selectedCourseId}
          showError={showError}
          selectSkill={(skills) => selectSkill(skills)}
          addSkill={(e, newSkill) => addSkill(e, newSkill)}
          handleInputChange={(e) => handleInputChange(e)}
        />
        {selectedCourseId >= 0 ? (
          <PlayColumn skills={skills} selectedCourseId={selectedCourseId} />
        ) : (
          <div className="content-container">
            <div className="empty-placeholder">
              Please select one video to play
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
