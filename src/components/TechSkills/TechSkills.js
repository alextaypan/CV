import s from './TechSkills.module.css';

function TechSkills({ label }) {
  return (
    <ul>
      <li className={s.item}>
        <span className={s.text}>{label}</span>
      </li>
    </ul>
  );
}

export default TechSkills;
