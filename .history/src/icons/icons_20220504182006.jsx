import React from "react";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    const {width, this.height, this.name, this.className, this.ref} = props;
    // this.width = props.width;
    // this.height = props.height;
    // this.name = props.name;
    // this.className = props.className;
    // this.ref = props.ref;
  }
  render() {
    switch (this.name) {
      case "logo":
        return (
          <svg
            className={this.className}
            width={this.width}
            height={this.height}
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0222 23.6646C30.0494 23.983 29.8009 24.2566 29.4846 24.2566H3.46924C3.15373 24.2566 2.90553 23.9843 2.93156 23.6665L4.7959 0.912269C4.8191 0.629618 5.05287 0.412109 5.33372 0.412109H27.5426C27.8226 0.412109 28.0561 0.628527 28.0801 0.910361L30.0222 23.6646Z"
              fill="#1DCF65"
            />
            <path
              d="M32.0988 29.6014C32.1313 29.9985 31.8211 30.339 31.4268 30.339H1.59438C1.2009 30.339 0.890922 30.0002 0.922082 29.6037L3.06376 2.34717C3.09168 1.9927 3.38426 1.71973 3.73606 1.71973H29.1958C29.5468 1.71973 29.8391 1.99161 29.868 2.34499L32.0988 29.6014Z"
              fill="url(#paint0_linear_150_362)"
            />
            <path
              d="M15.9232 21.6953C12.0402 21.6953 8.88135 17.8631 8.88135 13.1528C8.88135 12.9075 9.07815 12.7085 9.32109 12.7085C9.56403 12.7085 9.76084 12.9073 9.76084 13.1528C9.76084 17.3732 12.5253 20.8067 15.9234 20.8067C19.3214 20.8067 22.0859 17.3732 22.0859 13.1528C22.0859 12.9075 22.2827 12.7085 22.5257 12.7085C22.7686 12.7085 22.9654 12.9073 22.9654 13.1528C22.9653 17.8631 19.8062 21.6953 15.9232 21.6953Z"
              fill="white"
            />
            <path
              d="M20.2581 13.0337C20.1456 13.0337 20.0331 12.9904 19.9471 12.9036C19.7754 12.7301 19.7754 12.4488 19.9471 12.2753L22.226 9.97292C22.3084 9.88966 22.4203 9.84277 22.5369 9.84277C22.6536 9.84277 22.7654 9.88952 22.8479 9.97292L25.1045 12.2529C25.2762 12.4264 25.2762 12.7077 25.1045 12.8812C24.9327 13.0546 24.6543 13.0547 24.4826 12.8812L22.5368 10.9155L20.569 12.9036C20.4831 12.9904 20.3706 13.0337 20.2581 13.0337Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_150_362"
                x1="25.8733"
                y1="26.3337"
                x2="7.51325"
                y2="4.9008"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#52D67A" />
                <stop offset="1" stop-color="#5AEE87" />
              </linearGradient>
            </defs>
          </svg>
        );
      case "arrow":
        return (
          <svg
            ref={this.ref}
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5L4 0.5L7 3.5"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "arrow-down":
        return (
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 0.5L4 3.5L7 0.5"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      default:
        return <div></div>;
    }
  }
}
export default Icons;
