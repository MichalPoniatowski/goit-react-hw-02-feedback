import css from './Section.module.css';

const Section = ({ title, childern }) => {
  return (
    <section className={css.section}>
      <h1>{title}</h1>
      {childern}
    </section>
  );
};

export default Section;
