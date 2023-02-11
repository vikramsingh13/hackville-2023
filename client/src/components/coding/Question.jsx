import React from "react";
import DOMPurify from 'dompurify';

export default function Question({ question }) {
  return (
    <div class="w-1/3 bg-orange-300">
      	<h1 className="text-4xl text-center m-7">
			Question
	  	</h1>
		<div>
			<p className="m-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}></p>
		</div>
    </div>
  );
}
