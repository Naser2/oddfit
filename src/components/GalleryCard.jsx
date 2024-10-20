import Image from "next/image"
import Link from "next/link"


 const GalleryCard =({item, key})=>{
    return <div 
    // className="xl:!w-[14em] xl:!h-[14em]"
    id="GALLERY-ITEM"
    data-id={item.id}
 
    data-idx={key}
    data-hook="item-link-wrapper"
    tabIndex={key}
  >
    <div  
      // className="gallery-item-container item-container-regular has-custom-focus visible hover-animation-fade-in"
      // id="pgi1_3"
      tabIndex={key}
      aria-label=""
      data-hash={key}
      data-id={item.id}
      data-idx={key}
      role=""
      // data-hook="item-container"
      style={{
    
        transition: "opacity 0.2s ease 0s",
        opacity: 1,
        display: "block"
      }}
    >
 
       
         
            <Image 
            //  className="h-full w-full object-cover"
              alt=""
              className="gallery-item-visible gallery-item gallery-item-preloaded h-full w-full  object-contain"
              data-hook="gallery-item-image-img"
              data-idx={item.id}
              scr={item.imageUrl.src}
              srcSet={item.imageUrl.src}
              src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Online Fitness Challenges/01.jpg"
              loading="eager"
              // style={{ width:'12em', height: '12em' }}
              width={322}
              height={322}
            />
        
          <div
            className="item-hover-flex-container"
            style={{ width:'12em', height: '12em',
              marginTop: 0,
              marginLeft: 0,
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <div
              data-hook="item-hover-3"
              aria-hidden="true"
              className="gallery-item-hover fullscreen-enabled default force-hover item-overlay-regular"
              // style={{ width: 322, height: 322, margin: 0, position: "relative" }}
            >
              <div className="gallery-item-hover-inner">
                <div className="ProGalleryInfoItem1555825819__root ProGalleryInfoItem1555825819--isEnableClickOnItem">
                  <div
                    className="ProGalleryHoverItem2744258851__root ProGalleryHoverItem2744258851---overlayEffect-1-1"
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div
                      className="ProGalleryHoverItem2744258851__caption "
                      style={{ color: "rgb(247, 247, 247)", maxWidth: "273.7px" }}
                    >
                      <Link  className=" p-2 rounded-full text-slate-100 hover:text-sky-400" href="https://www.instagram.com/omaridoesfitness/?hl=en"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 11,
                          lineHeight: 24,
                          maxHeight: 264,
                          overflow: "hidden"
                         
                        }}
                      >
                        <svg aria-label="Threads" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 192 192" width="16"><title>Threads</title><path class="xcslo1z" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>@omaridoesfitness,
                        
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      
    </div>
  </div>
  
}

export default GalleryCard