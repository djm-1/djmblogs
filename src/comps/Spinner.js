import React from "react";

export default function Spinner() {
  return (
    <div className="text-center ml-auto mr-auto my-4">
      <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-blue-only text-danger">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
