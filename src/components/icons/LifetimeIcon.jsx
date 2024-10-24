

export default function LifetimeIcon(){
   return  (<svg className="absolute inset-0 h-full w-full z-10 [mask-image:linear-gradient(to_top,white,transparent)]"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <pattern
            id="all-access-grid-pattern"
            width={32}
            height={32}
            patternUnits="userSpaceOnUse"
            x="50%"
            y="100%"
            patternTransform="translate(0 -1)"
            >
            <path d="M0 32V.5H32" fill="none" stroke="currentColor" />
            </pattern>
        </defs>
        <rect
            width="100%"
            height="100%"
            fill="url(#all-access-grid-pattern)" />
        </svg>)
}




