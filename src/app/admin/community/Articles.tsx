import React from 'react'
import UserManagement from '../user/UserManagement';
import ArticleManagement from './ArticleManagement';

interface ArticlesProps {
  showComponent: number;
}

export default function Articles(props: ArticlesProps) {
  return (
    <div>
    <h1 className="text-4xl font-bold text-slate-600 w-full border-b border-bgGreen pb-4">Article List</h1>
    <div>
        <ArticleManagement />
      </div>
    </div>
  )
}
