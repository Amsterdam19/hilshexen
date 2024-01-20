import { LOCALE } from "@config";

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 italic ${className}`}>
      <span className="sr-only">Veröffentlicht am:</span>
      <span className="day">
        <FormattedDay datetime={datetime} />.
      </span>
      <span>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "long",
  });

  return (
    <>
      {date}
    </>
  );
};
const FormattedDay = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
    day: "numeric",
  });

  return (
    <>
      {date}
    </>
  );
};