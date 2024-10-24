import React from 'react';
import Link from 'next/link';
import NotificationIcon from './icons/NotificationIcon';

const NavbarUserAvatarComponent = ({ userProfile, user }) => {
  // Determine first and last name from userProfile or user metadata
  const firstName = userProfile?.first_name || user?.user_metadata?.first_name || 'Create a profile';
  const lastName = userProfile?.last_name || user?.user_metadata?.last_name || 'Create a profile';

  // Determine avatar URL from userProfile or use a default image
  const avatarUrl = userProfile?.avatar_url || '/omariIcon.jpg';

  return (
    <div className="flex items-center px-5 sm:px-6">
      <Link href="/profile" className="flex-shrink-0">
        <img
          alt="User Avatar"
          src={avatarUrl}
          className="h-10 w-10 rounded-full"
        />
      </Link>
      <div className="ml-3 pl-4">
        <div className="text-lg font-medium text-white/70">
          {firstName !== 'Create a profile' && lastName !== 'Create a profile' 
            ? `${firstName} ${lastName}` 
            : 'User'}
        </div>
      </div>
      <div className='flex-end ml-[34vw]'>
        <Link href="/messages"
          type="button"
          className="relative ml-auto flex-shrink-0 rounded-full p-1 mainText hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <Link href="/profile/notifications">
            <NotificationIcon/>
          </Link>
        </Link>
      </div>  
    </div>
  );
};

export default NavbarUserAvatarComponent;

;

