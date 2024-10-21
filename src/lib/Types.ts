// Define the User type based on Supabase auth data

import PropTypes from 'prop-types';
export type SupabaseAuthUser = {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string | null;
    phone: string;
    confirmed_at: string | null;
    last_sign_in_at: string | null;
    app_metadata: {
      provider: string;
      providers: string[];
    };
    user_metadata: {
      email: string;
      email_verified: boolean;
      first_name: string;
      last_name: string;
      phone: string;
      phone_verified: boolean;
      sub: string;
    };
    identities: {
      id: string;
      provider: string;
      identity_data: any;
      created_at: string;
      updated_at: string;
    }[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
  };
  
  // Define the UserProfile type based on the profile data
  export type SupabaseUserProfile = {
    id: string;
    username: string | null;
    bio: string | null;
    website: string | null;
    gender: string | null;
    image: string | null;
    badges: string[] | null;
    saved_items: string[] | null;
    plan_id: string;
    track_id: string;
    total_sessions: number;
    created_at: string;
    updated_at: string;
    first_name: string;
    last_name: string;
  };
  
  // Define types for user activities, such as Likes, Comments, etc.
  export type UserLike = {
    id: string;
    user_id: string;
    content_id: string;
    created_at: string;
  };
  
  export type UserComment = {
    id: string;
    user_id: string;
    content_id: string;
    content: string;
    created_at: string;
  };
  
  // Define type for posts with associated data like comments and likes
  export type UserPost = {
    id: string;
    content: string;
    created_at: string;
    user_id: string;
    comments: UserComment[];
    likes: UserLike[];
    savedBy: string[]; // Array of user IDs who saved the post
  };
  
  // Define a comprehensive UserProfileWithExtras type for using in your components
  export type UserProfileWithExtras = SupabaseUserProfile & {
    posts: UserPost[];
    savedPosts: UserPost[];
    likes: UserLike[];
    comments: UserComment[];
  };
  


  export type Track = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  
    details: {
      _key: string;
      description: string;
      title: string;
    }[];
  
    execution?: any[]; // Update this type based on known structure if available
  
    exercises: {
      _key: string;
      _ref: string;
      _type: string;
    }[];
  
    images: {
      _key: string;
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }[];
  
    liked: boolean;
    likes: number;
    modules: string;
  
    participants: {
      _key: string;
      avatar: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
        crop?: {
          _type: string;
          bottom: number;
          left: number;
          right: number;
          top: number;
        };
        hotspot?: {
          _type: string;
          height: number;
          width: number;
          x: number;
          y: number;
        };
      };
      name: string;
    }[];
  
    price: string;
  
    reviews: {
      _key: string;
      author: string;
      avatar: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      date: string;
      datetime: string;
      description: string;
      featured: boolean;
      rating: number;
      title: string;
    }[];
  
    sessions: number;
    stars: number;
    summary: string;
    title: string;
  };
  
// export const trackPropType = PropTypes.shape({
//   _createdAt: PropTypes.string.isRequired,
//   _id: PropTypes.string.isRequired,
//   _rev: PropTypes.string.isRequired,
//   _type: PropTypes.string.isRequired,
//   _updatedAt: PropTypes.string.isRequired,

  
//   details: PropTypes.arrayOf(
//     PropTypes.shape({
//       _key: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   execution: PropTypes.arrayOf(PropTypes.any), // Can be updated based on known structure
//   exercises: PropTypes.arrayOf(
//     PropTypes.shape({
//       _key: PropTypes.string.isRequired,
//       _ref: PropTypes.string.isRequired,
//       _type: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       _key: PropTypes.string.isRequired,
//       _type: PropTypes.string.isRequired,
//       asset: PropTypes.shape({
//         _ref: PropTypes.string.isRequired,
//         _type: PropTypes.string.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
//   liked: PropTypes.bool.isRequired,
//   likes: PropTypes.number.isRequired,
//   modules: PropTypes.string.isRequired,
//   participants: PropTypes.arrayOf(
//     PropTypes.shape({
//       _key: PropTypes.string.isRequired,
//       avatar: PropTypes.shape({
//         _type: PropTypes.string.isRequired,
//         asset: PropTypes.shape({
//           _ref: PropTypes.string.isRequired,
//           _type: PropTypes.string.isRequired,
//         }).isRequired,
//         crop: PropTypes.shape({
//           _type: PropTypes.string,
//           bottom: PropTypes.number,
//           left: PropTypes.number,
//           right: PropTypes.number,
//           top: PropTypes.number,
//         }),
//         hotspot: PropTypes.shape({
//           _type: PropTypes.string,
//           height: PropTypes.number,
//           width: PropTypes.number,
//           x: PropTypes.number,
//           y: PropTypes.number,
//         }),
//       }).isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   price: PropTypes.string.isRequired,
//   reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       _key: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//       avatar: PropTypes.shape({
//         _type: PropTypes.string.isRequired,
//         asset: PropTypes.shape({
//           _ref: PropTypes.string.isRequired,
//           _type: PropTypes.string.isRequired,
//         }).isRequired,
//       }).isRequired,
//       date: PropTypes.string.isRequired,
//       datetime: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       featured: PropTypes.bool.isRequired,
//       rating: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   sessions: PropTypes.number.isRequired,
//   stars: PropTypes.number.isRequired,
//   summary: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// });


