interface TextFieldProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: () => void;
}

export default function TextField({
  type,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-2 py-3"
    />
  );
}
