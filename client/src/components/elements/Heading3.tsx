import React from 'react';

interface Heading3Props {
  title: string;
}

const Heading3: React.FC<Heading3Props> = ({ title }) => {
  return (
    <h2 className="text-xl font-semibold mb-2">
      {title}
    </h2>
  );
};

export default Heading3;
