
import React from 'react'

export const Spinner = () => {
    const spinner_border = {
        isplay: "inline-block",
    width: "3rem",
    height: "3rem",
    verticalAlign: "-0.125em",
    border: "0.25em solid currentColor",
    borderRightColor: "transparent",
    borderRadius: "50%",
    animation: ".75s linear infinite spinner-border",
    color: "#7EBC12",
    boxSizing: "border-box",
    
    }
  return (
    // <!-- Spinner Start -->
        <div id="spinner"
            class="show bg-white fixed translate-x-[-50%] translate-y-[-50%] w-full h-[100vh] top-[50%] start-[50%] flex items-center justify-center">
            <div class="spinner-border text-[primary]" style={spinner_border} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        // <!-- Spinner End -->
  )
}
