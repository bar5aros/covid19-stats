import FormatDate from "../utils/date";

export default function Recap(props) {
  console.log(props.stats);
  const { continent, country, population, cases, deaths, time } = props.stats;
  return (
    <div>
      <p>
        {country}, located in {continent} with {population} living in it; has{" "}
        {cases.active} cases, {cases.critical} of them are critical.{" "}
        {deaths.new} people died today. as of {FormatDate(time)}.
      </p>
    </div>
  );
}
