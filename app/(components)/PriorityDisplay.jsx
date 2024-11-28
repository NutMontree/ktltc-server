import { faFire } from "@fortawesome/free-solid-svg-icons";
 

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <div
        icon={faFire}
        className={` pr-1 ${
          priority > 0 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <div
        icon={faFire}
        className={` pr-1 ${
          priority > 1 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <div
        icon={faFire}
        className={`  pr-1 ${
          priority > 2 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <div
        icon={faFire}
        className={` pr-1 ${
          priority > 3 ? " text-red-400" : " text-slate-400"
        }`}
      />
      <div
        icon={faFire}
        className={` ${priority > 4 ? " text-red-400" : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
