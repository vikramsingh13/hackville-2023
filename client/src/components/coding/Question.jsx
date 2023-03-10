import React from "react";
import DOMPurify from 'dompurify';

export default function Question({ question }) {
  return (
    <div className="w-1/3 bg-orange-200">
      	<h1 className="text-3xl text-center m-0 bg-slate-800 text-white p-6 border-black">
			Question
	  	</h1>
		<div className="bg-neutral-50 m-5 rounded-lg">
			<p className="m-3 p-6 text-2xl font-medium text-black" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}></p>
		</div>

    </div>
  );
}
