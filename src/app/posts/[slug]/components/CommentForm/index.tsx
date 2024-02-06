'use client';

import { useState } from 'react';
import InputAreaField from 'app/components/InputAreaField';
export default function CommentForm() {
  const [enteredComment, setEnteredComment] = useState<string>('');

  return <div>
  <InputAreaField/>
  
  </div>;
}
