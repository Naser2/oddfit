const NotificationIcon = () => {
    return (
      <div>
        <div>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:rea:"
            data-state="closed"
            aria-label="681 unseen notifications"
            className="bell_btn__yil2q bell_shadow__1T7KD lg:!bg-[#f9f9f985] lg:hover:bg-gray-200 dark:!bg-black" 
            data-testid="notifications/bell"
          >
            <span className="bell_buttonContent__IPiYG">
              <div className="bell_icon__U0zUM">
                <svg
                  className="bell_svgNoPointerEvents__9aVJk var(--ds-gray-900);"
                  data-testid="geist-icon"
                  height={16}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={16}
                  style={{ width: '16px', height: '16px', color: 'var(--ds-gray-900)' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <svg
                className="bell_statusIcon__XjZwm"
                data-testid="geist-icon"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
                style={{
                  color: 'var(--ds-blue-900)',
                  '-geistFill': 'currentColor',
                  '-geistStroke': 'var(--geist-background)',
                  width: '10px',
                  height: '10px',
                }}
              >
                <circle cx={12} cy={12} r={10} fill="var(--geist-fill)" />
              </svg>
            </span>
          </button>
      
        </div>
      </div>
    );
  };
  
  
  

  export default NotificationIcon 