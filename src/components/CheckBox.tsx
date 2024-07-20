import { useEffect, useRef } from "react";

type CheckBoxProps = {
  label: string;
  value: string;
};

const CheckBox = ({ label, value }: CheckBoxProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (value == "indeterminated") {
        ref.current.indeterminate = true;
      } else if (value == "checked") {
        ref.current.checked = true;
      } else {
        ref.current.checked = false;
      }
    }
  }, [ref, value]);

  return (
    <span>
      <label>
        <input type="checkbox" name="" ref={ref} />
        {label}
      </label>
    </span>
  );
};

export default CheckBox;
