import s from './SoftSkills.module.css';

function SoftSkills({ label }) {
  return (
    <ul>
      <li className={s.item}>
        <span className={s.text}>{label}</span>
      </li>
    </ul>
  );
}

export default SoftSkills;
