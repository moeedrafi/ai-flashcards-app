interface HeadingProps {
  heading: string;
  subHeading: string;
}

export const Heading = ({ heading, subHeading }: HeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {heading}
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
        {subHeading}
      </p>
    </div>
  );
};
