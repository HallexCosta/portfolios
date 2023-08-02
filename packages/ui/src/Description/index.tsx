interface DescriptionProps {
  content: string;
}

export function Description({ content }: DescriptionProps) {
  return (
    <p className={`font-normal font-poppins text-sm text-gray-500 max-w-2xl`}>
      {content}
    </p>
  );
}
