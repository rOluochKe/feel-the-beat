import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h2 className="text-xl font-semibold text-gray-700 my-3">
      {title}
    </h2>
  );
};

export default Title;