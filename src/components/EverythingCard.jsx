import React from "react";

function EverythingCard(props) {
  const isDark = props.theme === "dark-theme";

  return (
    <div
      className={`mt-10 rounded-[24px] shadow-xl p-5 border transition-all duration-300 ${
        isDark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="flex flex-wrap gap-4 mb-1">
        <b className="text-2xl leading-tight">
          {props.title || "No Title Available"}
        </b>

        <div className="mx-auto w-full flex justify-center">
          <img
            className="w-[300px] h-[160px] object-cover rounded-[16px]"
            src={props.imgUrl || "https://via.placeholder.com/300x160?text=No+Image"}
            alt={props.title || "news"}
          />
        </div>

        <div className="w-full">
          <p
            className={`leading-7 text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {props.description
              ? props.description.substring(0, 200)
              : "No description available."}
          </p>
        </div>

        <div className="w-full mt-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className={`underline break-words ${
                isDark ? "text-blue-300" : "text-blue-700"
              }`}
            >
              {props.source ? props.source.substring(0, 70) : "Unknown Source"}
            </a>
          </div>

          <div className="flex flex-col mt-2 gap-1">
            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
              <span className="font-semibold mr-1">Author:</span>
              {props.author || "Unknown"}
            </p>

            <p className={isDark ? "text-gray-300" : "text-gray-700"}>
              <span className="font-semibold mr-1">Published At:</span>
              {props.publishedAt || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EverythingCard;