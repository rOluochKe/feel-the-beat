import React from 'react'

interface ParagraphProps {
  content: string | number | null;
}

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
  return (
    <p className="font-normal text-gray-500 dark:text-gray-400">{content}</p>
  )
}

export default Paragraph
