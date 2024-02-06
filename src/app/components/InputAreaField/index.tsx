import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const InputAreaField: React.FC = () => (
  <>
    <p>Response(14)</p>
    <TextArea rows={4} placeholder="Add to discussion" />
    <div className="pt-2">
      <button
        className={`w-24 h-10 rounded-full text-white bg-primary`}
      >
        Submit
      </button>
      <button className="w-24 h-10 mx-2 rounded-full bg-white border-2 hover:bg-neutral-100 border-neutral-200">
        Cancel
      </button>
    </div>
  </>
);

export default InputAreaField;
