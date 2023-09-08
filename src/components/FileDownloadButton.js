import React from "react";
import poolListingThumbnail from "/src/img/poolListingThumbnail.png";




function FileDownloadButton() {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <img src={poolListingThumbnail} className="m-2 max-w-xs block" />


      <a
                  //this will save the file as "your_cv.pdf"
                  download="Elite-Splash--BR-Pool-Models.pdf"
                  //put the path of your pdf file
                  href="/src/img/Elite-Splash--BR-Pool-Models.pdf"
                  //reactstrap classes. add green button
                  className="btn btn-success font-bold py-2 px-4 rounded-full m-auto my-0"
                >
                  Download Pools PDF
                </a>
    </div>
  );
}

export default FileDownloadButton;
