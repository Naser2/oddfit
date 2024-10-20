"use client";

import { SupabaseUserProfile } from '@/lib/Types';
// import { useSession } from 'next-auth/react';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
// import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import Profile from './Profile';
export const profileWidth = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

export default function ProfileComponent({
  settings,
  user,
  userProfile
}: {
  settings?: boolean;
  user: SupabaseUserProfile;
  userProfile: SupabaseUserProfile;
}) {
  // const { data: session } = useSession();
  const [isMounted, setIsMounted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState({
    username: user?.username || 'Pick a username',
    image: user?.image,
    bio: user?.bio || '',
    bioMdx: user?.bioMdx,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settingsPage = settings || (searchParams.get('settings') === 'true' && pathname === '/settings');

  const handleDismiss = useCallback(() => {
    if (settingsPage) {
      // Perform navigation logic here
    }
  }, [settingsPage, user?.username, user?.name]);

  const handleSave = useCallback(async () => {
    setError('');
    setSaving(true);
      
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          bio: data.bio,  // Assuming 'bio' is part of the data object
        }),
      });
      if (!response) {
        console.log("RESOLVE_RES ?", response);
        setSuccess('NO_res saving profile.');
      }
      if (response.ok) {
        console.log("RESOLVE OK?")
        const bioMdx = await response.json();
        setData((prevData) => ({
          ...prevData,
          bioMdx,
        }));
        // Replace with the user URL after saving
        redirect(`/${user.username}`);
      } else if (response.status === 401) {
        console.log('Not authorized to edit this profile.');
        setError('Not authorized to edit this profile.');
      } 
      else if(response.status === 200) {
        setSuccess('200 Sucess saving profile.');
      }
      
      else {
          setSuccess('FAKE SUCCESS saving profile.');
        // setError('Error saving profile.');
      
      }
    } catch (error) {
      console.error("ERROR SAVE PROFILE", error);
      setError('Success-Error saving profile.');
    }
    
    setSaving(false);
  }, [data, user?.username]);

  useEffect(() => {
    const onKeyDown = async (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        await handleSave();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [handleDismiss, handleSave]);

  if (!isMounted) {
    return null; // Ensure consistent hook usage
  }

  return (
    <div className="min-h-screen pb-20">
     <Profile
       success={success}
        setSucces={setSuccess}
        user={user} 
        data={data} 
        setData={setData} 
        setError={setError} 
        setSaving={setSaving} 
        error={error} 
        saving={saving} 
        settings={settings} 
        session={userProfile}
        sessionUserName={userProfile?.first_name} 
        profileWidth={profileWidth}
      />
    </div>
  );
}



