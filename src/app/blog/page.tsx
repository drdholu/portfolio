'use client'
import React, { useEffect, useState } from 'react'
import PageContainer from '@/components/PageContainer'
import { remark } from 'remark';
import html from 'remark-html';
import markdownContent from '../blogs/first.md';

const Page = () => {
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    const processMarkdown = async () => {
      const processedContent = await remark().use(html).process(markdownContent);
      setContentHtml(processedContent.toString());
    };
    processMarkdown();
  }, []);

  return (
    <PageContainer title='Blog' loading={!contentHtml}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </PageContainer>
  )
}

export default Page