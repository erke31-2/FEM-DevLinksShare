
interface HeadingProps {
  title: string;
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({ title, children }) => {
  return (
    <article className="w-full flex flex-col gap-y-2 px-8">
      <h2 className="font-bold text-2xl text-primaryColor">{title}</h2>
      <p className="text-gray-500">{children}</p>
    </article>
  );
};
export default Heading;
